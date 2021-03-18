import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CardTemplate from "../CardTemplate/CardTemplate";
import "./CardsList.css";

export default function CardsList({messagesArr}) {
  return(
    <Container 
      fluid
      style={{
        backgroundColor: "#f6f6f7",
        display: "flex", 
        flexDirection: "column",
        justifyContent: "center",
        padding: "0 20% 40px"
      }}
    >
      <Row>
        <Col
          style={{
            display: "flex",
            justifyContent: "center"
          }}
        >
          <p className="cards-list__title">Выводим комментарии</p>
        </Col>
      </Row>
      <Row>
        <Col 
          style={{ 
            display: "flex", 
            flexWrap: "wrap", 
            flexDirection: "row",
            justifyContent: "start"
          }}
        >
          {React.Children.toArray(messagesArr.map((item, index) => 
            <CardTemplate
              {...item}
              index={index}
            />
          ))}
        </Col>
      </Row>
    </Container>
  );
}