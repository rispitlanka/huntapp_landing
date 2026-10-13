import { site } from '@/lib/site';
import { PhoneIcon } from './Icon';

export default function StoreButtons({ light = false }: { light?: boolean }) {
  const cls = light ? 'store store--light' : 'store';
  return (
    <>
      <a className={cls} href={site.appStoreUrl}>
        <PhoneIcon />
        <span>
          <small>DOWNLOAD FOR</small>
          <b>iPhone</b>
        </span>
      </a>
      <a className={cls} href={site.playStoreUrl}>
        <PhoneIcon />
        <span>
          <small>GET IT FOR</small>
          <b>Android</b>
        </span>
      </a>
    </>
  );
}
