import UserDao from "../daos/UserDao";
import { Response, Request } from "express";

class UserController extends UserDao {

  public logIn(req: Request, res: Response): void {
    UserController.session(req.body, res);
  }

  public create(req: Request, res: Response): void {
    const email = { emailUser: req.body.emailUser };
    UserController.createUser(email, req.body, res);
  }

}

const userController = new UserController();
export default userController;
