import { Form } from "react-bootstrap";
import { useEffect, useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";

import { Brand } from "../models/Brand";
import { BRAND_ARRAY } from "../utilities/domains/BrandVehicle";

import noimage from "../../assets/img/noimage.png";

import { useForm } from "../utilities/hooks/useForm";
import { Vehicle } from "../models/Vehicle";
import { ConvBs64 } from "../utilities/functions/ConvBs64";
import { VEHICLE_ARRAY } from "../mocks/vehicle-mock";

export const Update = () => {
  //Get Parameter and get the respective object

  let { code } = useParams();
  const selectVehicle = VEHICLE_ARRAY.find((vehi) => {
    return vehi._id === Number(code);
  });

  //*********************************************

  type formHTML = React.FormEvent<HTMLFormElement>;

  const [arrBrand] = useState<Brand[]>(BRAND_ARRAY);
  const [minImage, setMinImage] = useState(noimage);
  const [inProgress, setInProgress] = useState<boolean>(false);

  const [arrVehicles] = useState<Vehicle[]>(VEHICLE_ARRAY);
  const [imgBs64, setImgBs64] = useState<string>("");
  const navigate = useNavigate();

  // Sent Form

  const updateVehicle = () => {
    const limit = arrVehicles.length;
    for (let i = 0; i < limit; i++) {
      const compare = arrVehicles[i]._id;
      if (compare === selectVehicle?._id) {
        arrVehicles[i] = new Vehicle(
          _id,
          _plate,
          _model,
          _brand,
          _photoName === ""? selectVehicle._photoName: _photoName,
          imgBs64
        );
      }
    }
  };

  const sentForm = (fh: formHTML) => {
    fh.preventDefault();
    const currentForm = fh.currentTarget;
    if (currentForm.checkValidity() == false) {
      fh.preventDefault();
      fh.stopPropagation();
      setInProgress(true);
    } else {
      // Hook!
      updateVehicle();
      setInProgress(false);
      navigate("/manage");
    }
  };

  // To do the two data binding (There Angular, here Hook)
  let { _id, _plate, _model, _brand, _photoName, _photoB64, dobleLink, obj } =
    useForm<Vehicle>(
      new Vehicle(
        selectVehicle ? selectVehicle._id : 0,
        selectVehicle ? selectVehicle._plate : "",
        selectVehicle ? selectVehicle._model : "",
        selectVehicle ? selectVehicle._brand : "",
        "",
        selectVehicle ? selectVehicle._photoB64 : ""
      )
    );

  useEffect(() => {
    setImgBs64(_photoB64);
    setMinImage(_photoB64);
  }, [_photoB64]);

  // To upload the image
  const loadImg = async (e: any) => {
    const files = e.target.files;
    const img = files[0];

    setMinImage(URL.createObjectURL(img));
    //Well and the two data Binding???
    dobleLink(e);
    const bs64 = await ConvBs64(img);
    // Var to save the base64
    setImgBs64(String(bs64));
  };

  return (
    <div
      className="d-flex h-100 text-center text-bg-dark bodyP"
      cz-shortcut-listen="true"
    >
      <div className="container p-5 col-md-5">
        <div className="card bg-dark text-white text-next border">
          <Form validated={inProgress} onSubmit={sentForm} noValidate>
            <div className="card-header border bg-light text-dark">
              <strong>Update vehicle</strong>
            </div>
            <div className="card-body">
              <div className="mb-3">
                <Form.Group controlId="_plate">
                  <Form.Label>
                    <span className="red">*</span> Plate
                  </Form.Label>
                  <Form.Control
                    size="sm"
                    required
                    type="text"
                    name="_plate"
                    value={_plate}
                    onChange={dobleLink}
                  />
                </Form.Group>
              </div>
              <div className="mb-3">
                <Form.Group controlId="_model">
                  <Form.Label>
                    <span className="red">*</span> Vehicle Model
                  </Form.Label>
                  <Form.Control
                    size="sm"
                    required
                    type="text"
                    name="_model"
                    value={_model}
                    onChange={dobleLink}
                  />
                </Form.Group>
              </div>
              <div className="mb-3">
                <Form.Group controlId="_brand">
                  <Form.Label>
                    <span className="red">*</span> Vehicle Brand
                  </Form.Label>
                  <Form.Select
                    size="sm"
                    required
                    name="_brand"
                    value={_brand}
                    onChange={dobleLink}
                  >
                    <option value="">Select Brand</option>
                    {arrBrand.map((_brand: Brand) => (
                      <option key={_brand.brandId} value={_brand.brandId}>
                        {_brand.brandName}
                      </option>
                    ))}
                  </Form.Select>
                </Form.Group>
              </div>
              <div className="mb-3">
                <Form.Group controlId="_photoName">
                  <Form.Label>
                    <span className="red">*</span> Vehicle's Photo{" "}
                    <span className="red">
                      {selectVehicle ? selectVehicle._photoName : ""}
                    </span>
                  </Form.Label>
                  <Form.Control
                    size="sm"
                    type="file"
                    name="_photoName"
                    value={_photoName}
                    onChange={loadImg}
                  />
                </Form.Group>
              </div>
              <div className="mb-3">
                <div className="d-flex justify-content-center">
                  <img src={minImage} alt=" no image" className="max-upload" />
                </div>
              </div>
              <div className="mb-3">
                <button type="submit" className="btn btn-primary">
                  Update vehicle
                </button>
              </div>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};
