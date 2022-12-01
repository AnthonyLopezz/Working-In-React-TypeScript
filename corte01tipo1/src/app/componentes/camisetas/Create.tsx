import { Form } from "react-bootstrap";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import noimage from "../../assets/noimage.png"
import { useForm } from "../../utilidades/hooks/useForm";
import { ConvBs64 } from "../../utilidades/funciones/ConvBs64";
import { CamisaTalla } from "../../modelos/camisatalla";
import { ARREGLO_CAMISA_TALLA } from "../../utilidades/dominios/domtalla";
import { CamisaMarca } from "../../modelos/camisamarca";
import { ARREGLO_CAMISA_MARCA } from "../../utilidades/dominios/dommarca";
import { Camisa } from "../../modelos/camisa";
import { ARREGLO_CAMISA } from "../../mocks/camisetas-mock";

export const Create = () => {

  type formHTML = React.FormEvent<HTMLFormElement>;

const [arrCamisaTalla] = useState<CamisaTalla[]>(ARREGLO_CAMISA_TALLA);
const [arrCamisaMarca] = useState<CamisaMarca[]>(ARREGLO_CAMISA_MARCA);
const [minImage, setMinImage] = useState(noimage);
const [inProgress, setInProgress] = useState<boolean>(false);

const [arrCamisa] = useState<Camisa[]>(ARREGLO_CAMISA);
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
    const newCode = arrCamisa.length + 1;
    obj.codCamisa = newCode;
    obj.base64ImagenCamisa = imgBs64;

    arrCamisa.push(obj);
    setInProgress(false);
    navigate("/catalog");
  }
};

  

// To do the two data binding (There Angular, here Hook)
let { marcaCamisa, tallaCamisa, colorCamisa, nombreImagencamisa, dobleLink, obj } = useForm<Camisa>(
  new Camisa(0, "", "", "", "", "")
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
            <div className="card-header border">Crear nueva camisa</div>
            <div className="card-body ">
            <div className="mb-3">
                <Form.Group controlId="marcaCamisa">
                  <Form.Label>
                    <span className="red">*</span> Marca Camisa
                  </Form.Label>
                  <Form.Select
                    size="sm"
                    required
                    name="marcaCamisa"
                    value={marcaCamisa}
                    onChange={dobleLink}
                  >
                    <option value="">Seleccionar Marca</option>
                    {arrCamisaMarca.map((_camisaMarca: CamisaMarca) => (
                      <option key={_camisaMarca.codigoMarca} value={_camisaMarca.codigoMarca}>
                        {_camisaMarca.nombreMarca}
                      </option>
                    ))}
                  </Form.Select>
                </Form.Group>
              </div>
              <div className="mb-3">
                <Form.Group controlId="tallaCamisa">
                  <Form.Label>
                    <span className="red">*</span> Camisa Talla
                  </Form.Label>
                  <Form.Select
                    size="sm"
                    required
                    name="tallaCamisa"
                    value={tallaCamisa}
                    onChange={dobleLink}
                  >
                    <option value="">Seleccionar Talla</option>
                    {arrCamisaTalla.map((_camisaTalla: CamisaTalla) => (
                      <option key={_camisaTalla.codigoTalla} value={_camisaTalla.codigoTalla}>
                        {_camisaTalla.nombreTalla}
                      </option>
                    ))}
                  </Form.Select>
                </Form.Group>
              </div>
              <div className="mb-3">
                <Form.Group controlId="colorCamisa">
                  <Form.Label>
                    <span className="red">*</span> Color Camisa
                  </Form.Label>
                  <Form.Control
                    size="sm"
                    required
                    type="text"
                    name="colorCamisa"
                    value={colorCamisa}
                    onChange={dobleLink}
                  />
                </Form.Group>
              </div>
              <div className="mb-3">
                <Form.Group controlId="nombreImagencamisa">
                  <Form.Label>
                    <span className="red">*</span> Foto Camisa
                  </Form.Label>
                  <Form.Control
                    size="sm"
                    required
                    type="file"
                    name="nombreImagencamisa"
                    value={nombreImagencamisa}
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
                Crear Camisa
                </button>
              </div>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};
