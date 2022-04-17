import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const About = () => {
  return (
    <>
      <Container style={{ marginTop: "50px" }}>
        <h1>Whoe we are</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae nam explicabo fugit ratione repellendus iusto, iste ullam voluptatibus blanditiis esse.
        </p>
        <h1>Our Speciality</h1>
        <Row>
          <Col md={6}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque in
             
            </p>
          </Col>
          <Col md={6}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laboriosam dignissimos recusandae doloremque mollitia dolorem
              </p>
           
          </Col>
        </Row>
        <Row>
          <h1>Our Cheif</h1>
          <Col md={3}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla
            libero adipisci aliquid veniam. Incidunt sequi nesciunt rerum
            et exercitationem deleniti, sed assumenda minima! Rerum,
            eveniet.
          </Col>
          <Col md={3}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla
            libero adipisci aliquid veniam. Incidunt sequi nesciunt rerum
           
          </Col>
          <Col md={3}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla
            libero adipisci aliquid veniam. Incidunt sequi nesciunt rerum
           
          </Col>
          <Col md={3}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla
            libero adipisci aliquid veniam. Incidunt sequi nesciunt rerum
           
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default About;