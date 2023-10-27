import React from 'react';
import './App.css';
import { PrettyChatWindow } from 'react-chat-engine-pretty';
import { MultiChatSocket, MultiChatWindow, useMultiChatLogic } from 'react-chat-engine-advanced';
function Chats(props) {
  const chatProps = useMultiChatLogic('3e9dff2b-32fc-4b40-a9b1-0b27235b8f87', props.user.username, props.user.secret)
  return (
    <div style={{ height: "100vh" }}>
      <MultiChatSocket {...chatProps} />
      <PrettyChatWindow
        {...chatProps}
      />
    </div>
  )
}
export default Chats;