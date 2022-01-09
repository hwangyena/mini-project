import React from "react";
import { Link } from "react-router-dom";
import { SideMenuEntry } from "src/common/side-menu-entry";
import s from "src/styles/layout.module.css";

const SidebarItems = () => {
  return (
    <ul className={s.items}>
      {SideMenuEntry.map((v, i) => (
        <Link to={v.path}>
          <li key={i}>{v.label}</li>
        </Link>
      ))}
    </ul>
  );
};

export default SidebarItems;
