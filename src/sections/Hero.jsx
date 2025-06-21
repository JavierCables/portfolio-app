import { Canvas } from "@react-three/fiber";
import HeroText from "../components/HeroText";
import ParallaxBackground from "../components/ParallaxBackground";
import { World } from "../components/World";
import { useMediaQuery } from "react-responsive";
import { useFrame } from "@react-three/fiber";
import { easing } from "maath";
import { Float } from "@react-three/drei";
import { Suspense } from "react";
import Loader from "../components/Loader"
import { AmbientLight } from "three";
import { Environment } from "@react-three/drei";
import { EffectComposer, Bloom } from '@react-three/postprocessing';

const Hero = () => {
    const isMobile = useMediaQuery({ maxWidth: 853 });

    return (
        <section className="flex items-start justify-center md:items-start md:justift-start min-h-screen overflow-hidden c-space">
            <HeroText />
            <ParallaxBackground />
            <figure className="absolute inset-0" style= {{ width: "100vw", height: "100vh" }}>
                <Canvas camera={{position: [0, 0.5, 3]}}>
                    <Environment preset="city" />
                    <Suspense fallback= {<Loader />}>
                        <Float>
                            <World scale={isMobile && 0.55} position={isMobile && [0, 0, -2.25]} />
                            <EffectComposer>
                                <Bloom luminanceThreshold={0} luminanceSmoothing={1} height={300} />
                            </EffectComposer>
                        </Float>
                    </Suspense>
                    <Rig />
                </Canvas>
            </figure>
        </section>
    );
};

function Rig() {
    return useFrame((state, delta) => {
        easing.damp3(state.camera.position, [state.mouse.x / 10, 1 + state.mouse.y / 10, 3], 0.5, delta);
    });
}

export default Hero;