export class Vehicle {
    public _id: number;
    public _plate: string;
    public _model: string;
    public _brand: string;
    public _photoName: string;
    public _photoB64: string;

  
    constructor(
      id: number,
      plate: string,
      model: string,
      brand: string,
      photoName: string,
      photoB64: string
    
    ) {
      this._id = id;
      this._plate = plate;
      this._model = model;
      this._brand = brand;
      this._photoName = photoName;
      this._photoB64 = photoB64;
    }
  }
  