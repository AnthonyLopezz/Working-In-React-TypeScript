import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import { EXAMPLE_ARRAY } from "../mocks/E-Mock";
import { Example } from "../models/E";
import { Interface } from "../models/I";
import { E_ARRAY } from "../utilities/domains/EDomain";

export const Manage = () => {
  const [arrE] = useState<Example[]>(EXAMPLE_ARRAY);
  const [objE, setObjE] = useState<Example>(new Example(0, "", "", "", ""));

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const [objOp] = useState<Interface[]>(E_ARRAY);

  const listOption = (op: string) => {
    var opInt = parseInt(op);
    var nameOp;
    objOp.forEach((myOp: Interface) => {
      if (myOp.interfaceId === opInt) {
        nameOp = myOp.interfaceName;
      } else {
        return "Error";
      }
    });
    return nameOp;
  };


  const dlete = (code: number) => {
    const limit = arrE.length;
    for (let i = 0; i < limit; i++) {
      if (arrE[i] !== undefined) {
        const compare = arrE[i]._id;
        if (compare === code) arrE.splice(i, 1);
      }
    }
  };

  return (
    <div className="d-flex h-100 text-center text-bg-dark bodyP">
      <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
        <div className="col-md-8 mt-4">
          <div className="bd-example">
            <table className="table table-dark table-hover table-sm table-borderless">
              <thead className="table-dark">
                <tr>
                  <th style={{ width: "10%" }}>id</th>
                  <th className="text-start" style={{ width: "40%" }}>
                    Title
                  </th>
                  <th className="text-start" style={{ width: "20%" }}>
                    Title
                  </th>
                  <th className="text-start" style={{ width: "20%" }}>
                    Photo Name
                  </th>
                  <th style={{ width: "10%" }}>Options</th>
                </tr>
              </thead>
              <tbody>
                {arrE.map((myE: Example, indx: number) => (
                  <tr key={myE._id}>
                    <th>{myE._id}</th>
                    <td className="text-start"> {myE._name}</td>
                    <td className="text-start"> {myE._photoName}</td>
                    <td className="text-start">{listOption(myE._interface)}</td>
                    <td>
                    <a
                        href="/#"
                        onClick={(e) => {
                          e.preventDefault();
                          setShow(true);
                          setObjE(myE);
                        }}
                      >
                        <i className="fa-solid fa-trash-can red"></i>{" "}
                      </a>
                      <a href="">
                        <Link to={`/update/${myE._id}`}>
                          <i className="fa-solid fa-edit"></i>{" "}
                        </Link>
                      </a>
                      <i className="fa-solid fa-rotate"></i>{" "}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <Modal
              show={show}
              onHide={handleClose}
              backdrop="static"
              keyboard={false}
            >
              <Modal.Header closeButton className="modal-h text-bg-dark">
                <Modal.Title>Delete Vehicle</Modal.Title>
              </Modal.Header>
              <Modal.Body className="modal-h text-bg-dark">
                Are you sure? <br />
                <strong>
                  {objE._name} {" "}
                </strong>
              </Modal.Body>
              <Modal.Footer className="modal-h text-bg-dark">
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                <Button
                  variant="btn btn-danger"
                  onClick={(e) => {
                    e.preventDefault();
                    dlete(objE._id);
                    setShow(false);
                  }}
                >
                  Delete
                </Button>
              </Modal.Footer>
            </Modal>
          </div>
        </div>
      </div>
    </div>
  );
};
