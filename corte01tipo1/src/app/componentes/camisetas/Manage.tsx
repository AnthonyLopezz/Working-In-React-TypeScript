import { useState } from "react";
import { ARREGLO_CAMISA } from "../../mocks/camisetas-mock";
import { Camisa } from "../../modelos/camisa";
import { CamisaMarca } from "../../modelos/camisamarca";
import { CamisaTalla } from "../../modelos/camisatalla";
import { ARREGLO_CAMISA_MARCA } from "../../utilidades/dominios/dommarca";
import { ARREGLO_CAMISA_TALLA } from "../../utilidades/dominios/domtalla";
import { MyVerticallyCenteredModal } from "../modal/MyVerticallyCenteredModal";


export const Manage = () => {
  const [arrCamisa] = useState<Camisa[]>(ARREGLO_CAMISA);
  const [modalShow, setModalShow] = useState<boolean>(false);
  const [objCamisa, setObjCamisa] = useState<Camisa>(new Camisa(0, "", "", "", "", ""));

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
    <div className="d-flex h-100 text-center text-bg-dark bodyP">
      <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
        <div className="col-md-8 mt-4">
          <div className="bd-example">
            <table className="table table-dark table-hover table-sm table-border border pointer">
              <thead className="table-dark">
                <tr>
                  <th style={{ width: "10%" }}>id</th>
                  <th className="text-start" style={{ width: "40%" }}>
                    Marca
                  </th>
                  <th className="text-start" style={{ width: "20%" }}>
                    Talla
                  </th>
                  <th className="text-start" style={{ width: "20%" }}>
                    Color
                  </th>
                  <th style={{ width: "10%" }}>Options</th>
                </tr>
              </thead>
              <tbody>
                {arrCamisa.map((myCamisa: Camisa, indx: number) => (
                  <tr key={myCamisa.codCamisa}>
                    <th>{myCamisa.codCamisa}</th>
                    <td className="text-start">{listMarca(myCamisa.marcaCamisa)}</td>
                    <td className="text-start">{listTalla(myCamisa.tallaCamisa)}</td>
                    <td className="text-start">{myCamisa.colorCamisa}</td>
                    <td>
                      <i className="fa-solid fa-trash-can red"></i>{" "}
                      <i className="fa-solid fa-edit"></i>{" "}
                      <i className="fa-solid fa-rotate"></i>{" "}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <MyVerticallyCenteredModal
              show={modalShow}
              onHide={() => setModalShow(false)}
              obj={objCamisa}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
