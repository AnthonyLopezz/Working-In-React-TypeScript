import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { EXAMPLE_ARRAY } from "../../mocks/E-Mock";

export const MyVerticallyCenteredModal = (props: any) => {
    
    const cod = Number(props.obj._id);
    const myE = EXAMPLE_ARRAY.find((example)=> {
        return example._id === cod;
    })

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton >
      <Modal.Title>{myE?._name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="d-flex justify-content-center">
            <img src={myE?._photoBs64} alt="" className="adjust" />
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};
