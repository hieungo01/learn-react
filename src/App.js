// import CardList from "./components/card/CardList";
// import CardTailwind from "./components/card/CardTailwind";

import MovieSearchApp from "./components/MovieSearchApp";
import SignUpForm from "./components/form/SignUpForm";
import SignUpFormV2 from "./components/form/SignUpFormV2";
// import Photos from "./components/Photos/Photos";
// import HackerNews from "./components/news/HackerNews";
// import { useEffect, useRef, useState } from "react";
// import Input from "./components/Input";
// import TextareaAutoResize from "./components/TextareaAutoResize";
// import Dropdown from "./components/Dropdown";
// import Blog from "./components/Blog";
// import HackerNewsWithHook from "./components/news/HackerNewsWithHook";
// import SidebarMenu from "./components/SidebarMenu";
// import useClickOutSide from "./hooks/useClickOutSide";
// import HackerNewsWithReducer from "./components/news/HackerNewsWithReducer";

function App() {
  // const timerRef = useRef(null);
  // const [count, setCount] = useState(0);
  // const handleStart = () => {
  //   if (timerRef.current) return;
  //   timerRef.current = setInterval(() => {
  //     setCount((counter) => counter + 1);
  //   }, 1000);
  // };

  // const handleStop = () => {
  //   clearInterval(timerRef.current);
  //   timerRef.current = null;
  // };

  // useEffect(() => {
  //   return () => {
  //     clearInterval(timerRef.current);
  //   };
  // }, []);
  // const [show, setShow] = useState(false);
  // const hanldeShowSideBar = () => {
  //   setShow(false);
  // };
  // const { nodeRef } = useClickOutSide(hanldeShowSideBar);
  return (
    <div>
      {/* <h3>Timer: {count}s</h3>
      <div>
        <button onClick={handleStart}>Start</button>
        <button onClick={handleStop}>Stop</button>
      </div> */}
      {/* <Input></Input> */}
      {/* <button
        onClick={() => setShow(true)}
        className="inline-block m-3 p-3 rounded-lg text-white bg-green-400"
      >
        Show Menu
      </button>
      <SidebarMenu show={show} ref={nodeRef}></SidebarMenu>
      <div className="p-5">
        <Dropdown></Dropdown>
      </div> */}
      {/* <Blog></Blog> */}
      {/* <TextareaAutoResize></TextareaAutoResize> */}
      {/* <Photos></Photos> */}
      {/* <button onClick={() => setShow(!show)}>Toggle Show</button>
      {show && <HackerNews></HackerNews>} */}
      {/* <HackerNewsWithHook></HackerNewsWithHook> */}
      {/* <HackerNewsWithReducer></HackerNewsWithReducer> */}
      {/**Chuong 7 */}
      {/* <Input></Input>
       */}
      {/* <MovieSearchApp></MovieSearchApp>
       */}
      {/* <SignUpForm></SignUpForm> */}
      <SignUpFormV2></SignUpFormV2>
    </div>
  );
}

export default App;
