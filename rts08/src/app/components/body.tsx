import { useState } from "react";
import { MOVIE_ARRAY } from "../mocks/team-mock";
import { Movie } from "../models/Movie";
import { MyVerticallyCenteredModal } from "./movies/MyVerticallyCenteredModal";

export const Body = () => {
  const [arrMovie] = useState<Movie[]>(MOVIE_ARRAY);
  const [modalShow, setModalShow] = useState<boolean>(false);
  const [objMovie, setObjMovie] = useState<Movie>(new Movie(0, "", "", "", ""));

  return (
    <div className="">
      <div className="d-flex justify-content-center text-center">
        <div className="col-md-8 mt-4">
          <div className="bd-example">
            <table className="table table-dark table-hover table-sm table-borderless">
              <thead className="table-dark">
                <tr>
                  <th style={{ width: "10%" }}>id</th>
                  <th className="text-start" style={{ width: "40%" }}>
                    Name
                  </th>
                  <th className="text-start" style={{ width: "20%" }}>
                    Protagonist
                  </th>
                  <th className="text-start" style={{ width: "10%" }}>
                    Genre
                  </th>
                  <th className="text-start" style={{ width: "10%" }}>
                    Photo
                  </th>
                  <th style={{ width: "10%" }}> </th>
                </tr>
              </thead>
              <tbody>
                {arrMovie.map((myMovie: Movie, indx: number) => (
                  <tr key={myMovie.Id}>
                    <th>{myMovie.Id}</th>
                    <td className="text-start"> {myMovie.name}</td>
                    <td className="text-start">{myMovie.protagonist}</td>
                    <td className="text-start">{myMovie.genre}</td>
                    <td className="text-start">
                      {myMovie.photo !== "" ?(
                      <a
                        href="/#"
                        onClick={(e) => {
                          e.preventDefault();
                          setModalShow(true);
                          setObjMovie(myMovie);
                        }}
                      >
                        <img src={myMovie.photo} className="listImage" />
                      </a>): (
                      <div>No image</div>
                      )
                      }
                    </td>
                    <td>
                      <i className="fa-solid fa-trash-can red"></i>{" "}
                      <i className="fa-solid fa-edit"></i>{" "}
                      <i className="fa-solid fa-rotate"></i>{" "}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <MyVerticallyCenteredModal
              show={modalShow}
              onHide={() => setModalShow(false)}
              obj = {objMovie}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
