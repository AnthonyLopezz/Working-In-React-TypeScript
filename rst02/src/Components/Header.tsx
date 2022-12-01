import logo from "./../assets/img/react.png";

export const Header = () => {
  return (
    
    <nav className="navbar navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img
            src={logo}
            alt=""
            width="30"
            height="24"
            className="d-inline-block align-text-top"
          />
          &nbsp; React with Ts.
        </a>
      </div>
    </nav>
  );
};
