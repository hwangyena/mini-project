import cn from "classnames";
import { motion, useCycle, Variants } from "framer-motion";
import React, { Suspense } from "react";
import { Outlet, useOutletContext } from "react-router-dom";
import { OutletContextType } from "src/types";
import Sidebar from "./sidebar";

const variants: Variants = {
  open: {
    paddingLeft: "230px",
    transition: {
      type: "spring",
      bounce: 0.5,
    },
  },
  closed: {
    paddingLeft: "75px",
    transition: {
      delay: 0.7,
      type: "spring",
      damping: 30,
    },
  },
};

const LayoutContainer = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);

  const onToggleNav = () => {
    toggleOpen();
  };

  return (
    <motion.div
      animate={isOpen ? "open" : "closed"}
      className="layout"
      variants={variants}
    >
      <Sidebar isOpen={isOpen} onToggleNav={onToggleNav} />
      {/* children과 같은 효과 */}
      <Suspense fallback={null}>
        <Outlet context={isOpen} />
      </Suspense>
    </motion.div>
  );
};

export function useOpen() {
  console.log("useOpen", useOutletContext<OutletContextType>());

  return useOutletContext<OutletContextType>();
}

export default LayoutContainer;
