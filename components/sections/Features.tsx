import { features } from '@/lib/content';
import Doodle from '../Doodle';
import Icon from '../Icon';
import Reveal from '../Reveal';

export default function Features() {
  return (
    <section className="section" id="features">
      <Doodle shape="pin" size={42} at={{ top: 64, left: '3%' }} rotate={-8} delay={-1} />
      <Doodle shape="compass" size={58} at={{ top: 52, right: '4%' }} delay={-3} parallax={0.05} />
      <Doodle shape="star" size={22} tone="orange" at={{ bottom: 66, right: '7%' }} rotate={12} delay={-2} />

      <div className="wrap stack-56">
        <Reveal className="head head--row">
          <div>
            <span className="label">What&apos;s inside</span>
            <h2 className="title">Everything you need for a good night out.</h2>
            <p className="lead" style={{ fontSize: 18 }}>
              Small tools that make going out a bit more fun.
            </p>
          </div>
          <span className="hand" style={{ fontSize: 26, transform: 'rotate(-2deg)' }}>
            and nothing you don&apos;t
          </span>
        </Reveal>

        <div className="grid-3">
          {features.map((f, i) => (
            <Reveal as="article" key={f.title} className="card tile" delay={(i % 3) * 100}>
              <div className="tile__top">
                <span className="ico">
                  <Icon name={f.icon} />
                </span>
                <span className="hand tile__tag">{f.tag}</span>
              </div>
              <h3 className="h3" style={{ fontSize: 24 }}>
                {f.title}
              </h3>
              <p className="body">{f.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
