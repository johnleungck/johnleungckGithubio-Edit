import React from 'react'
import { useGLTF, } from '@react-three/drei'
import * as THREE from 'three'

export default function Model(props) {
  const { nodes, materials } = useGLTF('/oceanGlobe-transformed.glb')

  const landPointsMaterial = new THREE.PointsMaterial({
    size: 0.04,
    sizeAttenuation: true,
    color: "#959595",
    map: materials['Scene_-_Root'].map,
  })

  const seaPointsMaterial = new THREE.PointsMaterial({
    size: 0.02,
    color: "#98b1df",
    sizeAttenuation: true,
    map: materials['Scene_-_Root'].map,
  })

  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI/2.5, 0, -Math.PI/1.15]}>
        <points geometry={nodes.Object_4.geometry} material={landPointsMaterial} />
        <points geometry={nodes.Object_35.geometry} material={seaPointsMaterial} />
        <mesh position={[-0.4, 0.81, 0.41]}>
          <sphereGeometry args={[0.015, 16, 16]} />
          <meshBasicMaterial color="#d398c4" />
        </mesh>
        <mesh position={[0, 0, 0]}>
          <sphereGeometry args={[0.99, 32, 32]} />
          <meshBasicMaterial color="#000000" transparent={true} opacity={0.6}/>
        </mesh>
      </group>
    </group>
  )
}

useGLTF.preload('/oceanGlobe-transformed.glb')