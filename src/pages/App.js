import React, { useState, useEffect } from "react";
import BubbleChat from "../components/bubbleChat";
import "../assets/index.css";
import io from "socket.io-client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser, faPaperPlane } from "@fortawesome/free-regular-svg-icons";

// const socket = io.connect("http://localhost:9000");

function App() {
  // const onSendMessage = () => {
  //   // socket.emit("send_message", { message: pesan });
  //   console.log(pesan);
  //   fetch("http://localhost:9000/chat/send", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       message: pesan,
  //       sender: pesan,
  //       room: pesan,
  //     }),
  //   });
  // };

  // useEffect(() => {
  //   socket.on("receive_message", (data) => {
  //     console.log("from socket", data);
  //     setMessage((prev) => [
  //       ...prev,
  //       {
  //         message: data.message,
  //       },
  //     ]);
  //   });

  //   socket.on("receive_counter", (data) => {
  //     console.log(data.number);
  //     setCounter(data.number);
  //   });

  //   // Remove event listener on component unmount
  //   return () => {
  //     socket.off("receive_message");
  //     socket.off("receive_counter");
  //   };
  // }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitted");
  };

  return (
    <div className="grid grid-cols-4 h-screen">
      <div className="bg-grey-background border-r-4 border-r-grey-border">
        <div className="flex justify-center items-center h-36">
          <img src="/logo.png" alt="logo" />
        </div>
        <div className="flex justify-center font-open-sans px-10">
          <ul className="w-full">
            <li className="bg-red-active text-white font-bold py-2 pl-8 rounded-xl">Dashboard</li>
            <li className="py-2 pl-8">Konsultasi</li>
            <li className="py-2 pl-8">Profil Psikolog</li>
          </ul>
        </div>
      </div>
      <div className="col-span-3 flex justify-center items-center">
        <div className="w-11/12">
          <div className="bg-red-active text-white font-bold py-4 pl-8 rounded-xl">
            <FontAwesomeIcon icon={faCircleUser} size="2xl" className="pr-2" />
            <span className="font-normal text-lg">Dr. Username, A.Md.Kom</span>
          </div>
          <div className="bg-grey-background h-[70vh] overflow-scroll">
            <div className="flex justify-start">
              <div className="bg-yellow-bubble rounded-xl max-w-[50%] m-5 px-4 pt-4 pb-2 relative before:w-0 before:h-0 before:border-l-transparent before:border-r-transparent before:border-t-transparent before:border-b-yellow-bubble before:border-[10px] before:absolute before:left-[-10px] before:bottom-0">
                <p>
                  udin sed tempor at, tristique id lacus. Duis aliquam ante libero, nec convallis purus dignissim eu. Phasellus nec consectetur erat, eu gravida metus. Phasellus ultrices turpis libero, bibendum
                  posuere dolor scelerisque nec. Donec cursus, felis convallis tristique dapibus, libero eros pulvinar nunc, id varius mauris eros se
                </p>
                <small className="block mt-2 text-right font-bold text-xxs">10:32</small>
              </div>
            </div>
            <div className="flex justify-end">
              <div className="bg-grey-bubble rounded-xl max-w-[50%] m-5 px-4 pt-4 pb-2 relative before:w-0 after:h-0 after:border-l-transparent after:border-r-transparent after:border-t-transparent after:border-b-grey-bubble after:border-[10px] after:absolute after:right-[-10px] after:bottom-0">
                <p>LOREM IPSUM DOLOR SET AMET AWAODIJAWOID JAasdsadadadadasdadadasdsadadasdasd</p>
                <small className="block mt-2 text-left font-bold text-xxs">10:32</small>
              </div>
            </div>
          </div>
          <div className="bg-red-active text-white font-bold py-4 rounded-xl">
            <form className="flex mx-4" onSubmit={(e) => handleSubmit(e)}>
              <input type="text" placeholder="Typing Here..." className="rounded text-grey-text bg-grey-input font-normal grow focus:outline-none mr-2 p-2" />
              <button type="submit">
                <svg style={{ fill: "white" }} xmlns="http://www.w3.org/2000/svg" height="36px" viewBox="0 0 24 24" width="36px" fill="#000000">
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                </svg>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
