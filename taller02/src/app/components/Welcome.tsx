import hero from "../../assets/img/hero-bg.jpg";
import wheel from "../../assets/img/wheel.png";
import '../../assets/css/nice-select.css';

export const Welcome = () => {
  return (
    <div>
      <section className="hero spad set-bg" style={{backgroundImage: `url(${hero})`}} >
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <div className="hero__text">
                <div className="hero__text__title">
                  <span>FIND YOUR DREAM CAR</span>
                  <h2>Porsche Cayenne S</h2>
                </div>
                <div className="hero__text__price">
                  <div className="car-model">Model 2019</div>
                  <h2>
                    $399<span>/Month</span>
                  </h2>
                </div>
                <a href="#" className="primary-btn">
                  <img src={wheel} alt="" /> Test Drive
                </a>
                <a href="#" className="primary-btn more-btn">
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
