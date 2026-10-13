import Doodle from '../Doodle';
import Photo from '../Photo';
import Reveal from '../Reveal';
import StoreButtons from '../StoreButtons';

export default function Hero() {
  return (
    <section className="hero">
      <Doodle shape="spark" size={24} tone="orange" at={{ top: 40, left: '2%' }} delay={-1} />
      <Doodle shape="spark" size={13} at={{ top: 76, left: '4%' }} delay={-3} />
      <Doodle shape="glass" size={42} at={{ top: 34, right: '42%' }} rotate={-10} delay={-2} parallax={-0.06} />
      <Doodle shape="trail" size={210} at={{ top: 16, right: '6%' }} delay={-4} parallax={0.05} />
      <Doodle shape="squiggle" size={110} at={{ bottom: 40, left: '3%' }} delay={-2.5} />

      <div className="wrap hero__grid">
        <div className="hero__copy">
          <Reveal as="span" className="label hero__eyebrow">
            Explore · Capture · Earn
          </Reveal>

          <Reveal as="h1" className="display" delay={100}>
            Go out.
            <br />
            <span className="pen">
              Snap it.
              <svg viewBox="0 0 300 110" preserveAspectRatio="none" aria-hidden="true">
                <path pathLength={1} d="M150 8C70 4 10 22 12 56c2 34 90 48 170 42s108-30 104-56C282 14 220 4 130 12" />
              </svg>
            </span>
            <br />
            <span className="highlight">Get rewarded.</span>
          </Reveal>

          <Reveal as="p" className="lead" delay={200}>
            Hunt shows you good cafés, food spots, shops and hidden places near you. Take a photo when you visit, and the place gives you
            points. Swap your points for free food, drinks and deals.
          </Reveal>

          <Reveal className="stores" id="download" delay={300}>
            <StoreButtons />
            <span className="hand free-note">it&apos;s free</span>
          </Reveal>
        </div>

        <Reveal className="hero__art" variant="zoom" delay={250}>
          <span className="tape" style={{ top: 10, left: 'calc(50% - 44px)', transform: 'rotate(-4deg)' }} />
          <div className="phone">
            <div className="phone__screen">
              <Photo
                className="phone__photo"
                src="/images/galleface-terrace.svg"
                alt="Harbor Bar's terrace at Galle Face Green, shown in the Hunt app"
                sizes="280px"
                priority
              />
              <div className="phone__body">
                <div>
                  <p className="phone__name">Harbor Bar</p>
                  <p className="phone__addr">Galle Face Green, Colombo 03</p>
                </div>
                <div className="card earn" style={{ boxShadow: 'none' }}>
                  <div>
                    <b>+10</b>
                    <span>per photo</span>
                  </div>
                  <div>
                    <b>+20</b>
                    <span>per video</span>
                  </div>
                </div>
                <div className="soft perk">
                  <div className="perk__row">
                    <b>Devilled prawns</b>
                    <span className="pts">40 pts</span>
                  </div>
                  <div className="ticks">
                    <span />
                  </div>
                  <span className="hand" style={{ fontSize: 16 }}>
                    3 photos to go
                  </span>
                </div>
                <span className="fake-btn">Capture a visit</span>
              </div>
            </div>
          </div>
          <div className="float-ticket">
            <span className="mono">RWD-7D12ECBA</span>
            <b>Free bite · Harbor Bar</b>
          </div>
          <span className="stamp stamp--ok float-stamp">+10 pts</span>
        </Reveal>
      </div>
    </section>
  );
}
