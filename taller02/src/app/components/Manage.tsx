import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import { VEHICLE_ARRAY } from "../mocks/vehicle-mock";
import { Brand } from "../models/Brand";
import { Vehicle } from "../models/Vehicle";
import { BRAND_ARRAY } from "../utilities/domains/BrandVehicle";

export const Manage = () => {
  const [objBrand] = useState<Brand[]>(BRAND_ARRAY);

  const [arrVehicle] = useState<Vehicle[]>(VEHICLE_ARRAY);
  const [modalShow, setModalShow] = useState<boolean>(false);
  const [objVehicle, setObjVehicle] = useState<Vehicle>(
    new Vehicle(0, "", "", "", "", "")
  );

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const deleteVehicle = (code: number) => {
    const limit = arrVehicle.length;
    for (let i = 0; i < limit; i++) {
      if (arrVehicle[i] !== undefined) {
        const compare = arrVehicle[i]._id;
        if (compare == code) arrVehicle.splice(i, 1);
      }
    }
  };

  const listBrand = (brand: string) => {
    var brandint = parseInt(brand);
    var nameBrand;
    objBrand.forEach((myBrand: Brand) => {
      if (myBrand.brandId === brandint) {
        nameBrand = myBrand.brandName;
      } else {
        return "Error";
      }
    });
    return nameBrand;
  };

  return (
    <div>
      <div>
        <div className="container-fluid">
          <div className="bd-example">
            <table className="table table-light table-hover table-sm table-borderless">
              <thead className="table-light">
                <tr>
                  <th style={{ width: "10%" }}>id</th>
                  <th className="text-start" style={{ width: "20%" }}>
                    Model
                  </th>
                  <th className="text-start" style={{ width: "20%" }}>
                    Plate
                  </th>
                  <th className="text-start" style={{ width: "20%" }}>
                    Brand
                  </th>
                  <th className="text-start" style={{ width: "20%" }}>
                    Photo Name
                  </th>
                  <th style={{ width: "10%" }}>Options</th>
                </tr>
              </thead>
              <tbody>
                {arrVehicle.map((myVec: Vehicle, indx: number) => (
                  <tr key={myVec._id}>
                    <th>{myVec._id}</th>
                    <td className="text-start"> {myVec._model}</td>
                    <td className="text-start">{myVec._plate}</td>
                    <td className="text-start">{listBrand(myVec._brand)}</td>
                    <td className="text-start">{myVec._photoName}</td>
                    <td>
                      <a
                        href="/#"
                        onClick={(e) => {
                          e.preventDefault();
                          setShow(true);
                          setObjVehicle(myVec);
                        }}
                      >
                        <i className="fa-solid fa-trash-can red"></i>{" "}
                      </a>
                      <a href="">
                        <Link to={`/update/${myVec._id}`}>
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
                <Modal.Title>Delete</Modal.Title>
              </Modal.Header>
              <Modal.Body className="modal-h text-bg-dark">
                Are you sure? <br />
                <strong>
                  {objVehicle._model} {objVehicle._plate}{" "}
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
                    deleteVehicle(objVehicle._id);
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
