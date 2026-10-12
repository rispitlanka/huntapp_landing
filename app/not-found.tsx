import Link from 'next/link';

export default function NotFound() {
  return (
    <main style={{ minHeight: '100vh', display: 'grid', placeItems: 'center', padding: 24, textAlign: 'center' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 18, alignItems: 'center' }}>
        <span className="label">404</span>
        <h1 className="title">This spot isn&apos;t on the map.</h1>
        <p className="hand" style={{ fontSize: 26 }}>
          maybe it closed early?
        </p>
        <Link className="btn" href="/">
          Back to Hunt
        </Link>
      </div>
    </main>
  );
}
