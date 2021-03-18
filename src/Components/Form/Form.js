import React, { useState, useCallback } from "react";
import icon from "../../images/contact-icon.png";
import { Container, Col, Row, Form, Button, Image } from "react-bootstrap";
import "./Form.css";

export default function FormBlock({handleNewMessage, sendMessages}) {
  const [inputs, setInputs] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = useCallback(
    ({target}) => setInputs(
      state => ({ ...state, [target.name]: target.value }), []
    )
  )

  const handleSubmit = (event) => {
    event.preventDefault();
    handleNewMessage(inputs);
    // sendMessages(inputs); // При реальной апишке здесь было бы отправление данных
    setInputs({
      name: '',
      email: '',
      message: ''
    });
  }

  return (
    <Container fluid>
      <Row>
        <Image 
          src={icon} 
          roundedCircle
        />
      </Row>
      <Row>
        <Col>
          <Form
            onSubmit={handleSubmit}
          >
            <Row 
              className="justify-content-lg-center justify-content-md-center"
            >
              <Col
                lg={4} 
                md={5}
              >
                <Row>
                  <Col>
                    <Form.Group controlId="form__name">
                      <Form.Label>
                        Имя <span className="form__asterisk">&#42;</span>
                      </Form.Label>
                      <Form.Control 
                        type="text" 
                        placeholder="" 
                        size="lg" 
                        name="name" 
                        value={inputs.name || ''}
                        onChange={handleChange}
                        required
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Form.Group controlId="form__email">
                      <Form.Label>
                        E-Mail <span className="form__asterisk">&#42;</span>
                      </Form.Label>
                      <Form.Control 
                        type="email" 
                        placeholder="" 
                        size="lg" 
                        name="email" 
                        value={inputs.email || ''}
                        onChange={handleChange} 
                        required
                      />
                    </Form.Group>
                  </Col>
                </Row>
              </Col>
              <Col
                lg={4} 
                md={5}
              >
                <Form.Group controlId="form__textarea">
                    <Form.Label>
                      Комментарий <span className="form__asterisk">&#42;</span>
                    </Form.Label>
                    <Form.Control 
                      as="textarea" 
                      placeholder="" 
                      size="lg" 
                      name="message" 
                      value={inputs.message || ''}
                      onChange={handleChange} 
                      required
                    />
                  </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col 
                xl={{span: 2, offset: 8}} 
                lg={{span: 2, offset: 8}} 
                md={{span: 2, offset: 9}}
                sm={{span: 3, offset: 9}}
              >
                <Button 
                  as="input" 
                  type="submit" 
                  value="Записать" 
                  size="lg" 
                />{" "}
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}