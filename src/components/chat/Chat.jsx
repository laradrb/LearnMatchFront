import React from "react";
import { ChatContainer } from "./styledChat";
import Keyboard from "../../assets/images/Keyboard.png"; 

const Chat = () => {
  return (
    <ChatContainer>
      <img
        src={Keyboard}
        alt="Keyboard"
        style={{ maxWidth: "100%", marginTop: "400px" }}
      />
    </ChatContainer>
  );
};

export default Chat;
