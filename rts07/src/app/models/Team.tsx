export class Team {
  public Id: number;
  public teamName: string;
  public TeamLocality: string;
  public teamStatus: boolean;
  public teamPhoto: string;

  constructor(
    id: number,
    name: string,
    locality: string,
    status: boolean,
    photo: string
  ) {
    this.Id = id;
    this.teamName = name;
    this.TeamLocality = locality;
    this.teamStatus = status;
    this.teamPhoto = photo;
  }
}
