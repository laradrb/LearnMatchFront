import styled from "styled-components";

export const ChatContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 80vh;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #f9f9f9;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

export const MessagesContainer = styled.div`
  flex: 1;
  padding: 16px;
  overflow-y: auto;
  border-bottom: 1px solid #ddd;
`;

export const Message = styled.div`
  background-color: ${(props) => (props.sender === "user" ? "#e0f7fa" : "#ffffff")};
  color: ${(props) => (props.sender === "user" ? "#000000" : "#333333")};
  padding: 10px;
  margin: 5px 0;
  border-radius: 5px;
  align-self: ${(props) => (props.sender === "user" ? "flex-end" : "flex-start")};
  max-width: 60%;
`;

export const MessageInput = styled.input`
  width: calc(100% - 70px);
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  margin: 0;
`;

export const SendButton = styled.button`
  width: 60px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  background-color: #007a8c;
  color: #ffffff;
  font-size: 16px;
  cursor: pointer;
  margin-left: 10px;

  &:hover {
    background-color: #005f6a;
  }
`;

export const EmojiButton = styled.button`
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
  margin-left: 10px;
`;

export const AttachButton = styled.div`
  display: inline-block;
  position: relative;
  margin-left: 10px;

  input[type="file"] {
    display: none;
  }
`;

export const RecordButton = styled.button`
  width: 100px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  background-color: ${(props) => (props.recording ? "#ff5722" : "#007a8c")};
  color: #ffffff;
  font-size: 16px;
  cursor: ${(props) => (props.recording ? "default" : "pointer")};
  margin-left: 10px;

  &:hover {
    background-color: ${(props) => (props.recording ? "#e64a19" : "#005f6a")};
  }
`;

export const Title = styled.h1`
  color: #007a8c;
  font-size: 50px;
  font-family: "Rambla", sans-serif;
  margin-top: 350px;
  text-align: center;
`;