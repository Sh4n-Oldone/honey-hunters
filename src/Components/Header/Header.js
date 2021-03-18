import React from "react";
import logo from "../../images/logo.png";
import { Container, Col, Row, Image } from "react-bootstrap";
import "./Header.css";

export default function Header() {


  return(

    <Container fluid>
      <Row>
        <Col
          xl={{span: 2, offset: 2}} 
          lg={{span: 2, offset: 2}} 
          md={{span: 2, offset: 1}}
          sm={{span: 3, offset: 0}}
        >
          <Image 
            src={logo} 
            className="header__logo" 
          />
        </Col>
      </Row>
    </Container>

  );
}