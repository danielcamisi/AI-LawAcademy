"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, Check, ChevronDown, Copy, RotateCcw } from "lucide-react";
import { useRef, useState } from "react";
import { trilhas, type Prompt, type Trilha } from "../data/trilhas";
import { situacao, type Progresso } from "./progresso";
import { Carimbo, Destacar, Selo, ordinal } from "./ui";

const ABAS = [
  { id: "aulas", rotulo: "Aulas" },
  { id: "prompts", rotulo: "Modelos de prompt" },
  { id: "casos", rotulo: "Casos práticos" },
  { id: "cuidados", rotulo: "Cuidados" },
  { id: "exame", rotulo: "Exame" },
] as const;
type Aba = (typeof ABAS)[number]["id"];

type Props = {
  trilha: Trilha;
  progresso: Progresso;
  voltar: () => void;
  abrir: (slug: string) => void;
  alternarLida: (id: string) => void;
  registrarExame: (slug: string, acertos: number) => void;
};

export default function TrilhaView({ trilha, progresso, voltar, abrir, alternarLida, registrarExame }: Props) {
  const [aba, setAba] = useState<Aba>("aulas");
  const s = situacao(trilha, progresso);
  const idx = trilhas.findIndex((t) => t.slug === trilha.slug);
  const proxima = trilhas[idx + 1];

  return (
    <>
      <section className={`banda banda--volume couro--${trilha.couro}`}>
        <div className="wrap volume">
          <button className="voltar" onClick={voltar}>
            <ArrowLeft size={16} aria-hidden="true" /> Voltar à estante
          </button>
          <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }}>
            <p className="sobrelinha sobrelinha--claro">
              {trilha.volume} · {trilha.setor}
            </p>
            <h1 className="volume__titulo">{trilha.nome}</h1>
            <p className="volume__desc">{trilha.descricao}</p>
          </motion.div>
          <dl className="volume__meta">
            <div><dt>Para quem</dt><dd>{trilha.publico}</dd></div>
            <div><dt>Duração</dt><dd>{trilha.duracao}</dd></div>
            <div><dt>Aulas lidas</dt><dd>{s.lidas} de {trilha.aulas.length}</dd></div>
            <div><dt>Exame</dt><dd>{s.aprovado ? "Aprovado" : s.nota !== undefined ? "Refazer" : "Pendente"}</dd></div>
          </dl>
          <div className="volume__barra" role="progressbar" aria-valuenow={s.pct} aria-valuemin={0} aria-valuemax={100} aria-label="Progresso do volume">
            <motion.span initial={false} animate={{ width: `${s.pct}%` }} transition={{ type: "spring", stiffness: 120, damping: 20 }} />
          </div>
        </div>
      </section>

      <section className={`banda banda--abas couro--${trilha.couro}`}>
        <div className="wrap">
          <div className="abas" role="tablist" aria-label="Seções do volume">
            {ABAS.map((a) => (
              <button
                key={a.id}
                role="tab"
                id={`aba-${a.id}`}
                aria-selected={aba === a.id}
                className={`aba ${aba === a.id ? "aba--ativa" : ""}`}
                onClick={() => setAba(a.id)}
              >
                {aba === a.id && <motion.span layoutId="aba-fundo" className="aba__fundo" transition={{ type: "spring", stiffness: 420, damping: 34 }} />}
                <span className="aba__rotulo">{a.rotulo}</span>
                {a.id === "aulas" && <span className="aba__conta">{s.lidas}/{trilha.aulas.length}</span>}
                {a.id === "exame" && s.aprovado && <Check size={14} className="aba__ok" aria-label="aprovado" />}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="banda banda--folha">
        <div className="wrap secao secao--volume">
          <AnimatePresence mode="wait">
            <motion.div
              key={aba}
              role="tabpanel"
              aria-labelledby={`aba-${aba}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.22 }}
            >
              {aba === "aulas" && <Aulas trilha={trilha} progresso={progresso} alternarLida={alternarLida} />}
              {aba === "prompts" && <Prompts prompts={trilha.prompts} />}
              {aba === "casos" && <Casos trilha={trilha} />}
              {aba === "cuidados" && <Cuidados trilha={trilha} />}
              {aba === "exame" && <Exame key={trilha.slug} trilha={trilha} nota={s.nota} registrar={(n) => registrarExame(trilha.slug, n)} />}
            </motion.div>
          </AnimatePresence>

          {s.concluida && (
            <motion.div className="conclusao" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}>
              <Selo texto="Concluído" tamanho={88} />
              <div>
                <p className="sobrelinha">Volume concluído</p>
                <p className="conclusao__texto">
                  Você leu todas as aulas e foi aprovado no exame de {trilha.volume}.
                  {proxima ? " Siga para o próximo volume." : " Você concluiu a Academia."}
                </p>
              </div>
              {proxima && (
                <button className="botao botao--latao" onClick={() => abrir(proxima.slug)}>
                  {proxima.volume}: {proxima.lombada}
                </button>
              )}
            </motion.div>
          )}
        </div>
      </section>
    </>
  );
}

function Aulas({ trilha, progresso, alternarLida }: { trilha: Trilha; progresso: Progresso; alternarLida: (id: string) => void }) {
  const [aberta, setAberta] = useState<string | null>(trilha.aulas[0]?.id ?? null);
  return (
    <ol className="aulas">
      {trilha.aulas.map((a, i) => {
        const lida = progresso.lidas.includes(a.id);
        const estaAberta = aberta === a.id;
        return (
          <li key={a.id} className={`aula ${estaAberta ? "aula--aberta" : ""}`}>
            <button className="aula__cabeca" onClick={() => setAberta(estaAberta ? null : a.id)} aria-expanded={estaAberta}>
              <span className="aula__art">Art. {ordinal(i + 1)}</span>
              <span className="aula__titulos">
                <strong>{a.titulo}</strong>
                <small>{a.resumo}</small>
              </span>
              {lida && <Carimbo texto="Lido" animar={false} />}
              <ChevronDown className="aula__seta" size={20} aria-hidden="true" />
            </button>
            <AnimatePresence initial={false}>
              {estaAberta && (
                <motion.div
                  className="aula__corpo"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.28, ease: "easeInOut" }}
                >
                  <div className="aula__conteudo">
                    {a.corpo.map((p, k) => (
                      <p key={k}>{p}</p>
                    ))}
                    {a.dica && (
                      <aside className="dica">
                        <span className="dica__rotulo">Na prática</span>
                        {a.dica}
                      </aside>
                    )}
                    <div className="aula__rodape">
                      <button className={`botao ${lida ? "botao--contorno" : "botao--tinta"}`} onClick={() => alternarLida(a.id)}>
                        {lida ? "Desmarcar leitura" : "Marcar como lida"}
                      </button>
                      <AnimatePresence>{lida && <Carimbo key="c" texto="Lido" />}</AnimatePresence>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </li>
        );
      })}
    </ol>
  );
}

function Prompts({ prompts }: { prompts: Prompt[] }) {
  return (
    <>
      <p className="nota-topo">
        Copie, troque os campos em <mark className="campo">[COLCHETES]</mark> pelas informações do seu caso, sem dados
        pessoais, e cole na ferramenta de IA do escritório.
      </p>
      <div className="prompts">
        {prompts.map((p, i) => (
          <motion.article
            key={p.id}
            className="prompt"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
          >
            <PromptCard prompt={p} />
          </motion.article>
        ))}
      </div>
    </>
  );
}

function PromptCard({ prompt }: { prompt: Prompt }) {
  const [estado, setEstado] = useState<"livre" | "copiado" | "manual">("livre");
  const ref = useRef<HTMLPreElement>(null);

  const copiar = () => {
    const selecionar = () => {
      const el = ref.current;
      if (!el) return;
      const r = document.createRange();
      r.selectNodeContents(el);
      const sel = window.getSelection();
      sel?.removeAllRanges();
      sel?.addRange(r);
      setEstado("manual");
    };
    try {
      navigator.clipboard
        .writeText(prompt.texto)
        .then(() => {
          setEstado("copiado");
          setTimeout(() => setEstado("livre"), 1800);
        })
        .catch(selecionar);
    } catch {
      selecionar();
    }
  };

  return (
    <>
      <header className="prompt__cabeca">
        <div>
          <h3>{prompt.titulo}</h3>
          <p>{prompt.quando}</p>
        </div>
        <button className={`copiar ${estado === "copiado" ? "copiar--ok" : ""}`} onClick={copiar} aria-live="polite">
          {estado === "copiado" ? <Check size={16} aria-hidden="true" /> : <Copy size={16} aria-hidden="true" />}
          {estado === "copiado" ? "Copiado" : estado === "manual" ? "Texto selecionado" : "Copiar"}
        </button>
      </header>
      <pre ref={ref} className="prompt__texto">
        <Destacar texto={prompt.texto} />
      </pre>
    </>
  );
}

function Casos({ trilha }: { trilha: Trilha }) {
  return (
    <div className="casos">
      {trilha.casos.map((c, i) => (
        <motion.article key={c.titulo} className="caso" initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.07 }}>
          <p className="caso__num">Precedente {String(i + 1).padStart(2, "0")}/2026</p>
          <h3>{c.titulo}</h3>
          <div className="caso__colunas">
            <div>
              <p className="caso__rotulo">Antes</p>
              <p>{c.antes}</p>
            </div>
            <div>
              <p className="caso__rotulo caso__rotulo--depois">Com IA</p>
              <p>{c.depois}</p>
            </div>
          </div>
          <p className="caso__ganho">
            <span>Ganho</span> {c.ganho}
          </p>
        </motion.article>
      ))}
    </div>
  );
}

function Cuidados({ trilha }: { trilha: Trilha }) {
  return (
    <div className="cuidados">
      <p className="nota-topo">Regras obrigatórias para usar IA no {trilha.setor.toLowerCase()}.</p>
      <ol>
        {trilha.cuidados.map((c, i) => (
          <motion.li key={c} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.06 }}>
            <span className="regras__num">§ {ordinal(i + 1)}</span>
            <span>{c}</span>
          </motion.li>
        ))}
      </ol>
    </div>
  );
}

function Exame({ trilha, nota, registrar }: { trilha: Trilha; nota?: number; registrar: (n: number) => void }) {
  const [atual, setAtual] = useState(0);
  const [escolha, setEscolha] = useState<number | null>(null);
  const [acertos, setAcertos] = useState(0);
  const [fim, setFim] = useState(false);
  const total = trilha.exame.length;
  const minimo = Math.ceil(total * 0.66);

  const reiniciar = () => {
    setAtual(0);
    setEscolha(null);
    setAcertos(0);
    setFim(false);
  };

  if (fim) {
    const aprovado = acertos >= minimo;
    return (
      <div className="exame exame--fim">
        {aprovado ? <Selo texto="Aprovado" /> : <Carimbo texto="Refazer" />}
        <h3>
          {acertos} de {total} acertos
        </h3>
        <p>{aprovado ? "Muito bem. O exame deste volume está registrado no seu progresso." : `É preciso acertar pelo menos ${minimo}. Releia as aulas e tente de novo.`}</p>
        <button className="botao botao--contorno" onClick={reiniciar}>
          <RotateCcw size={16} aria-hidden="true" /> Refazer o exame
        </button>
      </div>
    );
  }

  const q = trilha.exame[atual];
  const respondida = escolha !== null;

  const responder = (i: number) => {
    if (respondida) return;
    setEscolha(i);
    if (i === q.correta) setAcertos((n) => n + 1);
  };

  const avancar = () => {
    if (atual + 1 < total) {
      setAtual(atual + 1);
      setEscolha(null);
    } else {
      setFim(true);
      registrar(acertos);
    }
  };

  return (
    <div className="exame">
      <div className="exame__topo">
        <p className="sobrelinha">
          Questão {atual + 1} de {total}
        </p>
        {nota !== undefined && <p className="exame__nota">Melhor resultado: {nota} de {total}</p>}
      </div>
      <AnimatePresence mode="wait">
        <motion.div key={atual} initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -24 }} transition={{ duration: 0.22 }}>
          <h3 className="exame__pergunta">{q.pergunta}</h3>
          <div className="exame__opcoes">
            {q.opcoes.map((o, i) => {
              const certo = respondida && i === q.correta;
              const errado = respondida && i === escolha && i !== q.correta;
              return (
                <button
                  key={o}
                  className={`opcao ${certo ? "opcao--certa" : ""} ${errado ? "opcao--errada" : ""}`}
                  onClick={() => responder(i)}
                  disabled={respondida}
                >
                  <span className="opcao__letra">{String.fromCharCode(97 + i)})</span>
                  <span>{o}</span>
                  {certo && <Check size={18} className="opcao__icone" aria-label="resposta correta" />}
                </button>
              );
            })}
          </div>
          {respondida && (
            <motion.div className="exame__explica" initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }}>
              <p>
                <strong>{escolha === q.correta ? "Correto." : "Não é essa."}</strong> {q.explicacao}
              </p>
              <button className="botao botao--tinta" onClick={avancar}>
                {atual + 1 < total ? "Próxima questão" : "Ver resultado"}
              </button>
            </motion.div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
