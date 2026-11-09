"use client";

import { motion } from "framer-motion";

export const ROMANOS = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII"];

export function ordinal(n: number) {
  return n < 10 ? `${n}º` : String(n);
}

export function Balanca({ size = 28, animada = false }: { size?: number; animada?: boolean }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" aria-hidden="true" className={animada ? "balanca balanca--viva" : "balanca"}>
      <g fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M24 7v33M15 42h18" />
        <circle cx="24" cy="6" r="1.8" fill="currentColor" />
        <g className="balanca__braco">
          <path d="M9 13h30" />
          <path d="M11 13 5.5 26M11 13l5.5 13M37 13l-5.5 13M37 13l5.5 13" />
          <path d="M4.5 26a6.5 3.6 0 0 0 13 0zM30.5 26a6.5 3.6 0 0 0 13 0z" fill="currentColor" fillOpacity=".18" />
        </g>
      </g>
    </svg>
  );
}

export function Carimbo({ texto, tom = "vermelho", animar = true }: { texto: string; tom?: "vermelho" | "verde"; animar?: boolean }) {
  return (
    <motion.span
      className={`carimbo carimbo--${tom}`}
      initial={animar ? { scale: 2.2, rotate: -24, opacity: 0 } : false}
      animate={{ scale: 1, rotate: -11, opacity: 1 }}
      transition={{ type: "spring", stiffness: 520, damping: 22 }}
    >
      {texto}
    </motion.span>
  );
}

export function Selo({ texto = "Aprovado", tamanho = 96 }: { texto?: string; tamanho?: number }) {
  return (
    <motion.div
      className="selo"
      style={{ width: tamanho, height: tamanho }}
      initial={{ scale: 0, rotate: -40 }}
      animate={{ scale: 1, rotate: 0 }}
      transition={{ type: "spring", stiffness: 260, damping: 14 }}
      aria-label={texto}
    >
      <svg viewBox="0 0 100 100" aria-hidden="true">
        <path
          className="selo__cera"
          d="M50 3c6 0 8 5 13 6s10-3 14 1 1 9 4 13 9 4 10 10-4 9-4 14 5 9 3 14-8 5-11 9-1 10-6 12-9-3-14-1-8 8-14 8-8-5-13-6-10 3-14-1-1-9-4-13-9-4-10-10 4-9 4-14-5-9-3-14 8-5 11-9 1-10 6-12 9 3 14 1 8-8 14-8z"
        />
        <circle cx="50" cy="50" r="31" className="selo__anel" />
      </svg>
      <span className="selo__texto">{texto}</span>
    </motion.div>
  );
}

export function Destacar({ texto }: { texto: string }) {
  const partes = texto.split(/(\[[^\]]+\])/g);
  return (
    <>
      {partes.map((p, i) =>
        /^\[[^\]]+\]$/.test(p) ? (
          <mark key={i} className="campo">
            {p}
          </mark>
        ) : (
          <span key={i}>{p}</span>
        )
      )}
    </>
  );
}
