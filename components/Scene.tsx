'use client';
import { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import * as THREE from 'three';
import { Sky } from './scene/Sky';
import { Gorge } from './scene/Gorge';
import { Falls } from './scene/Falls';
import { Mist } from './scene/Mist';
import { Lake } from './scene/Lake';
import { City } from './scene/City';
import { CameraRig } from './scene/CameraRig';
import { ErrorBoundary } from './ErrorBoundary';
import { useScrollProgress } from '@/lib/scroll';
import { PALETTE, QUALITY_SETTINGS, detectQuality, type Quality } from '@/lib/palette';

const Fallback = () => <div className="stage stage--fallback" aria-hidden />;

export function Scene() {
  const progress = useScrollProgress();
  const [quality, setQuality] = useState<Quality | null>(null);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => {
      setReduced(mq.matches);
      setQuality(detectQuality());
    };
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);

  if (!quality) return <Fallback />;
  const settings = QUALITY_SETTINGS[quality];

  return (
    // Corporate laptops block WebGL more often than you would expect.
    // A gradient is a fine outcome; a blank rectangle is not.
    <ErrorBoundary fallback={<Fallback />}>
      <div className="stage">
        <Canvas
          dpr={settings.dpr}
          gl={{
            antialias: quality !== 'low',
            powerPreference: 'default',
            failIfMajorPerformanceCaveat: false,
            alpha: false,
          }}
          camera={{ fov: 52, near: 0.5, far: 2600, position: [0, -6, -18] }}
          onCreated={({ scene, gl }) => {
            scene.fog = new THREE.FogExp2(new THREE.Color('#183443').getHex(), 0.0026);
            gl.setClearColor('#08131B', 1);
          }}
        >
          <Suspense fallback={null}>
            <Sky />
            <Gorge quality={quality} />
            <Falls reduced={reduced} />
            <Mist quality={quality} reduced={reduced} />
            <Lake quality={quality} reduced={reduced} />
            <City />
            <CameraRig progress={progress} reduced={reduced} />
            <hemisphereLight args={['#9FC9CC', '#08131B', 0.78]} />
            <directionalLight color="#C5DDDC" intensity={0.72} position={[-90, 120, 260]} />
            <directionalLight color="#58D1BE" intensity={0.34} position={[70, 40, -180]} />
            <directionalLight color="#EFA75C" intensity={0.14} position={[-140, 80, 180]} />
          </Suspense>
        </Canvas>
      </div>
    </ErrorBoundary>
  );
}
