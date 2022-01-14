import React, { useState } from "react";
import "./estilo.css";
import deleteSVG from "../../assets/img/delete.svg";
import { Modal, Button, Badge } from "react-bootstrap/";
function CardNota({ title, text, index, deletarNota }) {
  
  function deletar() {
    const id = index;
    deletarNota(id);
    handleClose();
  }

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <section className="card-nota">
      <div className="card-nota_column">
        <Badge pill bg="secondary">
          Categoria
        </Badge>
        <header className="card-nota_cabecalho">
          <h3 className="card-nota_titulo">{title}</h3>
          <img
            className="card-nota_img"
            src={deleteSVG}
            onClick={handleShow}
          ></img>
        </header>
        <p className="card-nota_texto">{text}</p>
      </div>
      <div className="card-nota_options"></div>

      <>
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
      </>
    </section>
  );
}

export default CardNota;
