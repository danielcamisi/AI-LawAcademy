"use client";

import { useCallback, useEffect, useState } from "react";
import type { Trilha } from "../data/trilhas";

export type Progresso = { lidas: string[]; exames: Record<string, number> };

const CHAVE = "academia-ia:progresso:v1";
const VAZIO: Progresso = { lidas: [], exames: {} };

function gravar(p: Progresso) {
  try {
    localStorage.setItem(CHAVE, JSON.stringify(p));
  } catch {
    // sem armazenamento disponível: o progresso vale só nesta sessão
  }
}

export function useProgresso() {
  const [progresso, setProgresso] = useState<Progresso>(VAZIO);

  useEffect(() => {
    try {
      const salvo = localStorage.getItem(CHAVE);
      if (salvo) {
        const p = JSON.parse(salvo);
        setProgresso({ lidas: Array.isArray(p.lidas) ? p.lidas : [], exames: p.exames ?? {} });
      }
    } catch {
      // ignora leitura inválida
    }
  }, []);

  const alternarLida = useCallback((id: string) => {
    setProgresso((ant) => {
      const lidas = ant.lidas.includes(id) ? ant.lidas.filter((x) => x !== id) : [...ant.lidas, id];
      const novo = { ...ant, lidas };
      gravar(novo);
      return novo;
    });
  }, []);

  const registrarExame = useCallback((slug: string, acertos: number) => {
    setProgresso((ant) => {
      const melhor = Math.max(ant.exames[slug] ?? 0, acertos);
      const novo = { ...ant, exames: { ...ant.exames, [slug]: melhor } };
      gravar(novo);
      return novo;
    });
  }, []);

  return { progresso, alternarLida, registrarExame };
}

export function situacao(t: Trilha, p: Progresso) {
  const lidas = t.aulas.filter((a) => p.lidas.includes(a.id)).length;
  const nota = p.exames[t.slug];
  const minimo = Math.ceil(t.exame.length * 0.66);
  const aprovado = nota !== undefined && nota >= minimo;
  const total = t.aulas.length + 1;
  const feito = lidas + (aprovado ? 1 : 0);
  return {
    lidas,
    nota,
    aprovado,
    concluida: feito === total,
    iniciada: feito > 0,
    pct: Math.round((feito / total) * 100),
  };
}
