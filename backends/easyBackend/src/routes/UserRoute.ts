import { Router } from "express";
import userController from "../controllers/UserController";

class UserRoute {
  public apiRouteUser: Router;

  constructor() {
    this.apiRouteUser = Router();
    this.loadRoutes();
  }
  public loadRoutes(): void {
    this.apiRouteUser.post("/logIn", userController.logIn);

    // CRUD
    this.apiRouteUser.post("/create", userController.create);
  }
}

const userRoute = new UserRoute();
export default userRoute.apiRouteUser;
