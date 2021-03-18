import React, { useEffect, useState } from 'react';
import messageApi from "../../utils/api"
import Header from "../Header/Header";
import FormBlock from "../Form/Form";
import CardsList from "../CardsList/CardsList";
import Footer from "../Footer/Footer";
import "./App.css";

export default function App() {

  const [cards, setCards] = useState([
    {
      "messageOwner": {
        "name": "Вася",
        "email": "vasya@mail.ru"
      },
      "message": "Сообщение от Василия Пупкина"
    },
    {
      "messageOwner": {
        "name": "Маруся",
        "email": "marysia@mail.ru"
      },
      "message": "Всем привет, я Маруся"
    }
  ])

  const handleNewMessage = (data) => {
    setCards( state => {
      const newArr = [...state, {
        "messageOwner": {
          "name": data.name,
          "email": data.email
        },
        "message": data.message
      }]

      return newArr
    })
  }

  async function loadMessages() {
    try {
      await messageApi.getMessages()
        .then( cards => setCards(cards) )
    } catch (error) {
      
    }
  }

  function sendMessages(data) {
    messageApi.setNewMessages(data)
      .then( newCards => setCards(newCards) )
  }

  useEffect(() => {
    loadMessages()
  }, [])

  return (
    <div className="App">

      <Header />
      <FormBlock 
        handleNewMessage={handleNewMessage}
        sendMessages={sendMessages}
      />
      <CardsList 
        messagesArr={cards}
      />
      <Footer />

    </div>
  );
}
