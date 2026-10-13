'use client';

import Image from 'next/image';
import { useEffect, useState, type ReactNode } from 'react';

type Props = {
  src: string;
  alt: string;
  /** Tells the browser how wide the image shows, so it downloads the right size */
  sizes: string;
  className?: string;
  priority?: boolean;
  children?: ReactNode;
};

/** An image that shimmers until it has loaded, then fades in. */
export default function Photo({ src, alt, sizes, className = '', priority, children }: Props) {
  const [loaded, setLoaded] = useState(false);

  // Safety net: never leave a photo hidden if the load event is missed
  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 4000);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className={`media ${className}${loaded ? ' is-loaded' : ''}`}>
      <Image src={src} alt={alt} fill sizes={sizes} priority={priority} unoptimized={src.endsWith(".svg")} onLoad={() => setLoaded(true)} />
      {children}
    </div>
  );
}
