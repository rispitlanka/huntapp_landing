'use client';

import { useId, useState } from 'react';
import { faqs } from '@/lib/content';

/** Accordion: one answer open at a time, with a smooth height animation. */
export default function Faq() {
  const [open, setOpen] = useState<number | null>(null);
  const id = useId();

  return (
    <div className="faq">
      {faqs.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.q} className={`faq__item${isOpen ? ' is-open' : ''}`}>
            <h3>
              <button
                type="button"
                className="faq__q"
                aria-expanded={isOpen}
                aria-controls={`${id}-${i}`}
                onClick={() => setOpen(isOpen ? null : i)}
              >
                {item.q}
                <span className="plus" aria-hidden="true">+</span>
              </button>
            </h3>
            <div className="faq__panel" id={`${id}-${i}`} role="region" aria-hidden={!isOpen}>
              <div>
                <p>{item.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
