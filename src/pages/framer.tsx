import { Canvas } from "@react-three/fiber";
import { motion, useMotionValue } from "framer-motion";
import { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.article`
  --purple: #8946a6;
  --pink: #ffcddd;
  width: 100vw;
  height: 100vh;
  background: linear-gradient(var(--purple), var(--pink));
  padding: 50px;
`;

const MotionDivWrapper = styled(motion.div)`
  background: #fff;
  width: 50px;
  height: 50px;
`;

const FramerPage = () => {
  const [isHover, setIsHover] = useState(false);

  return (
    <Wrapper>
      <MotionDivWrapper
        animate={{
          scale: [1, 2, 2, 2, 1],
          rotate: [0, 0, 270, 270, 0],
          borderRadius: ["20%", "20%", "50%", "50%", "20%"],
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
    </Wrapper>
  );
};

export default FramerPage;
