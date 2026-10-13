import Doodle from '../Doodle';
import Reveal from '../Reveal';
import StoreButtons from '../StoreButtons';

export default function FinalCta() {
  return (
    <section className="section section--orange">
      <Doodle shape="sun" size={76} tone="ink" at={{ top: 60, left: '8%' }} delay={-1} />
      <Doodle shape="spark" size={32} tone="light" at={{ top: 70, right: '12%' }} delay={-3} />
      <Doodle shape="trail" size={210} tone="ink" at={{ bottom: 40, right: '4%' }} delay={-2} />
      <Doodle shape="star" size={28} tone="light" at={{ bottom: 60, left: '14%' }} rotate={-10} delay={-4} />

      <Reveal className="wrap cta" variant="zoom">
        <h2 className="display" style={{ maxWidth: 900 }}>
          Your next favourite place is close by.
        </h2>
        <p className="lead">Get Hunt, go out, and let Colombo, Galle and Jaffna pay you back a little.</p>
        <div className="stores" style={{ justifyContent: 'center' }}>
          <StoreButtons light />
        </div>
        <span className="cta__note">see you out there</span>
      </Reveal>
    </section>
  );
}
