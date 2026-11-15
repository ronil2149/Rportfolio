'use client';
import { useMemo, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { makeRng } from '@/lib/scroll';

const BUILDINGS = 74;
const TOWER_COLOR = '#456D79';
const TOWER_EMISSIVE = '#264D59';

export function City() {
  const blocks = useRef<THREE.InstancedMesh>(null);
  const beacon = useRef<THREE.MeshBasicMaterial>(null);

  /** One instanced draw call for the whole skyline instead of 74 meshes. */
  const matrices = useMemo(() => {
    const rng = makeRng(1987123);
    const out: THREE.Matrix4[] = [];
    const m = new THREE.Matrix4();
    for (let i = 0; i < BUILDINGS; i++) {
      const bw = 7 + rng() * 15;
      const bh = 14 + rng() * rng() * 96;
      const bd = 7 + rng() * 15;
      m.compose(
        new THREE.Vector3((rng() - 0.5) * 470, bh / 2, (rng() - 0.5) * 130),
        new THREE.Quaternion(),
        new THREE.Vector3(bw, bh, bd),
      );
      out.push(m.clone());
    }
    return out;
  }, []);

  useFrame((state) => {
    if (blocks.current && !blocks.current.userData.seeded) {
      matrices.forEach((m, i) => blocks.current!.setMatrixAt(i, m));
      blocks.current.instanceMatrix.needsUpdate = true;
      blocks.current.userData.seeded = true;
    }
    if (beacon.current) {
      beacon.current.color.setHSL(0.015, 0.85, 0.52 + 0.2 * Math.sin(2.6 * state.clock.elapsedTime));
    }
  });

  return (
    <group position={[0, -28, 980]}>
      <instancedMesh ref={blocks} args={[undefined, undefined, BUILDINGS]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial
          color="#365965"
          emissive="#1D3D49"
          emissiveIntensity={1.15}
          roughness={0.84}
          metalness={0.04}
        />
      </instancedMesh>

      {/* CN Tower: tapered shaft, the pod with its lip, then the antenna */}
      <group position={[-28, 0, 24]}>
        <mesh position={[0, 75, 0]}>
          <cylinderGeometry args={[2.6, 7.4, 150, 14]} />
          <meshStandardMaterial
            color={TOWER_COLOR}
            emissive={TOWER_EMISSIVE}
            emissiveIntensity={1.3}
            roughness={0.82}
            metalness={0.04}
          />
        </mesh>
        <mesh position={[0, 104, 0]}>
          <cylinderGeometry args={[13.6, 11.5, 4, 18]} />
          <meshStandardMaterial
            color={TOWER_COLOR}
            emissive={TOWER_EMISSIVE}
            emissiveIntensity={1.3}
            roughness={0.82}
            metalness={0.04}
          />
        </mesh>
        <mesh position={[0, 112, 0]}>
          <cylinderGeometry args={[11, 13.5, 12, 18]} />
          <meshStandardMaterial
            color={TOWER_COLOR}
            emissive={TOWER_EMISSIVE}
            emissiveIntensity={1.3}
            roughness={0.82}
            metalness={0.04}
          />
        </mesh>
        <mesh position={[0, 136, 0]}>
          <cylinderGeometry args={[5.6, 7.2, 16, 14]} />
          <meshStandardMaterial
            color={TOWER_COLOR}
            emissive={TOWER_EMISSIVE}
            emissiveIntensity={1.3}
            roughness={0.82}
            metalness={0.04}
          />
        </mesh>
        <mesh position={[0, 177, 0]}>
          <cylinderGeometry args={[0.5, 1.7, 66, 8]} />
          <meshStandardMaterial
            color={TOWER_COLOR}
            emissive={TOWER_EMISSIVE}
            emissiveIntensity={1.3}
            roughness={0.82}
            metalness={0.04}
          />
        </mesh>
        <mesh position={[0, 212, 0]}>
          <sphereGeometry args={[1.9, 10, 10]} />
          <meshBasicMaterial ref={beacon} color="#FF5A4A" />
        </mesh>
      </group>
    </group>
  );
}
