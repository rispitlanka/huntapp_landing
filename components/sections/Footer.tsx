import { site } from '@/lib/site';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer__inner">
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          <a href="#top" className="wordmark">
            hunt<i />
          </a>
          <span className="mono" style={{ fontSize: 12, color: 'var(--muted)', letterSpacing: '.1em' }}>
            EXPLORE · CAPTURE · EARN
          </span>
        </div>
        <nav aria-label="Footer">
          <a href="#how">How it works</a>
          <a href="#business">For places</a>
          <a href="#faq">Questions</a>
          <a href={site.privacyUrl}>Privacy</a>
          <a href={site.termsUrl}>Terms</a>
        </nav>
        <span className="mono" style={{ fontSize: 12, color: 'var(--muted)' }}>
          © {new Date().getFullYear()} Hunt
        </span>
      </div>
    </footer>
  );
}
