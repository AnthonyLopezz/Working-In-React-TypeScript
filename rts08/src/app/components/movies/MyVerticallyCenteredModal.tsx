import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { MOVIE_ARRAY } from "../../mocks/team-mock";

export const MyVerticallyCenteredModal = (props: any) => {
    
    const cod = Number(props.obj.Id);
    const myMov = MOVIE_ARRAY.find((movie)=> {
        return movie.Id === cod;
    })

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton >
      <Modal.Title>{myMov?.name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="d-flex justify-content-center">
            <img src={myMov?.photo} alt="" className="adjust" />
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};
