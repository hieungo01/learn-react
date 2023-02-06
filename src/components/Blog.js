import React, { useEffect, useRef } from "react";
import useLinkNewTab from "../hooks/useLinkNewTab";
import useHover from "../hooks/useHover";

const Blog = () => {
  const { contentRef } = useLinkNewTab();
  const { hover, nodeRef } = useHover();
  return (
    <div ref={contentRef} className="entry-content">
      <p className="mb-5">
        Aliqua sunt dolor nulla eiusmod quis labore esse veniam nulla. Est nulla
        eiusmod nulla cupidatat aliquip eiusmod officia id consectetur eiusmod
        adipisicing nisi. Dolor magna mollit id exercitation reprehenderit.
        Pariatur adipisicing elit ex mollit eiusmod irure pariatur deserunt
        exercitation. Eu sint est sit veniam deserunt aute excepteur velit quis
        enim quis velit esse ea. Ea veniam laborum deserunt veniam quis
        adipisicing cillum quis.
        <a
          href="https://google.com"
          className={`underline transition-all ${
            hover ? "text-green-400" : ""
          }`}
          ref={nodeRef}
          rel="noreferrer"
        >
          google.com
        </a>
        ?
      </p>
      <p className="mb-5">
        Aliqua sunt dolor nulla eiusmod quis labore esse veniam nulla. Est nulla
        eiusmod nulla cupidatat aliquip eiusmod officia id consectetur eiusmod
        adipisicing nisi. Dolor magna mollit id exercitation reprehenderit.
        Pariatur adipisicing elit ex mollit eiusmod irure pariatur deserunt
        exercitation. Eu sint est sit veniam deserunt aute excepteur velit quis
        enim quis velit esse ea. Ea veniam laborum deserunt veniam quis
        adipisicing cillum quis.
        <a href="https://google.com" className="underline">
          google.com
        </a>
        ?
      </p>
      <p className="mb-5">
        Aliqua sunt dolor nulla eiusmod quis labore esse veniam nulla. Est nulla
        eiusmod nulla cupidatat aliquip eiusmod officia id consectetur eiusmod
        adipisicing nisi. Dolor magna mollit id exercitation reprehenderit.
        Pariatur adipisicing elit ex mollit eiusmod irure pariatur deserunt
        exercitation. Eu sint est sit veniam deserunt aute excepteur velit quis
        enim quis velit esse ea. Ea veniam laborum deserunt veniam quis
        adipisicing cillum quis.
        <a href="https://google.com" className="underline">
          google.com
        </a>
        ?
      </p>
    </div>
  );
};

export default Blog;
