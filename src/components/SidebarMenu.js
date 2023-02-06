import React, { forwardRef } from "react";

const SidebarMenu = forwardRef((props, ref) => {
  console.log(props.show);
  return (
    <div
      ref={ref}
      className={`w-[300px] transition-transform bg-gray-300 shadow-md fixed top-0 left-0 bottom-0 z-10 ${
        props.show ? "" : "-translate-x-full"
      } `}
    ></div>
  );
});

export default SidebarMenu;
