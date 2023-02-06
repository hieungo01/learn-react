import React, { useEffect, useRef, useState } from "react";

const TextareaAutoResize = () => {
  const [text, setText] = useState("");
  const textareaRef = useRef(null);
  const [textareaHeight, setTextareaHeight] = useState("auto");
  const [textareaWrapperHeight, setTextareaWrapperHeight] = useState("auto");
  const handleChange = (e) => {
    setTextareaHeight("auto");
    setTextareaWrapperHeight(`${textareaRef?.current?.scrollHeight}px`);

    setText(e.target.value);
  };

  useEffect(() => {
    setTextareaHeight(`${textareaRef?.current?.scrollHeight}px`);
    setTextareaWrapperHeight(`${textareaRef?.current?.scrollHeight}px`);
  }, [text]);
  return (
    <div className="p-5" style={{ minHeight: textareaWrapperHeight }}>
      <textarea
        className="w-full max-w-[400px] transition-all overflow-hidden p-5 rounded-lg resize-none border-gray-500"
        placeholder="Please enter your content ..."
        value={text}
        ref={textareaRef}
        style={{ height: textareaHeight }}
        onChange={handleChange}
      ></textarea>
    </div>
  );
};

export default TextareaAutoResize;
