import { useState } from "react";

export const SumForm = () => {
  type myForm = React.FormEvent<HTMLFormElement>; //Object

  //Variables with data

  const [sum, setSum] = useState<number>(0);
  const [valNum1, setValNum1] = useState<number>(0);
  const [valNum2, setValNum2] = useState<number>(0);

  const add = () => {
    setSum(valNum1 + valNum2);
  };

  const clickBtn = (e: myForm) => {
    e.preventDefault();
    add();
  };

  return (
    <div className=" container p-5 mt-2 col-md-5">
      <form onSubmit={clickBtn}>
        <div className="card bg-dark text-white">
          <div className="card-header">
           <span className="titleForm">Add Form</span> 
          </div>
          <div className="card-body">
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                First Number:
              </label>
              <input
                type="text"
                className="form-control"
                id="num1"
                onChange={(event) => {
                  const data = Number(event.target.value);
                  setValNum1(data);
                }}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Second Number:
              </label>
              <input
                type="text"
                className="form-control"
                id="num2"
                onChange={(event) => {
                  const data = Number(event.target.value);
                  setValNum2(data);
                }}
              />
            </div>
            <div id="emailHelp" className="form-text"></div>
            <div className="text-center"></div>
          </div>
          <div className="text-center mb-3 text-muted"> Result: {sum} </div>
          <div className="card-footer text-muted text-center">
            <button type="submit" className="btn btn-primary">
              Add
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
