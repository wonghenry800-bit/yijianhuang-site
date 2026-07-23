'use client';

import type { CSSProperties, ReactNode } from 'react';
import KineticLight from './KineticLight';

type VisionPageShellProps = {
  children: ReactNode;
  dark?: boolean;
  accent?: string;
};

export default function VisionPageShell({
  children,
  dark = false,
  accent = '#2997ff',
}: VisionPageShellProps) {
  return (
    <div
      className={`vision-shell ${dark ? 'vision-shell--dark' : 'vision-shell--light'}`}
      style={{ '--vision-accent': accent } as CSSProperties}
    >
      <div className="vision-ambient" aria-hidden="true" />
      <div className="vision-ribbons" aria-hidden="true" />
      <div className="vision-mesh" aria-hidden="true" />
      <KineticLight fixed />
      <div className="vision-content">{children}</div>
    </div>
  );
}
