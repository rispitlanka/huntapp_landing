'use client';

import { useEffect, useRef, useState, type CSSProperties, type ElementType, type ReactNode } from 'react';
import { useReady } from './ReadyProvider';

type Props = {
  as?: ElementType;
  /** How the element enters: rise up (default), slide from a side, or zoom in */
  variant?: 'up' | 'left' | 'right' | 'zoom';
  /** Delay in ms, handy for staggering cards */
  delay?: number;
  className?: string;
  style?: CSSProperties;
  id?: string;
  children?: ReactNode;
};

/** Fades its content in when it scrolls into view (after the loading screen). */
export default function Reveal({ as: Tag = 'div', variant = 'up', delay = 0, className = '', style, id, children }: Props) {
  const ref = useRef<HTMLElement>(null);
  const ready = useReady();
  const [shown, setShown] = useState(false);

  useEffect(() => {
    if (!ready || shown) return;
    const el = ref.current;
    if (!el) return;

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce || !('IntersectionObserver' in window)) {
      setShown(true);
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [ready, shown]);

  return (
    <Tag
      ref={ref}
      id={id}
      data-reveal={variant === 'up' ? '' : variant}
      className={`${className}${shown ? ' is-in' : ''}`.trim() || undefined}
      style={delay ? ({ ...style, '--delay': `${delay}ms` } as CSSProperties) : style}
    >
      {children}
    </Tag>
  );
}
