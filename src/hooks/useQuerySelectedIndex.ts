'use client';

import { useEffect, useState } from 'react';

export function useQuerySelectedIndex(maxExclusive?: number, paramName = 'i') {
  const [selected, setSelected] = useState<number | null>(null);

  useEffect(() => {
    const raw = new URLSearchParams(window.location.search).get(paramName);
    if (raw === null) return;

    const index = Number.parseInt(raw, 10);
    if (Number.isNaN(index) || index < 0) return;
    if (maxExclusive !== undefined && index >= maxExclusive) return;

    const timer = window.setTimeout(() => setSelected(index), 0);
    return () => window.clearTimeout(timer);
  }, [maxExclusive, paramName]);

  return [selected, setSelected] as const;
}
