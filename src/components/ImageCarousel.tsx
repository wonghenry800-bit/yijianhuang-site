'use client';

import { useState } from 'react';
import Image from 'next/image';
import { publicImage } from '../utils/publicImage';

type ImageCarouselProps = {
  imgs: string[];
  alt?: string;
  background?: string;
  imageOpacity?: number;
  controlSize?: number;
};

export default function ImageCarousel({
  imgs,
  alt = '',
  background = '#f5f5f7',
  imageOpacity = 1,
  controlSize = 28,
}: ImageCarouselProps) {
  const [cur, setCur] = useState(0);

  if (!imgs || imgs.length === 0) {
    return <div style={{ aspectRatio: '16/9', background }} />;
  }

  return (
    <div style={{ aspectRatio: '16/9', overflow: 'hidden', background, position: 'relative' }}>
      <Image
        src={publicImage(imgs[cur])}
        alt={alt}
        fill
        sizes="(max-width: 768px) 100vw, 640px"
        style={{ objectFit: 'cover', opacity: imageOpacity }}
        onError={e => { (e.currentTarget as HTMLImageElement).style.display = 'none' }}
      />
      {imgs.length > 1 && (
        <>
          <div style={{ position: 'absolute', bottom: 10, left: 0, right: 0, display: 'flex', justifyContent: 'center', gap: 6 }}>
            {imgs.map((_, i) => (
              <button
                key={i}
                onClick={() => setCur(i)}
                aria-label={`Show image ${i + 1}`}
                style={{
                  width: i === cur ? 18 : 6,
                  height: 6,
                  borderRadius: 3,
                  background: i === cur ? '#fff' : 'rgba(255,255,255,0.5)',
                  border: 'none',
                  cursor: 'pointer',
                  padding: 0,
                  transition: 'all 0.2s',
                }}
              />
            ))}
          </div>
          <button
            onClick={() => setCur((cur - 1 + imgs.length) % imgs.length)}
            aria-label="Previous image"
            style={{
              position: 'absolute',
              left: 10,
              top: '50%',
              transform: 'translateY(-50%)',
              width: controlSize,
              height: controlSize,
              borderRadius: '50%',
              background: 'rgba(0,0,0,0.45)',
              border: 'none',
              color: '#fff',
              cursor: 'pointer',
              fontSize: 18,
              lineHeight: 1,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            ‹
          </button>
          <button
            onClick={() => setCur((cur + 1) % imgs.length)}
            aria-label="Next image"
            style={{
              position: 'absolute',
              right: 10,
              top: '50%',
              transform: 'translateY(-50%)',
              width: controlSize,
              height: controlSize,
              borderRadius: '50%',
              background: 'rgba(0,0,0,0.45)',
              border: 'none',
              color: '#fff',
              cursor: 'pointer',
              fontSize: 18,
              lineHeight: 1,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            ›
          </button>
        </>
      )}
    </div>
  );
}
