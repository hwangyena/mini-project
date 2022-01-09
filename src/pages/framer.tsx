import { Canvas } from "@react-three/fiber";
import { motion, useMotionValue } from "framer-motion";
import { useState } from "react";
import styled from "styled-components";

const MotionDivWrapper = styled(motion.div)`
  background: #fff;
  width: 50px;
  height: 50px;
`;

const FramerPage = () => {
  const [isHover, setIsHover] = useState(false);

  return (
    <article className="layout">
      <MotionDivWrapper
        animate={{
          scale: [1, 2, 2, 2, 1],
          rotate: [0, 0, 270, 0, 0],
          borderRadius: ["20%", "20%", "50%", "20%", "20%"],
          // borderRadius: ["20%", "20%", "50%", "50%", "20%"],
        }}
        transition={{
          duration: 3,
          ease: "easeIn",
          times: [0, 0.2, 0.5, 0.8, 1],
          repeat: Infinity,
          repeatDelay: 1,
        }}
        // onHoverStart={() => setIsHover(true)}
        // onHoverEnd={() => setIsHover(false)}
      />
    </article>
  );
};

export default FramerPage;
