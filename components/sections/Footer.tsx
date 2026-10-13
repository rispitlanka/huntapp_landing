import Link from 'next/link';
import { site } from '@/lib/site';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer__inner">
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          <Link href="/" className="wordmark" aria-label="Hunt home">
            hunt<i />
          </Link>
          <span className="mono" style={{ fontSize: 12, color: 'var(--muted)', letterSpacing: '.1em' }}>
            EXPLORE · CAPTURE · EARN
          </span>
        </div>
        <nav aria-label="Footer">
          <a href="/#how">How it works</a>
          <a href="/#business">For places</a>
          <a href="/#faq">Questions</a>
          <Link href={site.privacyUrl}>Privacy</Link>
          <a href={site.termsUrl}>Terms</a>
        </nav>
        <span className="mono" style={{ fontSize: 12, color: 'var(--muted)' }}>
          © {new Date().getFullYear()} Hunt
        </span>
      </div>
    </footer>
  );
}
