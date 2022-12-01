import { Form } from "react-bootstrap";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Interface } from "../models/I";
import { E_ARRAY } from "../utilities/domains/EDomain";

import noimage from "../../assets/imgs/noimage.png";
import { Example } from "../models/E";
import { EXAMPLE_ARRAY } from "../mocks/E-Mock";
import { useForm } from "../utilities/hooks/useForm";
import { ConvBs64 } from "../utilities/functions/ConvBs64";

export const Create = () => {

  type formHTML = React.FormEvent<HTMLFormElement>;

const [arrInterface] = useState<Interface[]>(E_ARRAY);
const [minImage, setMinImage] = useState(noimage);
const [inProgress, setInProgress] = useState<boolean>(false);

const [arrE] = useState<Example[]>(EXAMPLE_ARRAY);
const [imgBs64, setImgBs64] = useState<string>("");
const navigate = useNavigate();

// Sent Form

const sentForm = (fh: formHTML) => {
  fh.preventDefault();
  const currentForm = fh.currentTarget;
  if (currentForm.checkValidity() == false) {
    fh.preventDefault();
    fh.stopPropagation();
    setInProgress(true);
  } else {
    // Hook!
    const newCode = arrE.length + 1;
    obj._id = newCode;
    obj._photoBs64 = imgBs64;

    arrE.push(obj);
    setInProgress(false);
    navigate("/catalog");
  }
};

// To do the two data binding (There Angular, here Hook)
let { _name, _interface, _photoName, dobleLink, obj } = useForm<Example>(
  new Example(0, "", "", "", "")
);

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
          <Form validated={inProgress} onSubmit={sentForm} noValidate className="border">
            <div className="card-header border">Add new object</div>
            <div className="card-body ">
              <div className="mb-3">
                <Form.Group controlId="_plate">
                  <Form.Label>
                    <span className="red">*</span> Name
                  </Form.Label>
                  <Form.Control
                    size="sm"
                    required
                    type="text"
                    name="_name"
                    value={_name}
                    onChange={dobleLink}
                  />
                </Form.Group>
              </div>
              <div className="mb-3">
                <Form.Group controlId="_interface">
                  <Form.Label>
                    <span className="red">*</span> Options
                  </Form.Label>
                  <Form.Select
                    size="sm"
                    required
                    name="_interface"
                    value={_interface}
                    onChange={dobleLink}
                  >
                    <option value="">Select option</option>
                    {arrInterface.map((_inter: Interface) => (
                      <option key={_inter.interfaceId} value={_inter.interfaceId}>
                        {_inter.interfaceName}
                      </option>
                    ))}
                  </Form.Select>
                </Form.Group>
              </div>
              <div className="mb-3">
                <Form.Group controlId="_photoName">
                  <Form.Label>
                    <span className="red">*</span> Vehicle's Photo
                  </Form.Label>
                  <Form.Control
                    size="sm"
                    required
                    type="file"
                    name="_photoName"
                    value={_photoName}
                    onChange={loadImg}
                  />
                </Form.Group>
              </div>
              <div className="mb-3">
                <div className="d-flex justify-content-center">
                  <img src={minImage} alt="no image" className="max-upload" />
                </div>
              </div>
              <div className="mb-3">
                <button type="submit" className="btn btn-primary">
                  Add
                </button>
              </div>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};
