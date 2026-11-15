'use client';
import dynamic from 'next/dynamic';

const Scene = dynamic(() => import('./Scene').then(m => m.Scene), {
  ssr: false,
  loading: () => <div className="stage stage--fallback" aria-hidden />,
});

export function SceneLoader() {
  return <Scene />;
}
