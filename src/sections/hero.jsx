import { Canvas } from "@react-three/fiber";
import Herotext from "../components/herotext";
import ParallaxBackground from "../components/ParallaxBackgroun";
import { Moon } from "../components/moon";
import { OrbitControls } from "@react-three/drei";
 const Hero = () => {
  return (
  <section className="flex items-start justify-center md:items-start md:justify-start min-h-screen
  overflow-hidden c-space">
    <Herotext/>
    <ParallaxBackground/>
    <figure className="absolute inset-0 "
     style={{width: "100vw", height: "100vh"}}
    >
      <Canvas>
        <Moon scale={2.5} position={[0, -1.5, 0]}/>
        <OrbitControls/>
      </Canvas>
    </figure>
  </section>
  );
};

export default Hero;