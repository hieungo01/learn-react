import { useEffect, useRef } from "react";

export default function useClickOutSide(callback, dom = "button") {
  const nodeRef = useRef(null);
  useEffect(() => {
    function handleClickOutSide(e) {
      if (
        nodeRef.current &&
        !nodeRef.current.contains(e.target) &&
        !e.target.matches(dom)
      ) {
        callback();
      }
    }
    document.addEventListener("click", handleClickOutSide);
    return () => {
      document.removeEventListener("click", handleClickOutSide);
    };
  }, [callback, dom]);

  return {
    nodeRef,
  };
}
