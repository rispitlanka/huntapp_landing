'use client';

import { useEffect, useRef, type CSSProperties, type ReactElement } from 'react';

const SHAPES: Record<string, { viewBox: string; paths: ReactElement }> = {
  spark: { viewBox: '0 0 24 24', paths: <path d="M12 3c.6 4.6 2.4 6.4 7 7-4.6.6-6.4 2.4-7 7-.6-4.6-2.4-6.4-7-7 4.6-.6 6.4-2.4 7-7z" /> },
  star: { viewBox: '0 0 24 24', paths: <path d="M12 2.5l2.4 6.2 6.6.4-5.1 4.2 1.7 6.5L12 16.2l-5.6 3.6 1.7-6.5L3 9.1l6.6-.4z" /> },
  squiggle: { viewBox: '0 0 120 20', paths: <path d="M2 12c8-12 14 10 22 0s14-12 22 0 14 10 22 0 14-12 22 0 14 10 22 0" /> },
  arrow: { viewBox: '0 0 90 60', paths: <><path d="M4 50c14-2 26-12 22-26-3-9-15-4-10 5 7 12 30 12 52-14" /><path d="M60 8l9 6-9 6" /></> },
  arrowBack: { viewBox: '0 0 90 60', paths: <><path d="M86 8C70 6 58 14 60 26c2 9 13 6 9-2-6-10-30-4-50 26" /><path d="M14 42l3 11 10-5" /></> },
  glass: { viewBox: '0 0 32 32', paths: <><path d="M6 6h20L16 17z" /><path d="M16 17v9M10 26h12M23 2l-5 8" /><circle cx="13" cy="9" r="1.6" /></> },
  cup: { viewBox: '0 0 32 32', paths: <><path d="M6 13h16v5a6 6 0 0 1-6 6h-4a6 6 0 0 1-6-6z" /><path d="M22 15h2a3 3 0 0 1 0 6h-2M4 28h20M11 4c-1.5 2.5 1.5 3.5 0 6M16 4c-1.5 2.5 1.5 3.5 0 6" /></> },
  pin: { viewBox: '0 0 32 32', paths: <><path d="M16 30s9-8 9-15a9 9 0 0 0-18 0c0 7 9 15 9 15z" /><circle cx="16" cy="15" r="3.2" /></> },
  camera: { viewBox: '0 0 32 32', paths: <><path d="M4 10h5l2.5-3.5h9L23 10h5v15H4z" /><circle cx="16" cy="17.5" r="5" /></> },
  trail: { viewBox: '0 0 220 120', paths: <><path d="M6 110c30-10 30-50 70-48s40 40 80 20 30-60 50-70" strokeDasharray="4 7" /><path d="M198 6l14 14M212 6l-14 14" strokeWidth={2.4} /></> },
  compass: { viewBox: '0 0 40 40', paths: <><circle cx="20" cy="20" r="16" /><path d="M26 14l-3.5 8.5L14 26l3.5-8.5z" /><path d="M20 2v3M20 35v3M2 20h3M35 20h3" /></> },
  ticket: { viewBox: '0 0 60 36', paths: <><path d="M3 4h54v9a5 5 0 0 0 0 10v9H3v-9a5 5 0 0 0 0-10z" /><path d="M40 5v26" strokeDasharray="3 3" /></> },
  heart: { viewBox: '0 0 32 32', paths: <path d="M16 27S4 19 4 11.5A6 6 0 0 1 16 9a6 6 0 0 1 12 2.5C28 19 16 27 16 27z" /> },
  question: { viewBox: '0 0 32 40', paths: <><path d="M8 12c0-6 5-9 9-9s8 3 8 8c0 7-9 7-9 14" /><path d="M16 33v.5" strokeWidth={3} /></> },
  pencil: { viewBox: '0 0 48 48', paths: <><path d="M8 40l4-12L34 6l8 8-22 22z" /><path d="M12 28l8 8M30 10l8 8" /></> },
  sun: { viewBox: '0 0 48 48', paths: <><circle cx="24" cy="24" r="8" /><path d="M24 4v6M24 38v6M4 24h6M38 24h6M10 10l4 4M34 34l4 4M38 10l-4 4M14 34l-4 4" /></> },
};

export type DoodleShape = keyof typeof SHAPES;

type Props = {
  shape: DoodleShape;
  size: number;
  /** Position inside the nearest positioned parent, e.g. { top: 40, left: '2%' } */
  at: CSSProperties;
  tone?: 'pencil' | 'orange' | 'dark' | 'light' | 'ink';
  rotate?: number;
  /** Offsets the floating loop so doodles don't move in sync */
  delay?: number;
  /** Scroll speed relative to the page (small values like ±0.05) */
  parallax?: number;
  /** Hide on phones and tablets */
  hideOnSmall?: boolean;
  color?: string;
};

/** A small hand-drawn sketch that floats gently in the background. */
export default function Doodle({ shape, size, at, tone = 'pencil', rotate = 0, delay = 0, parallax, hideOnSmall = true, color }: Props) {
  const ref = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!parallax) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const el = ref.current;
    if (!el?.parentElement) return;
    let frame = 0;
    const update = () => {
      const top = el.parentElement!.getBoundingClientRect().top;
      el.style.translate = `0 ${(top * parallax).toFixed(1)}px`;
      frame = 0;
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(frame);
    };
  }, [parallax]);

  const { viewBox, paths } = SHAPES[shape];
  const classes = ['doodle', tone !== 'pencil' && `doodle--${tone}`, hideOnSmall && 'hide-sm'].filter(Boolean).join(' ');

  return (
    <svg
      ref={ref}
      className={classes}
      width={size}
      viewBox={viewBox}
      aria-hidden="true"
      style={{ ...at, ...(color ? { stroke: color } : {}), '--r': `${rotate}deg`, '--d': `${delay}s` } as CSSProperties}
    >
      {paths}
    </svg>
  );
}
