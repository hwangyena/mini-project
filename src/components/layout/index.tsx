import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./sidebar";

interface Props {}

const LayoutContainer = (props: Props) => {
  return (
    <>
      <Sidebar />
      {/* children과 같은 효과 */}
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default LayoutContainer;
