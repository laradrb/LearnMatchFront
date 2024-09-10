import React, { useState } from "react";
import { ChatContainer, MessagesContainer, MessageInput, SendButton, Message, AttachButton, EmojiButton, RecordButton } from "./styledChat";

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [attachedFile, setAttachedFile] = useState(null);
  const [recording, setRecording] = useState(false);
  const [audioBlob, setAudioBlob] = useState(null);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (newMessage.trim() || attachedFile || audioBlob) {
      const message = { text: newMessage, file: attachedFile, audio: audioBlob, sender: "user" };
      setMessages([...messages, message]);
      setNewMessage("");
      setAttachedFile(null);
      setAudioBlob(null);
      // Simulación de respuesta del "sistema"
      setTimeout(() => {
        setMessages([...messages, message, { text: "Received: " + newMessage, sender: "system" }]);
      }, 1000);
    }
  };

  const handleEmojiSelect = (emoji) => {
    setNewMessage(newMessage + emoji.native);
    setShowEmojiPicker(false);
  };

  const handleFileChange = (e) => {
    if (e.target.files[0]) {
      setAttachedFile(e.target.files[0]);
    }
  };

  const handleRecordStart = () => {
    setRecording(true);
    // Initialize recording logic here
  };

  const handleRecordStop = () => {
    setRecording(false);
    // Finalize recording logic here and set `audioBlob`
  };

  return (
    <ChatContainer>
      <MessagesContainer>
        {messages.map((msg, index) => (
          <Message key={index} sender={msg.sender}>
            {msg.text}
            {msg.file && <a href={URL.createObjectURL(msg.file)} download={msg.file.name}>Download File</a>}
            {msg.audio && <audio controls src={URL.createObjectURL(msg.audio)} />}
          </Message>
        ))}
      </MessagesContainer>
      <form onSubmit={handleSendMessage}>
        <MessageInput
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Type a message..."
        />
        <EmojiButton onClick={() => setShowEmojiPicker(!showEmojiPicker)}>😀</EmojiButton>
        {showEmojiPicker && <EmojiPicker onSelect={handleEmojiSelect} />}
        <AttachButton>
          <input type="file" accept="*/*" onChange={handleFileChange} />
        </AttachButton>
        <RecordButton onMouseDown={handleRecordStart} onMouseUp={handleRecordStop} recording={recording}>
          {recording ? "Recording..." : "Record"}
        </RecordButton>
        <SendButton type="submit">Send</SendButton>
      </form>
    </ChatContainer>
  );
};

export default Chat;