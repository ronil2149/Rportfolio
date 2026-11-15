'use client';
import { useMemo } from 'react';
import * as THREE from 'three';
import { SKY_VERT, SKY_FRAG } from '@/lib/shaders';
import { PALETTE } from '@/lib/palette';

export function Sky() {
  const uniforms = useMemo(() => ({
    uSun:  { value: new THREE.Color(PALETTE.sun) },
    uMid:  { value: new THREE.Color('#465B6D') },
    uDeep: { value: new THREE.Color(PALETTE.deep) },
  }), []);

  return (
    <mesh>
      <sphereGeometry args={[1500, 48, 32]} />
      <shaderMaterial
        vertexShader={SKY_VERT}
        fragmentShader={SKY_FRAG}
        uniforms={uniforms}
        side={THREE.BackSide}
        depthWrite={false}
        fog={false}
      />
    </mesh>
  );
}
