'use client';

import { useEffect, useState } from 'react';

const links = [
  { href: '#how', label: 'How it works' },
  { href: '#features', label: "What's inside" },
  { href: '#business', label: 'For places' },
  { href: '#faq', label: 'Questions' },
];

export default function Nav() {
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
        <a href="#top" className="wordmark" aria-label="Hunt, back to top">
          hunt<i />
        </a>
        <nav className="nav__links" aria-label="Page">
          {links.map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
        </nav>
        <a className="btn btn--sm" href="#download">
          Get the app
        </a>
      </div>
    </header>
  );
}
