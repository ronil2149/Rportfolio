'use client';
import { useEffect, useRef } from 'react';

/** Scroll progress in a ref, never in state.
 *  Putting it in state would re-render the whole tree on every scroll tick,
 *  which is the usual reason R3F sites stutter. */
export function useScrollProgress() {
  const progress = useRef(0);

  useEffect(() => {
    const read = () => {
      const max = document.body.scrollHeight - window.innerHeight;
      progress.current = max > 0 ? window.scrollY / max : 0;
    };
    read();
    window.addEventListener('scroll', read, { passive: true });
    window.addEventListener('resize', read, { passive: true });
    return () => {
      window.removeEventListener('scroll', read);
      window.removeEventListener('resize', read);
    };
  }, []);

  return progress;
}

/** Deterministic PRNG so the skyline never reshuffles between renders. */
export function makeRng(seed: number) {
  let s = seed;
  return () => {
    s = (s * 1664525 + 1013904223) % 4294967296;
    return s / 4294967296;
  };
}
