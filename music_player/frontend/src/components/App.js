import React, { Component } from "react";
import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateRoom from "./CreateRoom";
import Home from "./Home";
import JoinRoom from "./JoinRoom";
import Room from "./Room";

export default function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<CreateRoom />} />
          <Route path="join" element={<JoinRoom />} />
          <Route path="room" element={<Room />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

const appDiv = document.getElementById("app");
render(<App />, appDiv);
