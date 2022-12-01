import logo from "../../assets/imgs/happy.png";

export const Welcome = () => {
  return (
    <div>
      <body
        className="d-flex h-100 text-center text-bg-dark bodyP"
        cz-shortcut-listen="true"
      >
        <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
          <header className="mb-auto">
            <div>
              <h3 className="float-md-start mb-0">2271557</h3>
            </div>
          </header>

          <main className="px-3">
            <h1>Welcome to this project</h1>
            <p className="lead">Anthony Jardiel López Pérez</p>
            <p className="lead">
              <a
                href="/#"
                className="btn btn-lg border-white bg-darl text-white"
              >
                Do nothing =D
              </a>
            </p>
          </main>
        </div>
      </body>
    </div>
  );
};
