import { useState } from "react";
import { ARREGLO_CAMISA } from "../../mocks/camisetas-mock";
import { Camisa } from "../../modelos/camisa";
import { CamisaMarca } from "../../modelos/camisamarca";
import { CamisaTalla } from "../../modelos/camisatalla";
import { ARREGLO_CAMISA_MARCA } from "../../utilidades/dominios/dommarca";
import { ARREGLO_CAMISA_TALLA } from "../../utilidades/dominios/domtalla";
import { MyVerticallyCenteredModal } from "../modal/MyVerticallyCenteredModal";

export const Catalog = () => {
  const [arrCamisa] = useState<Camisa[]>(ARREGLO_CAMISA);
  const [modalShow, setModalShow] = useState<boolean>(false);
  const [objCamisa, setObjCamisa] = useState<Camisa>(
    new Camisa(0, "", "", "", "", "")
  );

  const [objTalla] = useState<CamisaTalla[]>(ARREGLO_CAMISA_TALLA);
  const [objMarca] = useState<CamisaMarca[]>(ARREGLO_CAMISA_MARCA);

  const listTalla = (op: string) => {
    var tallaInt = parseInt(op);
    var nameOp;
    objTalla.forEach((myTalla: CamisaTalla) => {
      if (myTalla.codigoTalla === tallaInt) {
        nameOp = myTalla.nombreTalla;
      } else {
        return "Error";
      }
    });
    return nameOp;
  };

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
    <div
      className="d-flex h-100 text-center text-bg-dark bodyP"
      cz-shortcut-listen="true"
    >
      <div className="container p-10 col-md-6 mt-5">
        <div className="row">
          {arrCamisa.map((myCamisa: Camisa, indx: number) => (
            <div className="col-4">
              <div className="card bg-light text-dark text-center mb-5">
                <div className="card-header">{listMarca(myCamisa.marcaCamisa)}</div>
                {myCamisa.base64ImagenCamisa !== "" ? (
                  <a
                    href="/#"
                    onClick={(e) => {
                      e.preventDefault();
                      setModalShow(true);
                      setObjCamisa(myCamisa);
                    }}
                  >
                    <img
                      src={myCamisa.base64ImagenCamisa}
                      className="listImageM mt-3"
                    />
                  </a>
                ) : (
                  <div>No image</div>
                )}
                <div className="card-footer">
                  <div className="card-body">
                    Marca: {listMarca(myCamisa.marcaCamisa)}
                  </div>
                  <div className="card-body">
                    Talla: {listTalla(myCamisa.tallaCamisa)}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
          obj={objCamisa}
        />
      </div>
    </div>
  );
};
