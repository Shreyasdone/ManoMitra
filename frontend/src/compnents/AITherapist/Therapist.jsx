// Therapist.jsx

import React, { useState, useEffect, useRef } from 'react';
import { GoogleGenerativeAI } from '@google/generative-ai';
import Loader from 'react-js-loader';
import Navbar from '../navbar/Navbar';
import ReactMarkdown from 'react-markdown';
import './Therapist.css';

const API_KEY = process.env.REACT_APP_API_KEY;
const genAI = new GoogleGenerativeAI(API_KEY);

const TypingAnimation = ({ color }) => (
  <div className="item text-2xl">
    <Loader type="ping-cube" bgColor={color} color={color} size={100} />
  </div>
);

const Therapist = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const chatBoxRef = useRef(null);

  const handleSend = async () => {
    if (!input.trim()) return;

    const newMessage = { sender: 'user', text: input };
    setMessages(msgs => [...msgs, newMessage]);
    setInput('');
    setLoading(true);

    try {
      const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });
      const prompt = `Analyse the user's input and give suggestions or talk with them and provide an answer in paragraphs with spaces between paragraphs and points. Respond as if you are talking to the user in the first person, not the third person:\n\nUser: ${input}\nTherapist:`;
      const result = await model.generateContent(prompt);
      const response = await result.response;
      const aiText = await response.text();

      // Simulate typing delay
      await new Promise(resolve => setTimeout(resolve, 1000));

      setMessages(msgs => [...msgs, { sender: 'ai', text: aiText }]);
    } catch (error) {
      console.error('Error generating response:', error);
      setMessages(msgs => [...msgs, { sender: 'ai', text: 'An error occurred while generating the response.' }]);
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = e => setInput(e.target.value);
  const handleKeyPress = e => { if (e.key === 'Enter') handleSend(); };

  useEffect(() => {
    if (chatBoxRef.current) {
      chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <>
      <Navbar />
      <div className="therapist-container">
        <h1 className="heading">Your Personal AI Assistant</h1>
        <div ref={chatBoxRef} className="chat-box">
          {messages.map((msg, i) => (
            <div key={i} className={`message ${msg.sender === 'user' ? 'user-message' : 'ai-message'}`}>
              {msg.sender === 'ai' ? (
                <div className="markdown-content">
                  <ReactMarkdown>
                    {msg.text}
                  </ReactMarkdown>
                </div>
              ) : (
                <p>{msg.text}</p>
              )}
            </div>
          ))}
          {loading && <TypingAnimation color="#007BFF" />}
        </div>
        <div className="input-container">
          <input
            type="text"
            value={input}
            onChange={handleInputChange}
            onKeyPress={handleKeyPress}
            placeholder="Type your message..."
            className="input-field"
          />
          <button onClick={handleSend} className="send-button">Send</button>
        </div>
      </div>
    </>
  );
};

export default Therapist;