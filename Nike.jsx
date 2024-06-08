"use client"
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('/nike.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Object_4.geometry} material={materials.Main} position={[0.35, -0.465, 1.023]} rotation={[-Math.PI, 0, -Math.PI]} />
      <mesh geometry={nodes.Object_6.geometry} material={materials.Main} position={[0.677, 0.202, 0.985]} rotation={[1.555, 0.066, Math.PI / 2]} />
      <mesh geometry={nodes.Object_8.geometry} material={materials.Main} position={[-0.077, 0.527, 1.102]} rotation={[0, -Math.PI / 2, 0]} />
      <mesh geometry={nodes.Object_10.geometry} material={materials.Main} position={[0.09, 0.86, 1.074]} rotation={[-Math.PI, -0.263, -Math.PI]} />
      <mesh geometry={nodes.Object_12.geometry} material={materials.Main} position={[-0.509, -0.231, 1.185]} rotation={[-Math.PI, -0.343, -Math.PI]} />
      <mesh geometry={nodes.Object_14.geometry} material={materials.Main} position={[-2.289, -1.256, 0.921]} rotation={[Math.PI / 2, 0, -2.052]} />
      <mesh geometry={nodes.Object_16.geometry} material={materials.Main} position={[-1.828, -0.393, 1.304]} rotation={[Math.PI / 2, 0, -Math.PI]} />
      <mesh geometry={nodes.Object_18.geometry} material={materials.Main} position={[-2.588, -0.701, 1.204]} rotation={[Math.PI / 2, 0, -Math.PI]} />
      <mesh geometry={nodes.Object_20.geometry} material={materials.Main} position={[-2.606, -0.469, 1.214]} rotation={[0, -Math.PI / 2, 0]} />
      <mesh geometry={nodes.Object_22.geometry} material={materials.Main} position={[-0.363, 0.238, 1.113]} rotation={[-Math.PI, -0.343, -Math.PI]} />
      <mesh geometry={nodes.Object_24.geometry} material={materials.Main} position={[-0.654, 1.025, 1.161]} rotation={[Math.PI / 2, -1.019, Math.PI / 2]} />
      <mesh geometry={nodes.Object_26.geometry} material={materials.Main} position={[-0.709, 1.263, 1.21]} rotation={[1.6, -0.914, 1.601]} />
      <mesh geometry={nodes.Object_28.geometry} material={materials.Main} position={[-0.098, 0.51, 1.739]} rotation={[0.11, 0.21, -0.359]} />
      <mesh geometry={nodes.Object_30.geometry} material={materials.Main} position={[-1.355, -1.233, 1.137]} rotation={[Math.PI / 2, 0, -2.052]} />
      <mesh geometry={nodes.Object_32.geometry} material={materials.Main} position={[-0.982, 0.385, 1.193]} rotation={[Math.PI / 2, 0.595, -Math.PI]} />
      <mesh geometry={nodes.Object_34.geometry} material={materials.Main} position={[-0.194, -0.155, 1.081]} rotation={[Math.PI / 2, 0, -Math.PI]} />
      <mesh geometry={nodes.Object_36.geometry} material={materials.Main} position={[-1.131, -1.255, 1.283]} rotation={[Math.PI / 2, 0, -2.052]} />
      <mesh geometry={nodes.Object_38.geometry} material={materials.Main} position={[-1.343, -0.908, 1.16]} rotation={[-1.571, -0.024, -1.571]} scale={0.04} />
      <mesh geometry={nodes.Object_40.geometry} material={materials.Main} position={[-1.373, 0.202, 1.214]} rotation={[-Math.PI, 1.562, -Math.PI]} />
      <mesh geometry={nodes.Object_42.geometry} material={materials.Main} position={[-0.952, 0.44, 1.227]} rotation={[Math.PI / 2, -1.019, Math.PI / 2]} />
      <mesh geometry={nodes.Object_44.geometry} material={materials.Main} position={[-0.027, 1.026, 1.086]} rotation={[-Math.PI, -0.263, -Math.PI]} />
      <mesh geometry={nodes.Object_46.geometry} material={materials.Main} position={[-2.325, -1.228, 1.159]} rotation={[Math.PI / 2, 0, -2.052]} />
      <mesh geometry={nodes.Object_48.geometry} material={materials.Main} position={[-1.202, -0.931, 1.126]} rotation={[0, -Math.PI / 2, 0]} />
      <mesh geometry={nodes.Object_50.geometry} material={materials.Main} position={[-1.278, -1.193, 1.176]} rotation={[Math.PI / 2, 0, -2.052]} />
      
      {/* ///////////////////////////////////////////////// */}
      
      
      {/* <mesh geometry={nodes.Object_52.geometry} material={materials.Main} position={[0.383, -0.465, -1.023]} scale={[-1, 1, 1]} />
      <mesh geometry={nodes.Object_54.geometry} material={materials.Main} position={[0.709, 0.202, -0.985]} rotation={[1.586, 0.066, Math.PI / 2]} scale={[-1, 1, 1]} />
      <mesh geometry={nodes.Object_56.geometry} material={materials.Main} position={[-0.044, 0.527, -1.102]} rotation={[0, -Math.PI / 2, 0]} scale={[-1, 1, 1]} />
      <mesh geometry={nodes.Object_58.geometry} material={materials.Main} position={[0.122, 0.86, -1.074]} rotation={[0, -0.263, 0]} scale={[-1, 1, 1]} />
      <mesh geometry={nodes.Object_60.geometry} material={materials.Main} position={[-0.476, -0.231, -1.185]} rotation={[0, -0.343, 0]} scale={[-1, 1, 1]} />
      <mesh geometry={nodes.Object_62.geometry} material={materials.Main} position={[-2.256, -1.256, -0.921]} rotation={[Math.PI / 2, 0, -1.089]} scale={[-1, 1, 1]} />
      <mesh geometry={nodes.Object_64.geometry} material={materials.Main} position={[-1.795, -0.393, -1.304]} rotation={[Math.PI / 2, 0, 0]} scale={[-1, 1, 1]} />
      <mesh geometry={nodes.Object_66.geometry} material={materials.Main} position={[-2.556, -0.701, -1.204]} rotation={[Math.PI / 2, 0, 0]} scale={[-1, 1, 1]} />
      <mesh geometry={nodes.Object_68.geometry} material={materials.Main} position={[-2.573, -0.469, -1.214]} rotation={[0, -Math.PI / 2, 0]} scale={[-1, 1, 1]} />
      <mesh geometry={nodes.Object_70.geometry} material={materials.Main} position={[-0.331, 0.238, -1.113]} rotation={[0, -0.343, 0]} scale={[-1, 1, 1]} />
      <mesh geometry={nodes.Object_72.geometry} material={materials['Material.001']} position={[-0.622, 1.025, -1.161]} rotation={[Math.PI / 2, -1.019, Math.PI / 2]} scale={[-1, 1, 1]} />
      <mesh geometry={nodes.Object_74.geometry} material={materials['Material.001']} position={[-0.677, 1.263, -1.21]} rotation={[1.542, -0.914, 1.54]} scale={[-1, 1, 1]} />
      <mesh geometry={nodes.Object_76.geometry} material={materials.Main} position={[-0.065, 0.51, -1.739]} rotation={[3.031, 0.21, -2.783]} scale={[-1, 1, 1]} />
      <mesh geometry={nodes.Object_78.geometry} material={materials.Main} position={[-1.323, -1.233, -1.137]} rotation={[Math.PI / 2, 0, -1.089]} scale={[-1, 1, 1]} />
      <mesh geometry={nodes.Object_80.geometry} material={materials.Main} position={[-0.95, 0.385, -1.193]} rotation={[Math.PI / 2, 0.595, 0]} scale={[-1, 1, 1]} />
      <mesh geometry={nodes.Object_82.geometry} material={materials.Main} position={[-0.161, -0.155, -1.081]} rotation={[Math.PI / 2, 0, 0]} scale={[-1, 1, 1]} />
      <mesh geometry={nodes.Object_84.geometry} material={materials.Main} position={[-1.098, -1.255, -1.283]} rotation={[Math.PI / 2, 0, -1.089]} scale={[-1, 1, 1]} />
      <mesh geometry={nodes.Object_86.geometry} material={materials.Main} position={[-1.31, -0.908, -1.16]} rotation={[-1.571, -0.024, -1.571]} scale={[-0.04, 0.04, 0.04]} />
      <mesh geometry={nodes.Object_88.geometry} material={materials.Main} position={[-1.341, 0.202, -1.214]} rotation={[0, 1.562, 0]} scale={[-1, 1, 1]} />
      <mesh geometry={nodes.Object_90.geometry} material={materials.Main} position={[-0.919, 0.44, -1.227]} rotation={[Math.PI / 2, -1.019, Math.PI / 2]} scale={[-1, 1, 1]} />
      <mesh geometry={nodes.Object_92.geometry} material={materials.Main} position={[0.005, 1.026, -1.086]} rotation={[0, -0.263, 0]} scale={[-1, 1, 1]} />
      <mesh geometry={nodes.Object_94.geometry} material={materials.Main} position={[-2.292, -1.228, -1.159]} rotation={[Math.PI / 2, 0, -1.089]} scale={[-1, 1, 1]} />
      <mesh geometry={nodes.Object_96.geometry} material={materials.Main} position={[-1.17, -0.931, -1.126]} rotation={[0, -Math.PI / 2, 0]} scale={[-1, 1, 1]} />
      <mesh geometry={nodes.Object_98.geometry} material={materials.Main} position={[-1.245, -1.193, -1.176]} rotation={[Math.PI / 2, 0, -1.089]} scale={[-1, 1, 1]} /> */}
    </group>
  )
}

useGLTF.preload('/nike.glb')
