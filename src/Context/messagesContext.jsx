import { createContext, useState } from "react";

export const messagesContext = createContext();

export const MessagesProvider = ({ children }) => {
  const [messages, setMessages] = useState([
    { id: 1, name: "Sara", email: "sara@gmail.com", message: "Hello, I love your products!" }
  ]);

  const addMessage = (msgData) => {
    setMessages([...messages, { ...msgData, id: Date.now() }]);
  };

  const deleteMessage = (id) => {
    setMessages(messages.filter((m) => m.id !== id));
  };

  return (
    <messagesContext.Provider value={{ messages, addMessage, deleteMessage }}>
      {children}
    </messagesContext.Provider>
  );
};