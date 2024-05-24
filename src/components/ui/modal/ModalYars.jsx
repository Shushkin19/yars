import React from "react";
import Button from "react-bootstrap/Button";
import ButtonYars from "../button/ButtonYars";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

function ModalYars({ show, setShow, inputFieldRef, createPost }) {
  const handleClose = () => setShow(false);

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Добавить объявление</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group
              className="mb-3"
              controlId="ModalYarsForm.ControlInput1"
            >
              <Form.Label>Название</Form.Label>
              <Form.Control
                ref={inputFieldRef.inputTitleRef}
                type="text"
                placeholder="Названиеe"
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="ModalYarsForm.ControlInput1"
            >
              <Form.Label>Описание</Form.Label>
              <Form.Control
                ref={inputFieldRef.inputDescrRef}
                type="text"
                placeholder="Описание объявления"
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="ModalYarsForm.ControlInput1"
            >
              <Form.Label>URL</Form.Label>
              <Form.Control
                ref={inputFieldRef.inputImageRef}
                type="text"
                placeholder="URL изображения"
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="ModalYarsForm.ControlInput1"
            >
              <Form.Label>Цена</Form.Label>
              <Form.Control
                ref={inputFieldRef.inputPriceRef}
                type="text"
                placeholder="Цена"
                autoFocus
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Закрыть
          </Button>
          {/* TODO[ashushkin] fix this block, need add handleClose! */}
          <ButtonYars variant="primary" onClick={createPost}>
            Применить
          </ButtonYars>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalYars;
