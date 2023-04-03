import React, { useState } from "react";
import { Modal, Form, Button } from "react-bootstrap";

export const UserInfoModal = (props) => {
  const [name, setName] = useState("");
  const [photo, setPhoto] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // отправить данные на сервер
    // закрыть модальное окно
  };

  const handleClose = () => {
    // закрыть модальное окно
  };

  const handleEscape = (event) => {
    if (event.keyCode === 27) {
      // закрыть модальное окно
    }
  };

  return (
    <Modal show={props.show} onHide={handleClose} onKeyDown={handleEscape}>
      <Modal.Header closeButton>
        <Modal.Title>User Info</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label>Profile Photo</Form.Label>
            <Form.Control type="file" value={photo} onChange={(event) => setPhoto(event.target.value)} />
          </Form.Group>
          <Form.Group>
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" value={name} onChange={(event) => setName(event.target.value)} />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
}