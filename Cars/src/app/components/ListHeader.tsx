import { Link } from "react-router-dom";
import hero from "../../assets/img/breadcrumb-bg.jpg";

export const ListHeader = () => {
  return (
    <div
      className="breadcrumb-option set-bg"
      style={{ backgroundImage: `url(${hero})` }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <div className="breadcrumb__text">
              <h2>Car Listing</h2>
              <div className="breadcrumb__links">
                <a>
                  <Link to="/">
                    Home
                  </Link>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
