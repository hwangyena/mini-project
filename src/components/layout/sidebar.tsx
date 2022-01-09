import { motion, useCycle, Variants } from "framer-motion";
import { useRef } from "react";
import cn from "classnames";
import s from "src/styles/layout.module.css";
import SidebarItems from "./sidebar-items";

const sidebarBackground: Variants = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 10,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(20px at 30px 30px)",
    transition: {
      delay: 0.3,
      type: "spring",
      stiffness: 500,
      damping: 100, //속도
    },
  },
};

const Sidebar = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const navRef = useRef<HTMLElement>(null);
  const height = navRef.current?.getBoundingClientRect().height;

  return (
    <motion.nav
      className={s.sidebar}
      ref={navRef}
      animate={isOpen ? "open" : "closed"}
    >
      <motion.div
        initial={false}
        className={cn(s.bg, isOpen && s.open)}
        variants={sidebarBackground}
      >
        <button className={s.burger} onClick={() => toggleOpen()}>
          <span />
          <span />
          <span />
        </button>
        <SidebarItems />
      </motion.div>
    </motion.nav>
  );
};

export default Sidebar;