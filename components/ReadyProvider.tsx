'use client';

import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import Skeleton from './Skeleton';

const ReadyContext = createContext(false);

/** True once the loading screen has gone and animations may start. */
export const useReady = () => useContext(ReadyContext);

const wait = (ms: number) => new Promise<void>((r) => setTimeout(r, ms));

export default function ReadyProvider({ children }: { children: ReactNode }) {
  const [ready, setReady] = useState(false);
  const [removed, setRemoved] = useState(false);

  useEffect(() => {
    let cancelled = false;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const html = document.documentElement;
    html.classList.add('is-loading');

    const pageLoaded = new Promise<void>((resolve) => {
      if (document.readyState === 'complete') resolve();
      else window.addEventListener('load', () => resolve(), { once: true });
    });
    const fontsReady = document.fonts?.ready ?? Promise.resolve();

    Promise.race([
      Promise.all([pageLoaded, fontsReady, wait(reduce ? 0 : 550)]),
      wait(3000), // never keep people waiting longer than this
    ]).then(() => {
      if (cancelled) return;
      html.classList.remove('is-loading');
      setReady(true);
      setTimeout(() => !cancelled && setRemoved(true), 600);
    });

    return () => {
      cancelled = true;
      html.classList.remove('is-loading');
    };
  }, []);

  return (
    <ReadyContext.Provider value={ready}>
      {!removed && <Skeleton hidden={ready} />}
      {children}
    </ReadyContext.Provider>
  );
}
