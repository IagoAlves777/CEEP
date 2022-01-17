import React, { useState } from "react";
import "./estilo.css";
import deleteSVG from "../../assets/img/delete.svg";
import { Modal, Button, Badge, Card } from "react-bootstrap/";
function CardNota({ title, text, index, deletarNota, categoria }) {
  function deletar() {
    const id = index;
    deletarNota(id);
    handleClose();
  }

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="card-nota">
      <Card style={{ width: "18rem" }}>
        <div className="header-nota">
          <Badge pill bg="secondary">
            {categoria}
          </Badge>
          <img
            className="card-nota_img"
            src={deleteSVG}
            onClick={handleShow}
          ></img>
        </div>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{text}</Card.Text>
        </Card.Body>
      </Card>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Desenha Excluir a nota?</Modal.Title>
        </Modal.Header>
        <Modal.Body>As notas excluidas não podem ser recuperadas</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Não
          </Button>
          <Button variant="outline-dark" onClick={deletar}>
            Sim
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default CardNota;
