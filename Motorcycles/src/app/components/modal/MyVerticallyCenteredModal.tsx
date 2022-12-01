import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { VEHICLE_ARRAY } from "../../mocks/vehicle-mock";

export const MyVerticallyCenteredModal = (props: any) => {
    
    const cod = Number(props.obj._id);
    const myVec = VEHICLE_ARRAY.find((vehicle)=> {
        return vehicle._id === cod;
    })

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton >
      <Modal.Title>{myVec?._model}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="d-flex justify-content-center">
            <img src={myVec?._photoB64} alt="" className="adjust" />
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};
