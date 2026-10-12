import { site } from '@/lib/site';
import Doodle from '../Doodle';
import Faq from '../Faq';
import Reveal from '../Reveal';

export default function Questions() {
  return (
    <section className="section" id="faq">
      <Doodle shape="question" size={38} at={{ bottom: 120, left: '3%' }} rotate={-10} delay={-1} />
      <Doodle shape="question" size={22} tone="orange" at={{ bottom: 82, left: '7%' }} rotate={12} delay={-3} />
      <Doodle shape="pencil" size={52} at={{ bottom: 150, left: '24%' }} rotate={-6} delay={-2} />

      <div className="wrap split" style={{ alignItems: 'start' }}>
        <Reveal className="head">
          <span className="label">Questions</span>
          <h2 className="title">Good to know.</h2>
          <span className="hand" style={{ fontSize: 24 }}>
            still stuck? write to us at <a href={`mailto:${site.email}`}>{site.email}</a>
          </span>
        </Reveal>

        <Reveal delay={120}>
          <Faq />
        </Reveal>
      </div>
    </section>
  );
}
