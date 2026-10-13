import type { CSSProperties } from 'react';
import { polaroids } from '@/lib/content';
import Doodle from '../Doodle';
import Photo from '../Photo';
import Reveal from '../Reveal';

export default function Creators() {
  return (
    <section className="section section--tint">
      <Doodle shape="heart" size={32} tone="orange" at={{ top: 46, right: '4%' }} rotate={10} delay={-1} />
      <Doodle shape="arrowBack" size={86} at={{ top: 60, left: '38%' }} delay={-3} color="#D9B79A" />

      <div className="wrap split">
        <Reveal className="split__copy">
          <span className="label" style={{ color: 'var(--orange-ink)' }}>
            For creators
          </span>
          <h2 className="title">Already posting your nights out?</h2>
          <p className="lead" style={{ fontSize: 18, color: 'var(--ink)' }}>
            Your photos help other people find good places. Hunt makes sure you get something back for them. The more you
            explore, the more you earn.
          </p>
          <a className="btn" href="#download" style={{ alignSelf: 'flex-start' }}>
            Start exploring
          </a>
        </Reveal>

        <div className="polaroids">
          {polaroids.map((p, i) => (
            <Reveal
              as="figure"
              key={p.src}
              className="polaroid"
              delay={i * 120}
              style={{ '--r': `${p.tilt}deg`, '--y': `${p.drop}px`, margin: 0 } as CSSProperties}
            >
              <span
                className={`tape${p.tape === 'ash' ? ' tape--ash' : ''}`}
                style={{ transform: `rotate(${p.tapeTilt}deg)` }}
              />
              <Photo src={p.src} alt={p.alt} sizes="(max-width: 960px) 30vw, 180px" />
              <figcaption className="hand">{p.caption}</figcaption>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
