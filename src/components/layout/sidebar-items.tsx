import { motion, Variants } from "framer-motion";
import { Link } from "react-router-dom";
import { SideMenuEntry } from "src/common/side-menu-entry";
import s from "src/styles/layout.module.css";

const ulVariants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, delayChildren: -1 },
  },
};

const liVariants: Variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 20,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

const SidebarItems = () => {
  return (
    <motion.ul className={s.items} variants={ulVariants}>
      {SideMenuEntry.map((v, i) => (
        <Link to={v.path}>
          <motion.li key={i} variants={liVariants}>
            {v.label}
          </motion.li>
        </Link>
      ))}
    </motion.ul>
  );
};

export default SidebarItems;
