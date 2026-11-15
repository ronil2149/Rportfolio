'use client';
import { useMemo, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { MIST_VERT, MIST_FRAG } from '@/lib/shaders';
import { PALETTE, QUALITY_SETTINGS, type Quality } from '@/lib/palette';
import { makeRng } from '@/lib/scroll';
import { ARC, RADIUS } from './Falls';

let _cachedSprite: THREE.Texture | null = null;
function softSprite() {
  if (_cachedSprite) return _cachedSprite;
  if (typeof document === 'undefined') return new THREE.Texture();
  try {
    const c = document.createElement('canvas');
    c.width = c.height = 64;
    const x = c.getContext('2d');
    if (!x) return new THREE.Texture();
    const g = x.createRadialGradient(32, 32, 0, 32, 32, 32);
    g.addColorStop(0, 'rgba(240, 247, 246, 0.9)');
    g.addColorStop(0.45, 'rgba(240, 247, 246, 0.28)');
    g.addColorStop(1, 'rgba(240, 247, 246, 0)');
    x.fillStyle = g;
    x.fillRect(0, 0, 64, 64);
    _cachedSprite = new THREE.CanvasTexture(c);
    return _cachedSprite;
  } catch {
    return new THREE.Texture();
  }
}

export function Mist({ quality, reduced = false }: { quality: Quality; reduced?: boolean }) {
  const count = QUALITY_SETTINGS[quality].mist;
  const mat = useRef<THREE.ShaderMaterial>(null);

  const { positions, seeds } = useMemo(() => {
    const rng = makeRng(8675309);
    const positions = new Float32Array(count * 3);
    const seeds = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      const ang = (rng() - 0.5) * ARC;
      const r = RADIUS * (0.72 + rng() * 0.5);
      positions[i * 3]     = Math.sin(ang) * r + (rng() - 0.5) * 26;
      positions[i * 3 + 1] = -26 + rng() * 54;
      positions[i * 3 + 2] = -104 + Math.cos(ang) * r * 0.42 + rng() * 40;
      seeds[i] = rng() * 100;
    }
    return { positions, seeds };
  }, [count]);

  const uniforms = useMemo(() => ({
    uTime: { value: 0 },
    uMap:  { value: softSprite() },
    uTint: { value: new THREE.Color(PALETTE.mist) },
  }), []);

  useFrame((_, dt) => {
    if (!reduced && mat.current) mat.current.uniforms.uTime.value += dt;
  });

  return (
    <points>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-aSeed" args={[seeds, 1]} />
      </bufferGeometry>
      <shaderMaterial
        ref={mat}
        vertexShader={MIST_VERT}
        fragmentShader={MIST_FRAG}
        uniforms={uniforms}
        transparent
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}
