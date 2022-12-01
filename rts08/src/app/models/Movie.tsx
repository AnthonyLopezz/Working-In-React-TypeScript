export class Movie {
  public Id: number;
  public name: string;
  public protagonist: string;
  public genre: string;
  public photo: string;

  constructor(
    id: number,
    name: string,
    protagonist: string,
    genre: string,
    photo: string
  ) {
    this.Id = id;
    this.name = name;
    this.protagonist = protagonist;
    this.genre = genre;
    this.photo = photo;
  }
}
