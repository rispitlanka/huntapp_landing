import { businessPoints } from '@/lib/content';
import { listPlaceHref } from '@/lib/site';
import Doodle from '../Doodle';
import Photo from '../Photo';
import Reveal from '../Reveal';

export default function Business() {
  return (
    <section className="section section--dark" id="business">
      <div className="wrap split">
        <Reveal className="split__copy">
          <span className="label">For places</span>
          <h2 className="title">Own a bar, café or restaurant?</h2>
          <p className="lead" style={{ fontSize: 18 }}>
            Put your place on Hunt and let your guests do the talking. Real people, real photos from inside your place, and
            a good reason for them to come back.
          </p>
          <ol className="numbered">
            {businessPoints.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ol>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16, alignItems: 'center' }}>
            <a className="btn btn--flat" href={listPlaceHref}>
              List your place
            </a>
            <a className="link-light" href="#faq">
              Questions first?
            </a>
          </div>
        </Reveal>

        <Reveal className="split__art" variant="zoom" delay={150}>
          <Doodle shape="trail" size={190} tone="dark" at={{ left: -40, top: -60 }} delay={-2} />
          <span className="tape" style={{ top: -8, left: 'calc(50% - 30px)', transform: 'rotate(6deg)' }} />
          <div className="review-card">
            <div className="review-card__head">
              <b>Review</b>
              <span className="label" style={{ color: 'var(--muted)' }}>
                1 waiting
              </span>
            </div>
            <Photo className="review-card__photo" src="/images/venue-front.jpg" alt="A guest's photo waiting for review" sizes="340px" />
            <div className="review-card__who">
              <span className="avatar" aria-hidden="true">
                K
              </span>
              <span className="who">
                <b style={{ fontSize: 14 }}>kavi</b>
                <span className="mono" style={{ fontSize: 11, color: 'var(--muted)' }}>
                  Harbor Bar · 12 min ago
                </span>
              </span>
              <span className="pts">+10</span>
            </div>
            <div className="review-card__actions">
              <span>Reject</span>
              <span>Approve</span>
            </div>
          </div>
          <span className="hand dark-note">you&apos;re always in control</span>
        </Reveal>
      </div>
    </section>
  );
}
