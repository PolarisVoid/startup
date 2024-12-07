import React, { useState, useEffect } from 'react';
import { ChatNotifier } from './ChatBroadCasting';
import './Chat.css';

function Chat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');

  // Toggle chat window
  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    ChatNotifier.addHandler(handleGameEvent);
  });

  function handleGameEvent(message) {
    setMessages([...messages, message]);
  }

  async function sendMessage() {
    if (!inputValue) return;
    ChatNotifier.broadcastEvent('User', {message: inputValue});
    setInputValue('');
  }

  function createMessageArray() {
    const messageArray = [];
    for (const [i, message] of messages.entries()) {
      let event = 'unknown';
      if (message.type === 'message') {
        event = message.value.message;
      }
      else if (event === 'unknown') {
        continue;
      }

      messageArray.push(
        <div className="chat-message" key={i}>
          <div className="chat-message-header">
            <span className="chat-message-name">{message.from.split('@')[0]}</span>
          </div>
          <div className="chat-message-content">
            <p>{event}</p>
          </div>
        </div>
      );
    }
    return messageArray;
  }

  return (
    <div className="chat-wrapper">
      <button className="chat-button" onClick={toggleChat}>
        {isOpen ? 'Close Chat' : 'Chat with us'}
      </button>

      {isOpen && (
        <div className="chat-container">
          <div className="chat-header">
            <h2>Chat with us</h2>
          </div>
          <div className="chat-body">
            {createMessageArray()}

          </div>
          <div className="chat-footer">
            <input
              type="text"
              placeholder="Type a message..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
            />
            <button onClick={() => sendMessage()}>Send</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Chat;
