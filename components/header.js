import React from "react";
import Image from "next/image";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import styles from "../styles/header.module.css";
// import Heroimg from '../public/hero2.png'
// const { heroContent, heroWrapper, imageWrapper } = styles;

export default function header() {
  return (
    <>
      <Navbar expand="lg" className={styles.navbg}>
        <Container>
          <Navbar.Brand href="#home">
            <img
              src="/FG LOGO_White 1.svg"
              width="30"
              height="30"
              className="d-inline-block align-top logo"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className={styles.navSearch}>
            <Nav className="me-auto">
              <NavDropdown title="Home" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Home</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Our Products" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">
                  Our Products
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Form className="d-flex align-items-center ">
              <Form.Control
                type="search"
                placeholder="Search"
                className="m-2 p-4"
                aria-label="Search"
              />
              <Button className="login px-3 py-2">Login</Button>{" "}
              <Button className="signup px-3 py-2">Signup</Button>{" "}
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div className={styles.heroWrapper}>
        <div className={styles.imageWrapper}>
          <Image
            priority
            src="/Mask group.svg"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            alt="hero image example"
          />
        </div>

        <div className={styles.heroContent}>
          <h1 class="mb-3 hero-h1">
            FINTRACT <br />
            GLOBAL
          </h1>
          <p class="mb-3 hero-h6">INSPIRE INNOVATION</p>
          <p class="mb-3 hero-p">
            Fintract Global takes your privacy very seriously. We may process
            your personal information for carefully considered and specific
            purpose which are in our interests and enable us to enhance the
            service we provide.
          </p>
        </div>
      </div>
    </>
  );
}
