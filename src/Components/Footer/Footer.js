import React from "react";
import logo from "../../images/logo.png";
import vk from "../../images/vk.png";
import facebook from "../../images/facebook.png";
import { Container, Col, Row, Image } from "react-bootstrap";
import "./Footer.css";

export default function Footer() {


  return (
    <Container fluid>
      <Row>
        <Col
          xl={{span: 2, offset: 2}} 
          lg={{span: 2, offset: 2}} 
          md={{span: 2, offset: 1}}
          sm={{span: 3, offset: 0}}
          xs={{span: 3, offset: 0}}
        >
          <Image 
            src={logo} 
            className="footer__logo" 
          />
        </Col>
        <Col
          className="contact-content debug-border" 
          style={{
            display:"flex", 
            marginTop: "30px", 
            justifyContent: "flex-end"
            
          }}
          xl={6} 
          lg={6} 
          md={8}
          sm={9}
          xs={9}
        >
          <a
            href="https://vk.com/obslyzhivaniesaitov" 
            target="_blank" 
            rel="noreferrer"
          >
            <Image 
              src={vk} 
              className="footer__link" 
            />
          </a>
          <a
            href="https://www.facebook.com/honeyhuntersmanagement/" 
            target="_blank" 
            rel="noreferrer"
          >
            <Image 
              src={facebook} 
              className="footer__link" 
            />
          </a>
        </Col>
      </Row>
    </Container>

  );
}