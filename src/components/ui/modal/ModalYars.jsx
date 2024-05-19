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
          <Modal.Title>Post creating</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group
              className="mb-3"
              controlId="ModalYarsForm.ControlInput1"
            >
              <Form.Label>Title</Form.Label>
              <Form.Control
                ref={inputFieldRef.inputTitleRef}
                type="text"
                placeholder="Post title"
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="ModalYarsForm.ControlInput1"
            >
              <Form.Label>Description</Form.Label>
              <Form.Control
                ref={inputFieldRef.inputDescrRef}
                type="text"
                placeholder="Post description"
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
                placeholder="Image URL"
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="ModalYarsForm.ControlInput1"
            >
              <Form.Label>Price</Form.Label>
              <Form.Control
                ref={inputFieldRef.inputPriceRef}
                type="text"
                placeholder="Price"
                autoFocus
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          {/* TODO[ashushkin] fix this block, need add handleClose! */}
          <ButtonYars variant="primary" onClick={createPost}>
            Apply
          </ButtonYars>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalYars;
