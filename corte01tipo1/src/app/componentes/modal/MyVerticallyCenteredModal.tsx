import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { ARREGLO_CAMISA } from "../../mocks/camisetas-mock";
import { CamisaMarca } from "../../modelos/camisamarca";
import { ARREGLO_CAMISA_MARCA } from "../../utilidades/dominios/dommarca";

export const MyVerticallyCenteredModal = (props: any) => {
  const [objMarca] = useState<CamisaMarca[]>(ARREGLO_CAMISA_MARCA);

  const cod = Number(props.obj.codCamisa);
  const myCamisa = ARREGLO_CAMISA.find((camisa) => {
    return camisa.codCamisa === cod;
  });

  const listMarca = (op: string) => {
    var marcaInt = parseInt(op);
    var nameOp;
    objMarca.forEach((myMarca: CamisaMarca) => {
      if (myMarca.codigoMarca === marcaInt) {
        nameOp = myMarca.nombreMarca;
      } else {
        return "Error";
      }
    });
    return nameOp;
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title>Camisa Imagen</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="d-flex justify-content-center">
          <img src={myCamisa?.base64ImagenCamisa} alt="" className="adjust" />
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};
