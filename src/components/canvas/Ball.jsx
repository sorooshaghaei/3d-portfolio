/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";
import CanvasLoader from "../Loader";

/*
  Ball Component:
  - `Ball` is a 3D component that renders a floating, rotating shape (icosahedron) with a texture applied.
  - `props.imgUrl` is passed in as a prop, loaded as a texture using `useTexture`.
  - `useTexture` fetches and loads the image asynchronously and makes it available as `decal`.
  - `Float` adds a slight floating and rotation animation to the 3D shape.
  - The `mesh` represents the 3D object:
      - `icosahedronGeometry` defines its shape.
      - `meshStandardMaterial` defines its material, color, and shading style.
  - The `Decal` component then places the `decal` texture (icon) on the front face of the shape.
*/

// Component to create the 3D ball with a decal texture (image/icon) applied
const Ball = (props) => {
  // Load the image URL passed as 'imgUrl' prop into a texture using useTexture HOOKS
  const [decal] = useTexture([props.imgUrl]);

  return (
    // Float component for a floating animation effect on the ball
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      {/* Add ambient light to softly illuminate the ball */}
      <ambientLight intensity={0.25} />
      {/* Add directional light to give a slight shading effect */}
      <directionalLight position={[0, 0, 0.05]} />

      {/* Create a 3D shape with a decal texture applied */}
      <mesh castShadow receiveShadow scale={2.75}>
        {/* Define the geometry of the 3D shape (icosahedron) */}
        <icosahedronGeometry args={[1, 1]} />

        {/* Define material properties for the shape, including color and shading */}
        <meshStandardMaterial
          color="#fff8eb" // Light off-white color
          polygonOffset // Prevent z-fighting (visual artifact)
          polygonOffsetFactor={-5} // Offset factor for polygons
          flatShading // Simplifies shading for a stylized look
        />

        {/* Apply the decal texture (icon) to the front of the shape */}
        <Decal
          map={decal} // Image texture to be applied
          position={[0, 0, 1]} // Position on the shape
          rotation={[2 * Math.PI, 0, 6.25]} // Rotation angle for the decal
          flatShading // Apply flat shading on the decal
        />
      </mesh>
    </Float>
  );
};

/*
  BallCanvas Component:
  - `BallCanvas` sets up the Canvas where the `Ball` component is rendered.
  - `Canvas` creates a 3D rendering context.
  - `Suspense` ensures async loading of assets with a loading screen (`CanvasLoader`) displayed until everything loads.
  - `OrbitControls` allows the user to rotate the camera around the object, but zooming is disabled here.
  - `Ball` component is rendered inside `Canvas`, passing `icon` (from props) as `imgUrl` to be displayed as a decal.
  - `Preload` loads assets upfront to ensure smooth performance during interaction.
*/

// Component to create a canvas that renders the Ball component
const BallCanvas = ({ icon }) => {
  return (
    <Canvas frameloop="demand" gl={{ preserveDrawingBuffer: true }}>
      {/* Suspense for async loading with a fallback loader while content is loading */}
      <Suspense fallback={<CanvasLoader />}>
        {/* OrbitControls to allow camera control (rotation around the object) */}
        <OrbitControls enableZoom={false} />

        {/* Render the Ball component with the provided icon prop */}
        <Ball imgUrl={icon} />
      </Suspense>

      {/* Preload all assets for smoother performance */}
      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;
