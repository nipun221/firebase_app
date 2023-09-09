import React from 'react'
import { useState, useRef, useEffect } from 'react'
import './chat.css'
import { db } from '../firebase';
import { collection, addDoc, getDocs } from "firebase/firestore";
import { useRouter } from 'next/navigation';

const Chat = () => {
    const router = useRouter();

    const [chatInput, setChatInput] = useState('');

    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState("");

    const addChat = async () => {
      router.push('/home');
      try {
        const docRef = await addDoc(collection(db, "chat-next"), {
          content: '=> ' + messages.map((message) => message.text),
        });
        console.log("Document written with ID: ", docRef.id);
      } catch (error) {
        console.error(error);
      }
    }

    const formRef = useRef(null);

    const handleKeyUp = (e) => {
      if (e.key === "Enter" && !e.shiftKey) {
          formRef.current.dispatchEvent(
              new Event("submit", { cancelable: true, bubbles: true })
          );
      }
    };

    const sendMessage = async (event) => {
      event.preventDefault();

      if (input.trim() === "") return;

      setMessages([...messages, { isUser: true, text: input.trim() }]);
      setInput("");

      try {
        const response = await fetch("http://localhost:3001/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ message: input }),
        });

        const data = await response.json();
        const aiMessage = data.message || "Sorry, I don't understand";

        setMessages((previousMessages) => [
          ...previousMessages,
          { isUser: false, text: aiMessage },
        ]);
      } catch (error) {
        console.error("Error fetching ai response");
      }
    }

  return (
    <div className=''>
      <div className='chat-header'>
        <h1 className='text-3xl font-bold text-center font-mono'>Hey, my name is Kundu! I am your friendly neighbourhood Chatbot</h1>
      </div>
      <div id='chat-body' className='align-center justify-between p-20'>
        {messages.map((message, index) => (
          <div key={index} className={`chat-message ${message.isUser ? "user-message" : "ai-message"}`}>
            <div className='message-user-identification'>
              <p>
                {""}
                <span>&#x1F7E2;</span>
                {message.isUser ? "You" : "Kundu"}
              </p>
            </div>
            <a type='text' onChange={(e) => setChatInput(e.target.value)}>{message.text}</a>
          </div>
        ))}
      </div>
      <form onSubmit={sendMessage} ref={formRef} className='pl-40'>
        <div className='lg:max-w-[70%] w-full flex items-center max-sm:flex-col gap-5 p-5 sm:border sm:border-slate-gray rounded-full'>
        <textarea 
          className='block p-1 gap-5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
          type="text" 
          value={input} 
          placeholder='type your prompt here' 
          onKeyUp={(e) => handleKeyUp(e)} 
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit" className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded'>Enter</button>
        <button onClick={addChat} className='flex flex-end bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded'>Save</button>
        </div>
      </form>
    </div>
  )
}

export default Chat