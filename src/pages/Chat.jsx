import React from "react";
import NavBar from "../components/navBar/NavBar";
import InfoBar from "../components/infoBar/InfoBar";
import Chat from "../components/chat/Chat";

const ChatPage = () => {
  return (
    <>
      <InfoBar />
      <Chat />
      <NavBar />
    </>
  );
};

export default ChatPage;