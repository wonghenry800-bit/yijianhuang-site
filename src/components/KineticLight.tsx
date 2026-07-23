'use client';

import { useEffect, useRef } from 'react';

type KineticLightProps = {
  fixed?: boolean;
  intensity?: 'quiet' | 'hero';
};

export default function KineticLight({
  fixed = false,
  intensity = 'quiet',
}: KineticLightProps) {
  const lightRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const light = lightRef.current;
    if (!light) return;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let targetX = window.innerWidth * 0.68;
    let targetY = window.innerHeight * 0.28;
    let currentX = targetX;
    let currentY = targetY;
    let lastPointerMove = 0;
    let activeCard: HTMLElement | null = null;
    let frame = 0;

    const clearActiveCard = () => {
      if (!activeCard) return;
      activeCard.removeAttribute('data-spotlight-active');
      activeCard = null;
    };

    const updateCardLight = (event: PointerEvent) => {
      const target = event.target instanceof Element
        ? event.target.closest<HTMLElement>('.vision-interactive-card')
        : null;

      if (target !== activeCard) {
        clearActiveCard();
        activeCard = target;
      }

      if (!activeCard) return;

      const rect = activeCard.getBoundingClientRect();
      activeCard.style.setProperty('--spot-x', `${event.clientX - rect.left}px`);
      activeCard.style.setProperty('--spot-y', `${event.clientY - rect.top}px`);
      activeCard.setAttribute('data-spotlight-active', 'true');
    };

    const onPointerMove = (event: PointerEvent) => {
      targetX = event.clientX;
      targetY = event.clientY;
      lastPointerMove = performance.now();
      light.setAttribute('data-engaged', 'true');
      updateCardLight(event);
    };

    const onPointerOut = (event: PointerEvent) => {
      if (event.relatedTarget === null) clearActiveCard();
    };

    const onPointerUp = () => {
      window.setTimeout(clearActiveCard, 420);
    };

    const draw = (time: number) => {
      if (!reduceMotion && time - lastPointerMove > 2400) {
        targetX = window.innerWidth * (0.56 + Math.sin(time * 0.00018) * 0.2);
        targetY = window.innerHeight * (0.34 + Math.cos(time * 0.00014) * 0.16);
      }

      const ease = reduceMotion ? 1 : 0.085;
      currentX += (targetX - currentX) * ease;
      currentY += (targetY - currentY) * ease;
      light.style.setProperty('--light-x', `${currentX}px`);
      light.style.setProperty('--light-y', `${currentY}px`);
      frame = requestAnimationFrame(draw);
    };

    window.addEventListener('pointermove', onPointerMove, { passive: true });
    window.addEventListener('pointerdown', onPointerMove, { passive: true });
    window.addEventListener('pointerup', onPointerUp, { passive: true });
    window.addEventListener('pointerout', onPointerOut, { passive: true });
    frame = requestAnimationFrame(draw);

    return () => {
      clearActiveCard();
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('pointerdown', onPointerMove);
      window.removeEventListener('pointerup', onPointerUp);
      window.removeEventListener('pointerout', onPointerOut);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div
      ref={lightRef}
      className={`kinetic-light kinetic-light--${intensity} ${fixed ? 'kinetic-light--fixed' : ''}`}
      aria-hidden="true"
    >
      <div className="kinetic-light__beam" />
      <div className="kinetic-light__refraction" />
    </div>
  );
}
