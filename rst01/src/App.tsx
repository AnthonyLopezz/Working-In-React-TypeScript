import './App.css';
import reactLogo from './assets/img/react.png';

function App(){
  return(
    <div className='d-flex justify-content-center mt-5'>
    <div className="col-md-6 p-5 text-bg-dark rounded-3 ">
          <h2 className='title'>
            Hello World! &nbsp;
            <img src={reactLogo}></img>
            </h2>
          <p> <i className='fa-solid fa-biohazard fa-lg checkStart'> &nbsp; </i> Facultad de Sistemas</p>
          <p>Universidad Santo Tomás</p>
          <button className="btn btn-outline-light" type="button">Start App</button>
        </div>
  </div>
  );
}

export default App;