/** Colours sampled from the subject, not from a default palette.
 *  Horseshoe water reads mineral green because the Niagara runs over
 *  dissolved limestone; the gorge is warm dolostone, not grey slate. */
export const PALETTE = {
  gorge: '#08131B',
  gorgeDeep: '#08131B',
  limestone: '#71868A',
  horseshoe: '#58D1BE',
  mist: '#F0F7F6',
  sun: '#EFA75C',
  deep: '#0E2736',
  haze: '#183443',
} as const;

export type Quality = 'low' | 'medium' | 'high';

/** Cheap, honest capability probe. No benchmark loop — just the signals
 *  that actually correlate with a bad time: small viewport, few cores. */
export function detectQuality(): Quality {
  if (typeof window === 'undefined') return 'medium';
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduced) return 'low';
  const cores = navigator.hardwareConcurrency ?? 4;
  const narrow = window.innerWidth < 820;
  if (narrow || cores <= 4) return 'low';
  if (cores <= 8) return 'medium';
  return 'high';
}

export const QUALITY_SETTINGS: Record<Quality, {
  mist: number; lakeSegments: number; cliffSegments: [number, number]; dpr: [number, number];
}> = {
  low:    { mist: 260,  lakeSegments: 40, cliffSegments: [16, 20], dpr: [1, 1.25] },
  medium: { mist: 700,  lakeSegments: 64, cliffSegments: [28, 34], dpr: [1, 1.75] },
  high:   { mist: 1200, lakeSegments: 90, cliffSegments: [40, 48], dpr: [1, 2] },
};
