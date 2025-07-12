import React, { useEffect, useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useMotionValue, useSpring } from 'motion/react'
import * as THREE from 'three';

export function World(props) {
    const group = useRef()
    const { nodes, materials, animations } = useGLTF('models/wonderful_world.glb')
    const { actions } = useAnimations(animations, group)

    useEffect(() => {
        Object.entries(materials).forEach(([name, mat]) => {
            const isEmissive = mat.emissive?.r > 0.01 || mat.emissive?.g > 0.01 || mat.emissive?.b > 0.01;

            mat.transparent = true;
            mat.opacity = mat.opacity ?? 0.4;
            mat.depthWrite = false;
            mat.side = THREE.DoubleSide;

            if (isEmissive) {
            mat.blending = THREE.AdditiveBlending;
            mat.emissiveIntensity = mat.emissiveIntensity || 2;
            } else {
            mat.blending = THREE.NormalBlending;
            }
        });
        }, [materials]);

    useEffect(() => {
        if (animations.length > 0) {
            const action = actions[animations[0].name];
            if (action) {
            action.play();
            action.timeScale = 0.3; // ← más lento (1 es normal, 0.5 es la mitad, etc.)
            }
        }
        }, [actions, animations]);
    
        const yPosition = useMotionValue(5);
        const ySpring = useSpring(yPosition, { damping: 30 });
        useEffect(() => {ySpring.set(-1)}, [ySpring]);
        useFrame(() => {
        group.current.position.y = ySpring.get();
        });

    return (
        <group ref={group} {...props} dispose={null} scale={props.scale || 0.4} position={props.position || [0.5, -1, -1]}>
        <group name="Sketchfab_Scene">
            <group name="Sketchfab_model">
            <group name="root">
                <group name="GLTF_SceneRootNode">
                <group name="Sphere001_0" scale={2.473}>
                    <mesh
                    name="Object_4"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_4.geometry}
                    material={materials.material}
                    />
                </group>
                <group name="Sphere002_1" scale={2.444}>
                    <mesh
                    name="Object_6"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_6.geometry}
                    material={materials.material}
                    />
                </group>
                <group name="Sphere003_2" scale={2.423}>
                    <mesh
                    name="Object_8"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_8.geometry}
                    material={materials.material}
                    />
                </group>
                <group name="Sphere004_3" scale={2.395}>
                    <mesh
                    name="Object_10"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_10.geometry}
                    material={materials.material}
                    />
                </group>
                <group name="Sphere005_4" scale={2.367}>
                    <mesh
                    name="Object_12"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_12.geometry}
                    material={materials.material}
                    />
                </group>
                <group name="Sphere006_5" scale={2.344}>
                    <mesh
                    name="Object_14"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_14.geometry}
                    material={materials.material}
                    />
                </group>
                <group name="Sphere007_6" scale={2.316}>
                    <mesh
                    name="Object_16"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_16.geometry}
                    material={materials.material}
                    />
                </group>
                <group name="Sphere008_7" scale={2.289}>
                    <mesh
                    name="Object_18"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_18.geometry}
                    material={materials.material}
                    />
                </group>
                <group name="Sphere009_8" scale={2.269}>
                    <mesh
                    name="Object_20"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_20.geometry}
                    material={materials.material}
                    />
                </group>
                <group name="Sphere0010_9" scale={2.243}>
                    <mesh
                    name="Object_22"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_22.geometry}
                    material={materials.material}
                    />
                </group>
                <group name="Sphere011_10" scale={2.217}>
                    <mesh
                    name="Object_24"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_24.geometry}
                    material={materials.material}
                    />
                </group>
                <group name="Circle_15" scale={3.736}>
                    <group name="Sphere_12" scale={0.67}>
                    <mesh
                        name="Object_29"
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_29.geometry}
                        material={materials.material}
                    />
                    </group>
                    <group name="x_13" scale={0.663}>
                    <mesh
                        name="Object_31"
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_31.geometry}
                        material={materials.lights}
                    />
                    </group>
                    <group name="xxxx_14" scale={0.673}>
                    <mesh
                        name="Object_33"
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_33.geometry}
                        material={materials.material_3}
                    />
                    </group>
                </group>
                <group
                    name="Sphere013_16"
                    rotation={[Math.PI / 2, 0, 0]}
                    scale={[0.019, 0.03, 0.019]}>
                    <mesh
                    name="Object_35"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_35.geometry}
                    material={materials.material_4}
                    />
                </group>
                <group
                    name="Sphere014_18"
                    rotation={[Math.PI / 2, 0, 0]}
                    scale={[0.017, 0.028, 0.017]}>
                    <mesh
                    name="Object_37"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_37.geometry}
                    material={materials.material_5}
                    />
                </group>
                <group
                    name="Sphere015_20"
                    rotation={[Math.PI / 2, 0, 0]}
                    scale={[0.019, 0.03, 0.019]}>
                    <mesh
                    name="Object_39"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_39.geometry}
                    material={materials.material_5}
                    />
                </group>
                <group
                    name="Sphere016_22"
                    rotation={[Math.PI / 2, 0, 0]}
                    scale={[0.016, 0.026, 0.016]}>
                    <mesh
                    name="Object_41"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_41.geometry}
                    material={materials.material_4}
                    />
                </group>
                <group name="Circle005_24" scale={3.736} />
                <group
                    name="Sphere017_25"
                    rotation={[Math.PI / 2, 0, 0]}
                    scale={[0.017, 0.028, 0.017]}>
                    <mesh
                    name="Object_44"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_44.geometry}
                    material={materials.material_5}
                    />
                </group>
                <group
                    name="Sphere018_27"
                    rotation={[Math.PI / 2, 0, 0]}
                    scale={[0.017, 0.028, 0.017]}>
                    <mesh
                    name="Object_46"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_46.geometry}
                    material={materials.material_4}
                    />
                </group>
                <group
                    name="Sphere019_29"
                    rotation={[Math.PI / 2, 0, 0]}
                    scale={[0.019, 0.03, 0.019]}>
                    <mesh
                    name="Object_48"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_48.geometry}
                    material={materials.material_4}
                    />
                </group>
                <group
                    name="Sphere020_31"
                    rotation={[Math.PI / 2, 0, 0]}
                    scale={[0.016, 0.026, 0.016]}>
                    <mesh
                    name="Object_50"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_50.geometry}
                    material={materials.material_5}
                    />
                </group>
                <group name="Sphere021_33" scale={0}>
                    <mesh
                    name="Object_52"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_52.geometry}
                    material={materials.CORE}
                    />
                </group>
                </group>
            </group>
            </group>
        </group>
        </group>
    )
}

useGLTF.preload('/wonderful_world.glb')