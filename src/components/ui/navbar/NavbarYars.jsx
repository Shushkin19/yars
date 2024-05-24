import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "../navbar/NavbarYars.module.css"

import ModalYars from "../modal/ModalYars";

function NavbarYars({ inputFieldRef, createPost }) {
  const [visible, setVisible] = useState(false);

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <ModalYars
        show={visible}
        setShow={setVisible}
        inputFieldRef={inputFieldRef}
        createPost={createPost}
      />
      <Container fluid>
        <Navbar.Brand href="#">YARS Cars store</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="#">Каталог</Nav.Link>
            <Nav.Link onClick={() => setVisible(true)}>Добавить объявление</Nav.Link>
            <NavDropdown title="Связаться с нами" id="navbarScrollingDropdown">
              <NavDropdown.Item href="https://github.com/yyyyyliaa">yyyyyliaas GitHub</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item>
                Адрес: Большая Морская ул., 67, Санкт-Петербург
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Найти автомобиль"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Поиск</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarYars;
