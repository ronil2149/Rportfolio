'use client';
import { useRef, type RefObject } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

/** Five stops: inside the gorge, over the lip, out across the lake,
 *  then the city resolving out of the haze. */
const LEGS = [
  { p: new THREE.Vector3(  0,  -6, -18), l: new THREE.Vector3(  0,  10, -104) },
  { p: new THREE.Vector3(-20,  14,  46), l: new THREE.Vector3(  0,   4,  -96) },
  { p: new THREE.Vector3(  8,  34, 210), l: new THREE.Vector3(  0, -10,  560) },
  { p: new THREE.Vector3( -8,  38, 430), l: new THREE.Vector3(-20,  14,  900) },
  { p: new THREE.Vector3(-24,  52, 640), l: new THREE.Vector3(-28,  34,  980) },
];

export function CameraRig({ progress, reduced }: {
  progress: RefObject<number>;
  reduced: boolean;
}) {
  const camera = useThree(s => s.camera);
  const size = useThree(s => s.size);
  const smoothed = useRef(0);
  const pos = useRef(LEGS[0].p.clone());
  const look = useRef(LEGS[0].l.clone());
  const pointer = useRef({ x: 0, y: 0, tx: 0, ty: 0 });
  const tmpP = useRef(new THREE.Vector3());
  const tmpL = useRef(new THREE.Vector3());

  useFrame((state, rawDt) => {
    const dt = Math.min(rawDt, 0.05);
    smoothed.current += (progress.current - smoothed.current) * Math.min(dt * 3.4, 1);

    const span = LEGS.length - 1;
    const f = Math.max(0, Math.min(0.9999, smoothed.current)) * span;
    const i = Math.floor(f);
    let k = f - i;
    k = k * k * (3 - 2 * k);

    tmpP.current.copy(LEGS[i].p).lerp(LEGS[i + 1].p, k);
    tmpL.current.copy(LEGS[i].l).lerp(LEGS[i + 1].l, k);
    pos.current.lerp(tmpP.current, Math.min(dt * 6, 1));
    look.current.lerp(tmpL.current, Math.min(dt * 6, 1));

    if (!reduced) {
      pointer.current.tx = state.pointer.x;
      pointer.current.ty = state.pointer.y;
      pointer.current.x += (pointer.current.tx - pointer.current.x) * Math.min(dt * 2.6, 1);
      pointer.current.y += (pointer.current.ty - pointer.current.y) * Math.min(dt * 2.6, 1);
    }

    const aspect = size.width / Math.max(size.height, 1);
    if (camera instanceof THREE.PerspectiveCamera) {
      // On narrow mobile portrait screens (aspect < 1), widen vertical FOV dynamically
      // so the horizontal FOV remains wide enough to encompass the falls and gorge framing
      const targetFov = aspect < 1 ? Math.min(74, 52 / Math.max(aspect * 1.12, 0.56)) : 52;
      if (Math.abs(camera.fov - targetFov) > 0.5) {
        camera.fov = targetFov;
        camera.updateProjectionMatrix();
      }
    }

    const zPull = aspect < 1 ? 16 * (1 - aspect) : 0;

    camera.position.set(
      pos.current.x + pointer.current.x * 7,
      pos.current.y + pointer.current.y * 4,
      pos.current.z + zPull,
    );
    camera.lookAt(look.current);
  });

  return null;
}
