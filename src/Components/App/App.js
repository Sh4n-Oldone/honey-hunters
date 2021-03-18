import React, { useState } from 'react';
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
  return (
    <div className="App">

      <Header />
      <FormBlock 
        handleNewMessage={handleNewMessage}
      />
      <CardsList 
        messagesArr={cards}
      />
      <Footer />

    </div>
  );
}
