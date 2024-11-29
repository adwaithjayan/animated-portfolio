import React from 'react'
import { useGLTF } from '@react-three/drei'

export function MugModel(props) {
    const { nodes, materials } = useGLTF('/mug.glb')
    return (
        <group {...props} dispose={null}>
            <group rotation={[-Math.PI / 2, 0, 0]}>
                <group rotation={[Math.PI / 2, 0, 0]}>
                    <mesh geometry={nodes.defaultMaterial.geometry} material={materials.PM3D_Cylinder3D4} />
                    <mesh geometry={nodes.defaultMaterial_1.geometry} material={materials.PM3D_Cylinder3D_2} />
                </group>
            </group>
        </group>
    )
}

useGLTF.preload('/mug.glb')
