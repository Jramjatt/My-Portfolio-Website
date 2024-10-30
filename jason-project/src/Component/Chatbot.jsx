import React, { useState } from 'react';
import './Chatbot.css'; // optional for custom styles

function Chatbot() {
  const [messages, setMessages] = useState([
    { sender: 'bot', text: 'Hello! How can I assist you today?' }
  ]);
  const [input, setInput] = useState('');

  const handleSend = async (e) => {
    e.preventDefault();

    if (input.trim()) {
      // Add user message to chat
      const newMessage = { sender: 'user', text: input };
      setMessages([...messages, newMessage]);
      setInput(''); // Clear input field

      // Simulated AI response
      const botResponse = await getBotResponse(input);
      setMessages((prevMessages) => [
        ...prevMessages,
        newMessage,
        { sender: 'bot', text: botResponse }
      ]);
    }
  };

  const getBotResponse = async (userMessage) => {
    // This is a simple, hardcoded response; replace this with a call to an AI API if needed
    const responses = [
      "That's interesting. Tell me more!",
      "I'm here to help you with any questions.",
      "Could you elaborate on that?",
      "I'm not sure I understand. Can you clarify?"
    ];

    // Simple bot logic (e.g., use APIs here)
    if (userMessage.toLowerCase().includes('hello')) {
      return "Hello! How can I assist you today?";
    } else if (userMessage.toLowerCase().includes('bye')) {
      return "Goodbye! Have a great day!";
    } else {
      return responses[Math.floor(Math.random() * responses.length)];
    }
  };

  return (
    <div className="chatbot-container">
      <div className="chat-window">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`message ${message.sender === 'bot' ? 'bot' : 'user'}`}
          >
            <span>{message.text}</span>
          </div>
        ))}
      </div>
      <form onSubmit={handleSend} className="input-form">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message..."
          className="input-field"
        />
        <button type="submit" className="send-button">Send</button>
      </form>
    </div>
  );
}

export default Chatbot;
