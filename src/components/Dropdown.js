import React, { useEffect, useRef, useState } from "react";
import useClickOutSide from "../hooks/useClickOutSide";

const Dropdown = () => {
  const [showDropDown, setShowDropDown] = useState(false);
  // const dropdownRef = useRef(null);
  const hanldeClickShowDropDown = () => {
    setShowDropDown(false);
  };
  const { nodeRef } = useClickOutSide(hanldeClickShowDropDown);
  return (
    <div className="relative w-full max-w-[500px]" ref={nodeRef}>
      <div
        onClick={() => setShowDropDown(!showDropDown)}
        className="p-5 border border-gray-200 rounded-lg w-full cursor-pointer"
      >
        Selected
      </div>
      {showDropDown && (
        <div className="p-5 border border-gray-200 rounded-lg absolute top-100 left-0 w-full bg-white">
          <div className="py-3 border-b border-b-gray-100">Javascript</div>
          <div className="py-3 border-b border-b-gray-100">ReactJS</div>
          <div className="py-3 border-b-gray-100">VueJS</div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
