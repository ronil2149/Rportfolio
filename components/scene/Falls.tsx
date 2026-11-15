'use client';
import { useMemo, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { FALLS_VERT, FALLS_FRAG } from '@/lib/shaders';
import { PALETTE } from '@/lib/palette';

export const ARC = Math.PI * 0.92;
export const RADIUS = 62;
const PANELS = 17;

export function Falls({ reduced = false }: { reduced?: boolean }) {
  const mat = useRef<THREE.ShaderMaterial>(null);

  const uniforms = useMemo(() => ({
    uTime:  { value: 0 },
    uWater: { value: new THREE.Color(PALETTE.horseshoe) },
    uFoam:  { value: new THREE.Color(PALETTE.mist) },
    uDeep:  { value: new THREE.Color(PALETTE.deep) },
  }), []);

  /** Panels swept along the horseshoe arc. The alpha thins at each panel's
   *  edges so the seams disappear and the sheet reads as one curved face. */
  const panels = useMemo(() =>
    Array.from({ length: PANELS }, (_, i) => {
      const a = -ARC / 2 + ARC * (i / (PANELS - 1));
      return {
        key: i,
        position: [Math.sin(a) * RADIUS, 2, -104 + Math.cos(a) * RADIUS * 0.42] as [number, number, number],
        rotation: [0, -a, 0] as [number, number, number],
      };
    }), []);

  useFrame((_, dt) => {
    if (!reduced && mat.current) mat.current.uniforms.uTime.value += dt;
  });

  return (
    <group>
      {panels.map(p => (
        <mesh key={p.key} position={p.position} rotation={p.rotation}>
          <planeGeometry args={[13, 58]} />
          <shaderMaterial
            ref={p.key === 0 ? mat : undefined}
            vertexShader={FALLS_VERT}
            fragmentShader={FALLS_FRAG}
            uniforms={uniforms}
            transparent
            side={THREE.DoubleSide}
            depthWrite={false}
          />
        </mesh>
      ))}
    </group>
  );
}
