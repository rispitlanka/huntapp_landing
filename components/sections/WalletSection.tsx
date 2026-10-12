import { walletPoints } from '@/lib/content';
import Doodle from '../Doodle';
import Reveal from '../Reveal';

export default function WalletSection() {
  return (
    <section className="section">
      <Doodle shape="ticket" size={76} at={{ top: 70, right: '5%' }} rotate={-8} delay={-2} />
      <Doodle shape="cup" size={48} at={{ bottom: 70, left: '4%' }} rotate={6} delay={-4} />

      <div className="wrap split">
        <Reveal className="split__art" variant="left">
          <div className="phone phone--left">
            <div className="phone__screen wallet">
              <span className="wallet__title">Wallet</span>
              <div className="card wallet__total">
                <span className="label">Points to spend</span>
                <div className="wallet__num">10</div>
              </div>
              <div className="soft wallet__place">
                <div className="perk__row">
                  <b>Harbor Bar</b>
                  <span className="mono" style={{ fontSize: 13 }}>
                    10 pts
                  </span>
                </div>
                <div className="ticks">
                  <span />
                </div>
                <span style={{ fontSize: 12, color: 'var(--muted)' }}>
                  30 more for a <b style={{ color: 'var(--ink)' }}>Sunset spritz</b>
                </span>
              </div>
              <div className="soft used">
                <div>
                  <b style={{ fontSize: 14 }}>Sunset spritz</b>
                  <span style={{ fontSize: 11, color: 'var(--muted)' }}>Harbor Bar · Oct 7</span>
                </div>
                <div>
                  <span className="stamp stamp--used" style={{ transform: 'rotate(-5deg)' }}>
                    Used
                  </span>
                </div>
              </div>
            </div>
          </div>
          <span className="hand side-note">one free drink, coming up</span>
        </Reveal>

        <Reveal className="split__copy" variant="right" delay={120}>
          <span className="label">Your wallet</span>
          <h2 className="title">Points you can actually use.</h2>
          <p className="lead" style={{ fontSize: 18 }}>
            No confusing tiers or points that expire in a month. You earn points at a place, and you spend them at that same
            place on things they chose for you.
          </p>
          <ul className="arrows">
            {walletPoints.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
