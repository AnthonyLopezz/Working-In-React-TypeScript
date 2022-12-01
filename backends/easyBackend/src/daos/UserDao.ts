import { Response } from "express";
import jwt from "jsonwebtoken";
import encrypt from "bcryptjs";
import UserScheme from "../eschemes/UserScheme";

class UserDao {

  protected static async session(params: any, res: Response) {
    const passwd = params.passwordUser;
    const email = params.emailUser;

    UserScheme.findOne({ emailUser: email })
      .exec((err, obj) => {
        if (obj) {
          const confirmedKey = encrypt.compareSync(passwd, obj.passwordUser);
          if (confirmedKey) {

            const paylaod = {
              userId: obj._id,
              userEmail: params.userEmail,
              userName: params.userName
            };
            const key = String(process.env.SECRET_KEY);
            const token = jwt.sign(paylaod, key, { expiresIn: 86400 });
            res.status(200).json({ Token: token });

          } else {
            res.status(400).json({ Response: "Invalid credentials", Error: err });
          }
        } else {
          res.status(400).json({ Response: "Invalid credentials, Empty", Error: err });
        }
      });
  }

  protected static async createUser(
    email: any,
    params: any,
    res: Response
  ): Promise<any> {
    const exist = await UserScheme.findOne(email).exec(); // exec? works to professional way. Arrow funtions to personalize your results.
    if (exist) {
      res.status(400).json({ Response: "Email name already exists!" });
    } else {
      params.passwordUser = encrypt.hashSync(params.passwordUser, 10);
      const user = new UserScheme(params);
      user.save((err, obj) => {
        if (err) {
          console.log(err);
          res.status(400).json({ Response: "The user can not be saved." });
        } else {
          const paylaod = {
            userId: obj._id,
            emailUser: params.emailUser,
            nameUser: params.nameUser
          };
          const key = String(process.env.SECRET_KEY);
          const token = jwt.sign(paylaod, key, { expiresIn: 86400 });
          res.status(200).json({ Token: token });
        }
      });
    }
  }

}

export default UserDao;
