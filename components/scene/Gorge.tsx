'use client';
import { useMemo } from 'react';
import * as THREE from 'three';
import { PALETTE, QUALITY_SETTINGS, type Quality } from '@/lib/palette';
import { makeRng } from '@/lib/scroll';

/** Displaced plane with horizontal banding — dolostone strata, not random noise. */
function cliffGeometry(w: number, h: number, sw: number, sh: number, jitter: number, seed: number) {
  const g = new THREE.PlaneGeometry(w, h, sw, sh);
  const rng = makeRng(seed);
  const pos = g.attributes.position;
  for (let i = 0; i < pos.count; i++) {
    const x = pos.getX(i), y = pos.getY(i);
    const band = Math.sin(y * 0.9) * 0.5 + Math.sin(y * 3.1 + x * 0.2) * 0.22;
    pos.setZ(i, band * jitter + (rng() - 0.5) * jitter * 0.5);
  }
  g.computeVertexNormals();
  return g;
}

export function Gorge({ quality }: { quality: Quality }) {
  const [sw, sh] = QUALITY_SETTINGS[quality].cliffSegments;

  const geos = useMemo(() => ({
    left:  cliffGeometry(150, 120, sw, sh, 3.2, 20231104),
    right: cliffGeometry(150, 120, sw, sh, 3.2, 77712345),
    crest: cliffGeometry(190, 44, sw, Math.round(sh / 3), 2.4, 31415926),
  }), [sw, sh]);

  return (
    <group>
      <mesh geometry={geos.left} position={[-54, 8, -40]} rotation={[0, Math.PI * 0.30, 0]}>
        <meshStandardMaterial color={PALETTE.limestone} roughness={0.97} flatShading />
      </mesh>
      <mesh geometry={geos.right} position={[54, 8, -40]} rotation={[0, -Math.PI * 0.30, 0]}>
        <meshStandardMaterial color={PALETTE.limestone} roughness={0.97} flatShading />
      </mesh>
      <mesh geometry={geos.crest} position={[0, 30, -104]}>
        <meshStandardMaterial color={PALETTE.limestone} roughness={0.97} flatShading />
      </mesh>
    </group>
  );
}
