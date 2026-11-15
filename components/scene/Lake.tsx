'use client';
import { useMemo, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { LAKE_VERT, LAKE_FRAG } from '@/lib/shaders';
import { PALETTE, QUALITY_SETTINGS, type Quality } from '@/lib/palette';

export function Lake({ quality, reduced = false }: { quality: Quality; reduced?: boolean }) {
  const seg = QUALITY_SETTINGS[quality].lakeSegments;
  const mat = useRef<THREE.ShaderMaterial>(null);

  const geometry = useMemo(() => {
    const g = new THREE.PlaneGeometry(2000, 1800, seg, Math.round(seg * 0.9));
    g.rotateX(-Math.PI / 2);
    return g;
  }, [seg]);

  const uniforms = useMemo(() => ({
    uTime: { value: 0 },
    uDeep: { value: new THREE.Color(PALETTE.deep) },
    uTeal: { value: new THREE.Color('#145854') },
    uSun:  { value: new THREE.Color(PALETTE.sun) },
  }), []);

  useFrame((_, dt) => {
    if (!reduced && mat.current) mat.current.uniforms.uTime.value += dt;
  });

  return (
    <mesh geometry={geometry} position={[0, -28, 380]}>
      <shaderMaterial
        ref={mat}
        vertexShader={LAKE_VERT}
        fragmentShader={LAKE_FRAG}
        uniforms={uniforms}
      />
    </mesh>
  );
}
