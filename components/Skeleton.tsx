import type { CSSProperties } from 'react';

const bar = (style: CSSProperties) => <span className="sk" style={style} />;

/** The page-shaped placeholder shown while fonts and images load. */
export default function Skeleton({ hidden = false }: { hidden?: boolean }) {
  return (
    <div className={`skeleton${hidden ? ' is-hidden' : ''}`} aria-hidden="true">
      <div className="wrap">
        <div className="sk-nav">
          <span className="sk-logo">
            hunt<i />
          </span>
          {bar({ width: 120, height: 42 })}
        </div>
        <div className="sk-hero">
          <div className="sk-col">
            {bar({ width: 180, height: 14 })}
            {bar({ width: '70%', height: 72 })}
            {bar({ width: '58%', height: 72 })}
            {bar({ width: '82%', height: 72 })}
            {bar({ width: '90%', height: 16, marginTop: 10 })}
            {bar({ width: '76%', height: 16 })}
            <div style={{ display: 'flex', gap: 12, marginTop: 14 }}>
              {bar({ width: 170, height: 58, borderRadius: 12 })}
              {bar({ width: 170, height: 58, borderRadius: 12 })}
            </div>
          </div>
          <span className="sk sk-phone" />
        </div>
      </div>
    </div>
  );
}
