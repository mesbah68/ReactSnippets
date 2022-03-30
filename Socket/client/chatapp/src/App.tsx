import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import ChatWrapper from "./Component/Pages/Chat/ChatWrapper";

import "antd/dist/antd.css";

function App() {
  return (
          <Router>
              <Routes>
                <Route path="/" element={<ChatWrapper chatRoomTitle="General Chat" />} />
                <Route path="/share-Ukhtae" element={<ChatWrapper chatRoomTitle="General Chat" />} />
                <Route path="/general-Chat" element={<ChatWrapper chatRoomTitle="General Chat" />} />
                <Route path="/gibahin-Dribbble" element={<ChatWrapper chatRoomTitle="General Chat" />} />
                <Route path="/share-Shot" element={<ChatWrapper chatRoomTitle="General Chat" />} />
                <Route path="/introducing" element={<ChatWrapper chatRoomTitle="General Chat" />} />
                <Route path="/Podchess" element={<ChatWrapper chatRoomTitle="General Chat" />} />
                <Route path="/Design-Terus" element={<ChatWrapper chatRoomTitle="General Chat" />} />
                <Route path="/Bincang-Caem" element={<ChatWrapper chatRoomTitle="General Chat" />} />
              </Routes>
          </Router>
      )
}

export default App;
