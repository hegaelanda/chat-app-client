import React from "react";
import BubbleChat from "../components/bubbleChat";
import "../assets/index.css";

function App() {
  return (
    <div className="container mx-auto flex justify-center">
      <div className="columns-3 w-full">
        <BubbleChat />
        <BubbleChat />
        <BubbleChat />
      </div>
    </div>
  );
}

export default App;
