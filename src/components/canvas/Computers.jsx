/* eslint-disable react/no-unknown-property */
import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";

import PropTypes from "prop-types"; // Importing PropTypes

const Computers = ({ isMobile }) => {
  const computer = useGLTF("./desktop_pc/scene.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <pointLight intensity={1} />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.45 : 0.75}
        position={isMobile ? [0, -3.25, -0.8] : [0, -3.25, -0.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

// Defining the prop type for 'isMobile'
Computers.propTypes = {
  isMobile: PropTypes.bool.isRequired, // Expecting 'isMobile' to be a boolean and required
};

const ComputersCanvas = () => {
  // Create a state variable 'isMobile' initialized to 'false' and a setter function 'setIsMobile'
  // 'isMobile' will store whether the viewport is less than or equal to 500px
  const [isMobile, setIsMobile] = useState(false);

  // Using the useEffect hook to run the effect only once after the component mounts
  useEffect(() => {
    // Create a media query to check if the viewport width is less than or equal to 500px
    const mediaQuery = window.matchMedia("(max-width:500px)");

    // Set the initial value of 'isMobile' based on the current viewport width
    setIsMobile(mediaQuery.matches);

    // Define a function to handle media query changes (when the viewport crosses the 500px threshold)
    const handleMediaQueryChange = (event) => {
      // Update 'isMobile' whenever the media query state changes
      setIsMobile(event.matches);
    };

    // Add an event listener to the media query that triggers on viewport changes
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Return a cleanup function to remove the event listener when the component unmounts
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [20, 3, 5], fov: 30 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
