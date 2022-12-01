class PlaneEntity {
    public planeType: number;
    public planeCompany: string;
    public planeAvailability: number;
  
    constructor(type: number, comp: string, ava: number) {
      this.planeType = type;
      this.planeCompany = comp;
      this.planeAvailability = ava;
    }
  }
  
  export default PlaneEntity;
  