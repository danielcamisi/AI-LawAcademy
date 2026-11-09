"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { trilhas, totais } from "../data/trilhas";
import { situacao, type Progresso } from "./progresso";
import { Balanca, ROMANOS } from "./ui";

const ALTURAS = [262, 286, 248, 296, 270];
const LARGURAS = [62, 70, 66, 72, 76];

type Props = { progresso: Progresso; abrir: (slug: string) => void };

export default function Inicio({ progresso, abrir }: Props) {
  return (
    <>
      <section className="banda banda--couro">
        <div className="wrap hero">
          <motion.div
            className="hero__texto"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <p className="sobrelinha sobrelinha--claro">Programa de capacitação em inteligência artificial</p>
            <h1 className="hero__titulo">O vade-mécum de IA do escritório</h1>
            <p className="hero__lead">
              Uma trilha para cada setor, com aulas curtas, modelos de prompt prontos para copiar e casos da rotina
              previdenciária. Escolha um volume na estante e comece.
            </p>
            <div className="hero__acoes">
              <button className="botao botao--latao" onClick={() => abrir("fundamentos")}>
                Começar pelo Vol. I <ArrowRight size={18} aria-hidden="true" />
              </button>
              <a className="botao botao--fantasma" href="#metodo-caso" onClick={(e) => { e.preventDefault(); document.getElementById("metodo-caso")?.scrollIntoView({ behavior: "smooth" }); }}>
                Conhecer o método CASO
              </a>
            </div>
            <dl className="hero__numeros">
              <div><dt>Volumes</dt><dd>{totais.volumes}</dd></div>
              <div><dt>Aulas</dt><dd>{totais.aulas}</dd></div>
              <div><dt>Modelos de prompt</dt><dd>{totais.prompts}</dd></div>
              <div><dt>Casos práticos</dt><dd>{totais.casos}</dd></div>
            </dl>
          </motion.div>

          <div className="estante" aria-label="Estante de volumes">
            <div className="estante__livros">
              {trilhas.map((t, i) => {
                const s = situacao(t, progresso);
                return (
                  <motion.button
                    key={t.slug}
                    className={`lombada lombada--${t.couro}`}
                    style={{ height: ALTURAS[i], width: `clamp(46px, 11vw, ${LARGURAS[i]}px)` }}
                    onClick={() => abrir(t.slug)}
                    initial={{ y: 90, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.15 + i * 0.09, type: "spring", stiffness: 140, damping: 16 }}
                    whileHover={{ y: -16, rotate: i % 2 ? 1.2 : -1.2 }}
                    whileTap={{ y: -6 }}
                    aria-label={`${t.volume}: ${t.nome}. ${s.pct}% concluído`}
                    title={`${t.volume} · ${t.nome}`}
                  >
                    {s.iniciada && <span className={`fita ${s.concluida ? "fita--ouro" : ""}`} aria-hidden="true" />}
                    <span className="lombada__vol">{ROMANOS[i]}</span>
                    <span className="lombada__friso" aria-hidden="true" />
                    <span className="lombada__titulo">{t.lombada}</span>
                    <span className="lombada__friso" aria-hidden="true" />
                    <span className="lombada__pe">IA</span>
                  </motion.button>
                );
              })}
              <motion.div
                className="estante__balanca"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.75, duration: 0.5 }}
                aria-hidden="true"
              >
                <Balanca size={84} animada />
              </motion.div>
            </div>
            <div className="estante__prateleira" aria-hidden="true" />
            <p className="estante__legenda">Toque em um volume para abrir</p>
          </div>
        </div>
      </section>

      <section className="banda">
        <div className="wrap secao">
          <header className="secao__cabeca">
            <p className="sobrelinha">Sumário</p>
            <h2 className="secao__titulo">Os cinco volumes</h2>
          </header>
          <ol className="sumario">
            {trilhas.map((t) => {
              const s = situacao(t, progresso);
              return (
                <li key={t.slug}>
                  <button className="sumario__item" onClick={() => abrir(t.slug)}>
                    <span className="sumario__vol">{t.volume}</span>
                    <span className="sumario__nome">
                      <strong>{t.nome}</strong>
                      <small>{t.publico}</small>
                    </span>
                    <span className="sumario__pontilhado" aria-hidden="true" />
                    <span className="sumario__meta">
                      {t.aulas.length} aulas · {t.duracao}
                    </span>
                    <span className="sumario__progresso" aria-label={`${s.pct}% concluído`}>
                      <span style={{ width: `${s.pct}%` }} />
                    </span>
                  </button>
                </li>
              );
            })}
          </ol>
        </div>
      </section>

      <section className="banda banda--papel2" id="metodo-caso">
        <div className="wrap secao">
          <header className="secao__cabeca">
            <p className="sobrelinha">O método da casa</p>
            <h2 className="secao__titulo">Todo bom pedido é um CASO</h2>
            <p className="secao__lead">
              Quatro partes que transformam um pedido vago em uma resposta pronta para usar. O método aparece em todos os
              modelos de prompt da Academia.
            </p>
          </header>
          <div className="caso-letras">
            {[
              ["C", "Contexto", "Quem você é, qual é a situação e para quem é o resultado."],
              ["A", "Ação", "O que você quer, com um verbo claro: resumir, escrever, listar."],
              ["S", "Saída", "O formato: tabela, e-mail, WhatsApp de até 4 linhas."],
              ["O", "Observações", "Regras e limites: não prometer resultado, não inventar."],
            ].map(([l, p, d], i) => (
              <motion.div
                key={l}
                className="caso-letra"
                initial={{ opacity: 1, y: 0 }}
                whileInView={{ y: [18, 0], opacity: [0.2, 1] }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ delay: i * 0.08, duration: 0.45 }}
              >
                <span className="caso-letra__l">{l}</span>
                <strong>{p}</strong>
                <p>{d}</p>
              </motion.div>
            ))}
          </div>

          <div className="comparativo">
            <article className="folha">
              <p className="folha__rotulo">Pedido fraco</p>
              <p className="folha__texto">Escreve uma mensagem para o cliente.</p>
              <motion.span
                className="carimbo carimbo--vermelho comparativo__carimbo"
                initial={{ scale: 1, rotate: -11, opacity: 1 }}
                whileInView={{ scale: [2, 0.94, 1], opacity: [0, 1, 1] }}
                viewport={{ once: true, amount: 0.8 }}
                transition={{ duration: 0.45, delay: 0.2 }}
              >
                Indeferido
              </motion.span>
            </article>
            <article className="folha">
              <p className="folha__rotulo">Pedido CASO</p>
              <p className="folha__texto">
                <b>C</b> Sou do comercial de um escritório previdenciário. <b>A</b> Escreva uma mensagem de boas-vindas
                para um lead que perguntou sobre aposentadoria. <b>S</b> Formato WhatsApp, até 4 linhas, tom acolhedor.{" "}
                <b>O</b> Não prometa resultado nem prazo.
              </p>
              <motion.span
                className="carimbo carimbo--verde comparativo__carimbo"
                initial={{ scale: 1, rotate: -11, opacity: 1 }}
                whileInView={{ scale: [2, 0.94, 1], opacity: [0, 1, 1] }}
                viewport={{ once: true, amount: 0.8 }}
                transition={{ duration: 0.45, delay: 0.55 }}
              >
                Deferido
              </motion.span>
            </article>
          </div>
        </div>
      </section>

      <section className="banda">
        <div className="wrap secao">
          <header className="secao__cabeca">
            <p className="sobrelinha">Disposições gerais</p>
            <h2 className="secao__titulo">As quatro regras da casa</h2>
          </header>
          <ol className="regras">
            <li>
              <span className="regras__num">§ 1º</span>
              <div>
                <strong>Sigilo antes de tudo.</strong> Nome, CPF, número de benefício e dados de saúde são trocados por
                marcadores antes de ir para a IA.
              </div>
            </li>
            <li>
              <span className="regras__num">§ 2º</span>
              <div>
                <strong>Só contas corporativas.</strong> Ferramentas pessoais e gratuitas ficam de fora do trabalho do
                escritório.
              </div>
            </li>
            <li>
              <span className="regras__num">§ 3º</span>
              <div>
                <strong>Toda resposta é rascunho.</strong> Nada sai do escritório sem revisão de uma pessoa.
              </div>
            </li>
            <li>
              <span className="regras__num">§ 4º</span>
              <div>
                <strong>Fonte oficial sempre.</strong> Lei, julgado e número citado pela IA são conferidos na origem.
              </div>
            </li>
          </ol>
        </div>
      </section>
    </>
  );
}
