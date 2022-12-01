export const Form = () => {
  return (
    <div>
      <div className="container p-5 col-md-5">
        <form>
          <div className="card bg-dark text-white">
            <div className="card-header">
              <span className="titleForm">Form</span>
            </div>
            <div className="card-body">
                <div className="form-group">
                  <label htmlFor="exampleFormControlInput1">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="name@example.com"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleFormControlSelect1">
                    Example select
                  </label>
                  <select
                    className="form-control"
                    id="exampleFormControlSelect1"
                  >
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="exampleFormControlTextarea1">
                    Example textarea
                  </label>
                  <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows={3}
                  ></textarea>
                </div>
              <div id="emailHelp" className="form-text"></div>
              <div className="text-center"></div>
            </div>
            <div className="card-footer text-muted text-center">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
