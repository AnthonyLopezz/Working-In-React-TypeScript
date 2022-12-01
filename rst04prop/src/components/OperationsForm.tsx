import { useEffect, useState } from "react";

type SumObject = { nameOperation: String };

export const OperationsForm = (operationType: SumObject) => {
  type myForm = React.FormEvent<HTMLFormElement>; //Object

  //Variables with data

  const [result, setResult] = useState<number>(0);
  const [valNum1, setValNum1] = useState<number>(0);
  const [valNum2, setValNum2] = useState<number>(0);

  const clickBtn = (e: myForm) => {
    e.preventDefault();
    calculateOperation();
  };

  const calculateOperation = (): void => {
    switch (operationType.nameOperation.toLowerCase()) {
      case "addition":
        setResult(valNum1 + valNum2);
        break;

      case "substract":
        setResult(valNum1 - valNum2);
        break;

      case "multiply":
        setResult(valNum1 * valNum2);
        break;

      case "division":
        setResult(valNum1 / valNum2);
        break;

      default:
        setResult(0);
        break;
    }
  };
  
  useEffect(() => {
    calculateOperation();
  });

  return (
    <div className=" container p-5 mt-2 col-md-5 mt-5">
      <form onSubmit={clickBtn}>
        <div className="card bg-dark text-white">
          <div className="card-header">
            <span className="titleForm">
              {operationType.nameOperation} Form
            </span>
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
          <div className="text-center mb-3 text-muted"> Result: {result} </div>
          <div className="card-footer text-muted text-center">
            <button type="submit" className="btn btn-primary">
              {operationType.nameOperation} numbers
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
