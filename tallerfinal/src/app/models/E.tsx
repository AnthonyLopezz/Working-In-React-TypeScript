export class Example {
  public _id: number;
  public _name: string;
  public _interface: string;
  public _photoName: string;
  public _photoBs64: string;

  constructor(
    id: number,
    name: string,
    interfc: string,
    photoName: string,
    photoBs64: string
    ) {
    this._id = id;
    this._name = name;
    this._interface = interfc;
    this._photoName = photoName;
    this._photoBs64 = photoBs64;
  }
}
