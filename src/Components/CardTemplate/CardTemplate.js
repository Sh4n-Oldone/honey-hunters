import React from "react";
import { Card } from "react-bootstrap";
import "./CardTemplate.css";

export default function CardTemplate({messageOwner, message, index}) {

  return(

        <Card 
          style={{ 
            width: "200px", 
            margin: "20px", 
            borderRadius: "0"
          }}
        >
          <Card.Header
            style={{
              textAlign: "center",
              backgroundColor: index%2===1 ? "#58ad52" : "#4b596c",
              fontSize: "18px",
              color: "#fff",
              fontWeight: "600"
            }}
          >
            {messageOwner.name}
          </Card.Header>
          <Card.Body
            style={{
              textAlign: "center",
              backgroundColor: index%2===1 ? "#deebde" : "#e9eef3",
              minHeight: "190px"
            }}
          
          >
            <Card.Title
              style={{
                color: index%2===1 ? "#58ad52" : "#6d737b",
                marginTop: "5px",
                marginBottom: "25px",
                fontSize: "19px",
                fontWeight: "700"
              }}
            >
              {messageOwner.email}
            </Card.Title>
            <Card.Text
              style={{
                color: index%2===1 ? "#768275" : "#767582",
                lineHeight: "1.05",
                fontWeight: "600",
                fontSize: "19px"
              }}
            >
              {message}
            </Card.Text>
          </Card.Body>
        </Card>

  );
}