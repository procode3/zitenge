/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 public/models/rack.glb 
*/

import React from 'react';
import { useGLTF } from '@react-three/drei';

const Rack = (props) => {
  const { nodes, materials } = useGLTF('/models/rack.glb');
  console.log(nodes);
  console.log(materials);
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.frame.geometry} material={materials.Material} position={[0, 0, -0.021]} rotation={[0, 0, Math.PI / 4]} />
      <mesh geometry={nodes.bench.geometry} material={materials['Material.001']} position={[-0.117, -0.118, -0.021]} />
    </group>
  )
}

useGLTF.preload('/rack.glb')

export default Rack;