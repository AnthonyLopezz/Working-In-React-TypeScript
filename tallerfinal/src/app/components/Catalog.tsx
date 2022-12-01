import { useState } from "react";
import { EXAMPLE_ARRAY } from "../mocks/E-Mock";
import { Example } from "../models/E";
import { Interface } from "../models/I";
import { E_ARRAY } from "../utilities/domains/EDomain";
import { MyVerticallyCenteredModal } from "./modal/MyVerticallyCenteredModal";

export const Catalog = () => {
  const [arrE] = useState<Example[]>(EXAMPLE_ARRAY);
  const [modalShow, setModalShow] = useState<boolean>(false);
  const [objE, setObjE] = useState<Example>(new Example(0, "", "", "", ""));

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

  return (
    <div
      className="d-flex h-100 text-center text-bg-dark bodyP"
      cz-shortcut-listen="true"
    >
      <div className="container p-10 col-md-6 mt-5">
        <div className="row">
          {arrE.map((myE: Example, indx: number) => (
            <div className="col-4">
              <div className="card bg-light text-dark text-center mb-5">
                <div className="card-header">{myE._name}</div>
                {myE._photoBs64 !== "" ? (
                  <a
                    href="/#"
                    onClick={(e) => {
                      e.preventDefault();
                      setModalShow(true);
                      setObjE(myE);
                    }}
                  >
                    <img src={myE._photoBs64} className="listImage mt-3" />
                  </a>
                ) : (
                  <div>No image</div>
                )}

                <div className="card-body">{listOption(myE._interface)}</div>
              </div>
            </div>
          ))}
        </div>

        <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
          obj={objE}
        />
      </div>
    </div>
  );
};
