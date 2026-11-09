"use client";

import { AnimatePresence, MotionConfig, motion } from "framer-motion";
import { useCallback, useEffect, useState } from "react";
import { trilhas } from "../data/trilhas";
import Inicio from "./Inicio";
import { situacao, useProgresso } from "./progresso";
import TrilhaView from "./TrilhaView";
import { Balanca } from "./ui";

function lerRota() {
  if (typeof window === "undefined") return "inicio";
  const h = window.location.hash.replace("#", "");
  return trilhas.some((t) => t.slug === h) ? h : "inicio";
}

export default function Portal() {
  const [rota, setRota] = useState("inicio");
  const { progresso, alternarLida, registrarExame } = useProgresso();

  useEffect(() => {
    setRota(lerRota());
    const aoMudar = () => {
      const nova = lerRota();
      setRota((atual) => {
        if (atual !== nova) window.scrollTo({ top: 0 });
        return nova;
      });
    };
    window.addEventListener("hashchange", aoMudar);
    return () => window.removeEventListener("hashchange", aoMudar);
  }, []);

  const abrir = useCallback((slug: string) => {
    if (slug === "inicio") {
      history.pushState(null, "", window.location.pathname + window.location.search);
      setRota("inicio");
    } else {
      window.location.hash = slug;
      setRota(slug);
    }
    window.scrollTo({ top: 0 });
  }, []);

  const trilha = trilhas.find((t) => t.slug === rota);
  const geral = Math.round(trilhas.reduce((n, t) => n + situacao(t, progresso).pct, 0) / trilhas.length);

  return (
    <MotionConfig reducedMotion="user">
      <header className="topo">
        <div className="wrap topo__linha">
          <button className="marca" onClick={() => abrir("inicio")} aria-label="Academia de IA, voltar ao início">
            <Balanca size={26} />
            <span className="marca__nome">Academia de IA</span>
          </button>
          <div className="topo__progresso" title="Progresso geral nos cinco volumes">
            <span className="topo__rotulo">Progresso geral</span>
            <span className="topo__barra" aria-hidden="true">
              <motion.span initial={false} animate={{ width: `${geral}%` }} />
            </span>
            <span className="topo__pct">{geral}%</span>
          </div>
        </div>
      </header>

      <main>
        <AnimatePresence mode="wait">
          <motion.div
            key={rota}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            {trilha ? (
              <TrilhaView
                trilha={trilha}
                progresso={progresso}
                voltar={() => abrir("inicio")}
                abrir={abrir}
                alternarLida={alternarLida}
                registrarExame={registrarExame}
              />
            ) : (
              <Inicio progresso={progresso} abrir={abrir} />
            )}
          </motion.div>
        </AnimatePresence>
      </main>

      <footer className="rodape">
        <div className="wrap rodape__linha">
          <p>
            <strong>Academia de IA</strong> · Prévia preparada pela ZIVVU para Toledo Advogados
          </p>
          <p>O progresso fica salvo apenas neste navegador.</p>
        </div>
      </footer>
    </MotionConfig>
  );
}
