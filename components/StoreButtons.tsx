import { site } from '@/lib/site';
import { PhoneIcon } from './Icon';

export default function StoreButtons({ light = false }: { light?: boolean }) {
  const cls = light ? 'store store--light' : 'store';
  return (
    <>
      <span className={`${cls} store--soon`} aria-disabled="true">
        <PhoneIcon />
        <span>
          <small>COMING SOON</small>
          <b>iPhone</b>
        </span>
      </span>
      <a className={cls} href={site.playStoreUrl} target="_blank" rel="noreferrer">
        <PhoneIcon />
        <span>
          <small>GET IT FOR</small>
          <b>Android</b>
        </span>
      </a>
    </>
  );
}
