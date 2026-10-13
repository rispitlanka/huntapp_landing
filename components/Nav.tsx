'use client';

import { useEffect, useState } from 'react';

const links = [
  { href: '#how', label: 'How it works' },
  { href: '#features', label: "What's inside" },
  { href: '#business', label: 'For places' },
  { href: '#faq', label: 'Questions' },
];

/** `onHome` is false on other pages, so links jump back to the landing page sections. */
export default function Nav({ onHome = true }: { onHome?: boolean }) {
  const base = onHome ? '' : '/';
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`nav${scrolled ? ' is-scrolled' : ''}`} id="top">
      <div className="wrap nav__inner">
        <a href={onHome ? '#top' : '/'} className="wordmark" aria-label={onHome ? 'Hunt, back to top' : 'Hunt home'}>
          hunt<i />
        </a>
        <nav className="nav__links" aria-label="Page">
          {links.map((l) => (
            <a key={l.href} href={base + l.href}>
              {l.label}
            </a>
          ))}
        </nav>
        <a className="btn btn--sm" href={base + '#download'}>
          Get the app
        </a>
      </div>
    </header>
  );
}
