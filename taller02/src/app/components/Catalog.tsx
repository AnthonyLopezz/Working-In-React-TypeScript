import { useState } from "react";
import { VEHICLE_ARRAY } from "../mocks/vehicle-mock";
import { Vehicle } from "../models/Vehicle";
import { BRAND_ARRAY } from "../utilities/domains/BrandVehicle";
import noimage from "../../assets/img/noimage.png";
import { Brand } from "../models/Brand";
import { MyVerticallyCenteredModal } from "./modal/MyVerticallyCenteredModal";
import { ListHeader } from "./ListHeader";

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
    <div>
      <ListHeader/>
      <section className="car spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="row">
                {arrVehicle.map((myVec: Vehicle, indx: number) => (
                  <div className="col-lg-4">
                    <div className="car__item">
                      <div className="">
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
                            />
                          </a>
                        ) : (
                          <div>No Image</div>
                        )}
                      </div>
                      <div className="car__item__text">
                        <div className="car__item__text__inner">
                          <div className="label-date">{myVec._plate}</div>
                          <h5>
                            <a href="#">{myVec._model}</a>
                          </h5>
                          <ul>
                            <li> {listBrand(myVec._brand)}</li>
                          </ul>
                        </div>
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
          </div>
        </div>
      </section>
    </div>
  );
};
