import { useEffect, useState } from "react";
import { OperationsName } from "../interfaces/OperationsName";

export const Operations = (type: OperationsName) => {
  type form = React.FormEvent<HTMLFormElement>;

  //Constantes
  const [num1, setNum1] = useState<number>(0);
  const [num2, setNum2] = useState<number>(0);
  const [result, setResult] = useState<number>(0);
  const [numType, setNumType] = useState<string>("");

  const clickBtn = (e: form) => {
    e.preventDefault();
    calculateOperation();
    checkNums();
  };

  const checkNums = (): void => {
    switch (type.numberName.toLowerCase()) {
      case "even":
        if (num1 % 2 === 0 && num2 % 2 === 0) {
          setNumType("Even Numbers. Nice!");
          calculateOperation();
        } else {
          setNumType("Something went wrong. Try again!");
          setResult(0);
        }
        break;
      case "odd":
        if (num1 % 2 !== 0 && num2 % 2 !== 0) {
          setNumType("Odd Numbers. Nice!");
          calculateOperation();
        } else {
          setNumType("Something went wrong. Try again!");
          setResult(0);
        }
        break;
      default:
        setNumType(" ");
        break;
    }
  };

  const calculateOperation = (): void => {
    switch (type.name.toLowerCase()) {
      case "addition":
        setResult(num1 + num2);
        break;

      case "substract":
        setResult(num1 - num2);
        break;

      case "multiply":
        setResult(num1 * num2);
        break;

      case "division":
        setResult(num1 / num2);
        break;

      default:
        setResult(0);
        break;
    }
  };

  useEffect(() => {
    //calculateOperation();
    //checkNums();
  });

  return (
    <div className=" container p-5 mt-2 col-md-5 mt-5">
      <form onSubmit={clickBtn}>
        <div className="card bg-dark text-white">
          <div className="card-header">
            <span className="titleForm">
              {type.name} {type.numberName} Form
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
                  setNum1(data);
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
                  setNum2(data);
                }}
              />
            </div>
            <div id="emailHelp" className="form-text"></div>
            <div className="text-center"></div>
          </div>
          <div className="text-center mb-3 text-muted"> Result: {result} </div>
          <div className="text-center mb-3 text-muted"> {numType} </div>
          <div className="card-footer text-muted text-center">
            <button type="submit" className="btn btn-primary">
              {type.name} of {type.numberName} numbers
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
