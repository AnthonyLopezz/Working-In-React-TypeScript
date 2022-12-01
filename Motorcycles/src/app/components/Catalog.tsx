import { useState } from "react";
import { VEHICLE_ARRAY } from "../mocks/vehicle-mock";
import { Vehicle } from "../models/Vehicle";
import { BRAND_ARRAY } from "../utilities/domains/BrandVehicle";
import noimage from "../../assets/img/noimage.png";
import { Brand } from "../models/Brand";
import { MyVerticallyCenteredModal } from "./modal/MyVerticallyCenteredModal";

export const Catalog = () => {
  const [objMarcas] = useState<Brand[]>(BRAND_ARRAY);
  const [minImage, setMinImage] = useState(noimage);

  const [arrVehicle] = useState<Vehicle[]>(VEHICLE_ARRAY);
  const [modalShow, setModalShow] = useState<boolean>(false);
  const [objVehicle, setObjVehicle] = useState<Vehicle>(
    new Vehicle(0, "", "", "", "", "")
  );

  const listBrand = (brand: string) => {
    var brandint = parseInt(brand);
    var nameBrand;
    objMarcas.forEach((myBrand: Brand) => {
      if (myBrand.brandId === brandint) {
        nameBrand = myBrand.brandName;
      } else {
        return "Error";
      }
    });
    return nameBrand;
  };

  return (
    <div
      className="d-flex h-100 text-center text-bg-dark bodyP p-3"
      cz-shortcut-listen="true"
    >
      <div className="row pb-5 mb-4">
        {arrVehicle.map((myVec: Vehicle, indx: number) => (
          <div className="col-lg-3 col-md-6 mb-4 mb-lg-0 mb-4">
            <div className="card rounded shadow-sm border-0 mb-4">
              <div className="card-body p-4">
                {myVec._photoB64 !== "" ? (
                  <a
                    href="/#"
                    onClick={(e) => {
                      e.preventDefault();
                      setModalShow(true);
                      setObjVehicle(myVec);
                    }}
                  >
                    <img
                      src={myVec._photoB64}
                      className="img-fluid d-block mx-auto mb-3"
                    />
                  </a>
                ) : (
                  <div>No Image</div>
                )}

                <h5>
                  {" "}
                  <a href="/#" className="text-dark">
                    {myVec._model}
                  </a>
                </h5>
                <p className="small text-muted font-italic">
                  {listBrand(myVec._brand)}
                </p>
                <p className="small text-muted font-italic">{myVec._plate}</p>
                <ul className="list-inline small">
                  <li className="list-inline-item m-0">
                    <i className="fa fa-star text-success"></i>
                  </li>
                  <li className="list-inline-item m-0">
                    <i className="fa fa-star text-success"></i>
                  </li>
                  <li className="list-inline-item m-0">
                    <i className="fa fa-star text-success"></i>
                  </li>
                  <li className="list-inline-item m-0">
                    <i className="fa fa-star text-success"></i>
                  </li>
                  <li className="list-inline-item m-0">
                    <i className="fa fa-star-o text-success"></i>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        ))}
        <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
          obj={objVehicle}
        />
      </div>
    </div>
  );
};
