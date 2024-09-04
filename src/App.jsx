/* eslint-disable react/no-unknown-property */
import { Canvas } from '@react-three/fiber'
import React from 'react'
import "./style.css";
import { OrbitControls } from '@react-three/drei';
import Cyl from './Cyl';
import { Bloom, EffectComposer, ToneMapping } from '@react-three/postprocessing';


const App = () => {
  
  return (
    <Canvas  camera={{fov:30}}>
      <OrbitControls />
      <ambientLight />
      <Cyl />
      <EffectComposer>
        <Bloom 
        mipmapBlur
        intensity={11.0}
        luminanceThreshold={0}
        luminanceSmoothing={0}
        />
        <ToneMapping adaptive />
      </EffectComposer>
      
    </Canvas>
  );
}

export default App