import { Canvas } from "@react-three/fiber";
import React from "react";

interface Props {
  isHover: boolean;
}

const lights = [
  [2, 1, 4, 1],
  [8, 0, 4, 1],
];

const StarIcon = ({ isHover }: Props) => {
  return (
    <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 5.5], fov: 45 }}>
      {lights.map(([x, y, z, intensity], i) => (
        <pointLight
          key={i}
          intensity={intensity}
          position={[x / 8, y / 8, z / 8]}
        />
      ))}
    </Canvas>
  );
};

export default StarIcon;
