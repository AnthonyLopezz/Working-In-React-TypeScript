import { Response } from "express";
import PlaneScheme from "../eschemes/PlaneScheme";

class PlaneDao {

    protected static async createPlane(
        params: any,
        res: Response
      ): Promise<any> {
        const exist = await PlaneScheme.findOne(params).exec(); // exec? works to professional way. Arrow funtions to personalize your results.
        if (exist) {
          res.status(400).json({ Response: "Plane name already exists!" });
        } else {
          const plane = new PlaneScheme(params);
          plane.save((err, obj) => {
            if (err) {
              console.log(err);
              res.status(400).json({ Response: "The plane can not be saved." });
            } else {
              res.status(200).json({ Response: "Plane saved", id: obj._id });
            }
          });
        }
      }


      protected static async planeList(res: Response): Promise<any> {
        const datos = await PlaneScheme.find().sort({ _id: -1 });
        res.status(200).json(datos);
      }

}

export default PlaneDao;