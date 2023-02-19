import React, { useState } from "react";

const Input = () => {
  const [fullname, setFullName] = useState("");
  const [message, setMessage] = useState("");
  const handleInputChange = (e) => {
    setFullName(e.target.value);
  };
  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };
  return (
    <div className="p-5">
      {fullname}
      <input
        type="text"
        name="fullname"
        className="p-5 w-full max-w-[300px] border border-gray-200 rounded-lg"
        placeholder="Enter your name"
        onChange={handleInputChange}
      ></input>
      {message}
      <textarea
        className="p-5 w-full max-w-[300px] border border-gray-200 rounded-lg"
        placeholder="Enter your message"
        name="message"
        onChange={handleMessageChange}
      ></textarea>

      <select name="contry">
        <value value="VietNam">VietNam</value>
        <value value="Japan">Japan</value>
        <value value="USA">USA</value>
      </select>
    </div>
  );
};

export default Input;
