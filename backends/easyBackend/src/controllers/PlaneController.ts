import { Response, Request } from "express";
import ExampleDao from "../daos/PlaneDao";

class PlaneController extends ExampleDao {

  public query(req: Request, res: Response): void {
    PlaneController.planeList(res);
  }

  public create(req: Request, res: Response): void {
    PlaneController.createPlane(req.body, res);
  }


}

const planeController = new PlaneController();
export default planeController;
