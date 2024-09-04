/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/no-unknown-property */
import React, { useRef } from 'react';
import { useTexture } from "@react-three/drei";
import * as Three from "three";
import { useFrame } from '@react-three/fiber';

const Cyl = () => {
  let cyl = useRef();
  useFrame((state,delta)=>{
    cyl.current.rotation.y +=delta;
  })
    let tex = useTexture("public/image2.png");
    tex.needsUpdate =true;
  return (
    <group rotation={[0,1.4,0.5]}>
      
    <mesh ref={cyl}>
      <cylinderGeometry
        // eslint-disable-next-line react/no-unknown-property
        args={[1, 1, 1, 30, 30, true]}
        />
      <meshStandardMaterial map={tex} transparent side={Three.DoubleSide} />
    </mesh>
    </group>
  );
}

export default Cyl