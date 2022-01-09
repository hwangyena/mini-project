import { motion, useCycle } from "framer-motion";
import React, { useRef } from "react";
import cn from "classnames";
import s from "src/styles/layout.module.css";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useCycle(false, true);
  const navRef = useRef<HTMLElement>(null);
  const height = navRef.current?.getBoundingClientRect().height;

  return (
    <motion.nav
      className={s.sidebar}
      ref={navRef}
      animate={isOpen ? "open" : "closed"}
    >
      <motion.div />
      <button
        className={cn(s.burger, isOpen && s.open)}
        onClick={() => setIsOpen()}
      >
        <span />
        <span />
        <span />
      </button>
    </motion.nav>
  );
};

export default Sidebar;
