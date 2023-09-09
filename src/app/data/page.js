"use client"
import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import { UserAuthContextProvider } from '../contexts/UserAuth'
import { collection, getDocs } from "firebase/firestore";
import { db } from '../firebase';

const Data = () => {
  const [chats, setChats] = useState([]);

  useEffect(() => {
    fetchChat();
  }, [])

  const fetchChat = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "chat-next"));
      let data =[];
      querySnapshot.forEach((doc) => {
        console.log(doc.id, " => ", doc.data());
        data.push({...doc.data(), id: doc.id});
      });
      setChats(data);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <UserAuthContextProvider>
        <Navbar/>
        <h1 className='text-3xl font-bold text-center font-mono'>This data is being redirected from Firebase</h1>
        <div className='p-10'>
          {chats.map((chat) => (
            <div key={chat.id}>
              <ul className='list-disc'>
                <li>{chat.content}</li>
              </ul>
            </div>
          ))}
        </div>
    </UserAuthContextProvider>
  )
}

export default Data