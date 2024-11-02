/* eslint-disable react/no-unknown-property */

// Import necessary dependencies from React and Three.js libraries
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

// Import a custom loader component (used as a fallback while the model is loading)
import CanvasLoader from "../Loader";

// Earth component responsible for loading and rendering the 3D model
const Earth = () => {
  // Load the Earth 3D model using useGLTF hook, which fetches the .gltf model
  const earth = useGLTF("./planet/scene.gltf");

  // Render the 3D model as a primitive object with custom scale, position, and rotation
  return (
    <primitive object={earth.scene} scale={2.5} position-y={0} rotation-y={0} />
  );
};

// EarthCanvas component sets up a 3D scene and camera using @react-three/fiber's Canvas
const EarthCanvas = () => {
  return (
    // Canvas provides the 3D context for rendering elements within it
    <Canvas
      shadows // Enable shadows in the scene
      frameloop="demand" // Only re-renders when necessary (optimized performance)
      dpr={[1, 2]} // Sets device pixel ratio to range from 1 to 2 for clearer rendering
      gl={{ preserveDrawingBuffer: true }} // Enables preserving the buffer for WebGL, useful for screenshots
      camera={{
        fov: 45, // Field of view for the camera (45 degrees)
        near: 0.1, // Minimum render distance for the camera
        far: 200, // Maximum render distance for the camera
        position: [-4, 3, 6], // Initial camera position in 3D space
      }}
    >
      {/* Suspense helps delay rendering until the Earth model is fully loaded */}
      <Suspense fallback={<CanvasLoader />}>
        {/* OrbitControls provides interactive controls for the model */}
        <OrbitControls
          autoRotate // Automatically rotates the model
          enableZoom={false} // Disables zooming for a consistent view
          maxPolarAngle={Math.PI / 2} // Limits upward view angle to prevent flipping
          minPolarAngle={Math.PI / 2} // Limits downward view angle to prevent flipping
        />

        {/* Earth component renders the actual 3D model */}
        <Earth />

        {/* Preload loads all assets at the start for smoother performance */}
        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default EarthCanvas;
