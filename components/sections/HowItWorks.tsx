import { steps } from '@/lib/content';
import Doodle from '../Doodle';
import Photo from '../Photo';
import Reveal from '../Reveal';

function StepArt({ index }: { index: number }) {
  if (index === 0) {
    return (
      <div className="tile__media">
        <svg viewBox="0 0 300 150" preserveAspectRatio="xMidYMid slice" role="img" aria-label="A small sketched map with a pin">
          <path d="M0 30c60 10 90-10 150 0s100 30 150 10" fill="none" stroke="#BDB09D" strokeWidth={6} strokeLinecap="round" />
          <path d="M80 0c10 60 0 100 20 150" fill="none" stroke="#D9CFBF" strokeWidth={4} />
          <path d="M0 110c80-10 200 10 300-10" fill="none" stroke="#D9CFBF" strokeWidth={4} />
          <path d="M60 120c40-20 70-40 120-50" fill="none" stroke="#1D1915" strokeWidth={1.4} strokeDasharray="3 4" />
          <circle cx="60" cy="120" r="6" fill="#FBF9F4" stroke="#1D1915" strokeWidth={1.5} />
          <g transform="translate(190 76)">
            <path d="M0 0c-9-11-13-17-13-23a13 13 0 0 1 26 0c0 6-4 12-13 23z" fill="#FC6401" stroke="#1D1915" strokeWidth={1.6} />
            <circle cy="-23" r="4" fill="#1D1915" />
          </g>
        </svg>
      </div>
    );
  }
  if (index === 1) {
    return (
      <Photo className="tile__media" src="/images/bar-counter.jpg" alt="A pint on a bar counter" sizes="(max-width: 960px) 90vw, 340px">
        <span className="corner corner--tl" />
        <span className="corner corner--tr" />
        <span className="corner corner--bl" />
        <span className="corner corner--br" />
      </Photo>
    );
  }
  return (
    <div className="tile__media center">
      <div className="mini-ticket">
        <div>
          <b style={{ fontSize: 15 }}>Free spritz</b>
          <span className="mono" style={{ fontSize: 11, color: 'var(--muted)' }}>
            RWD-7D12ECBA
          </span>
        </div>
        <div>
          <b style={{ fontSize: 22 }}>40</b>
        </div>
      </div>
    </div>
  );
}

export default function HowItWorks() {
  return (
    <section className="section" id="how" style={{ borderTop: 0 }}>
      <Doodle shape="arrow" size={104} at={{ top: 150, left: '52%' }} delay={-1} parallax={-0.04} />
      <Doodle shape="camera" size={50} at={{ top: 170, right: '4%' }} rotate={8} delay={-3} />
      <Doodle shape="spark" size={16} tone="orange" at={{ top: 140, right: '11%' }} delay={-2} />

      <div className="wrap stack-56">
        <Reveal className="head">
          <span className="label">How it works</span>
          <h2 className="title">
            Three steps.{' '}
            <span className="underline">
              No catch.
              <svg viewBox="0 0 200 16" preserveAspectRatio="none" aria-hidden="true">
                <path pathLength={1} d="M3 10C40 4 90 3 120 6s60 4 77-1" />
              </svg>
            </span>
          </h2>
          <p className="lead" style={{ fontSize: 18 }}>
            You already go out and take photos. Hunt just makes it count.
          </p>
        </Reveal>

        <div className="grid-3">
          {steps.map((s, i) => (
            <Reveal as="article" key={s.num} className="card tile" delay={i * 120}>
              <div className="tile__top">
                <span className="tile__num">{s.num}</span>
                <span className="hand tile__tag">{s.tag}</span>
              </div>
              <StepArt index={i} />
              <h3 className="h3" style={{ fontSize: 24 }}>
                {s.title}
              </h3>
              <p className="body">{s.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
