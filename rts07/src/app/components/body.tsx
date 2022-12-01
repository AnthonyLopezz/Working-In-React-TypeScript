import { useState } from "react";
import { TEAM_ARRAY } from "../mocks/team-mock";
import { Team } from "../models/Team";

export const Body = () => {
  const [arrTeam, setArrTeam] = useState<Team[]>(TEAM_ARRAY);

  return (
    <div className="container-fluid">
      <div className="d-flex justify-content-center text-center">
        <div className="col-md-8 mt-4">
          <div className="bd-example">
            <table className="table table-dark table-hover table-sm table-borderless">
              <thead className="table-dark">
                <tr>
                  <th style={{ width: "10%" }}>Id</th>
                  <th style={{ width: "40%" }}>Name</th>
                  <th style={{ width: "35%" }}>Locality</th>
                  <th style={{ width: "15%" }}> </th>
                </tr>
              </thead>
              <tbody>
                {arrTeam.map((myTeam: Team, indx: number) => (
                  <tr>
                    <th>{myTeam.Id}</th>
                    <td>
                      {" "}
                      <span
                        style={{
                          textDecoration: myTeam.teamStatus
                            ? ""
                            : "line-through",
                        }}
                      >
                        {myTeam.teamName}
                      </span>
                    </td>
                    <td>{myTeam.TeamLocality}</td>
                    <td>
                      <i className="fa-solid fa-trash-can red"></i>{" "}
                      <i className="fa-solid fa-edit"></i>{" "}
                      <i className="fa-solid fa-rotate"></i>{" "}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
