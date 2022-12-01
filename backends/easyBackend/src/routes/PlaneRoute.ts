import { Router } from "express";
import planeController from "../controllers/PlaneController";

class PlaneRoute {
  public apiRoute: Router;

  constructor() {
    this.apiRoute = Router();
    this.loadRoutes();
  }
  public loadRoutes(): void {
    this.apiRoute.get("/all", planeController.query);
    this.apiRoute.post("/create", planeController.create);
  }
}

const planeRoute = new PlaneRoute();
export default planeRoute.apiRoute;
