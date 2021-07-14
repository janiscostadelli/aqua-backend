import { Request, Response } from "express";
import UserBusiness from "../business/UserBusiness";
import { loginDTO, signupDTO } from "../models/userModels";

class UserController {
  signup = async (req: Request, res: Response) => {
    try {
      const user: signupDTO = {
        name: req.body.name,
        email: req.body.email,
        nickname: req.body.nickname,
        password: req.body.password,
      };

      const token = await UserBusiness.signup(user);
      res.status(200).send({ token });
    } catch (error) {
      if (error.sqlMessage) {
        if (error.sqlMessage.includes("PRIMARY")) {
          res.status(400).send({ error: "Este e-mail já está cadastrado" });
        }
        if (error.sqlMessage.includes("nickname")) {
          res.status(400).send({ error: "Este nickname já foi cadastrado" });
        }
      }
      res.status(400).send({ error: error.message });
    }
  };

  login = async (req: Request, res: Response) => {
    try {
      const user: loginDTO = {
        email: req.body.email,
        password: req.body.password,
      };
      const token = await UserBusiness.login(user);
      res.status(200).send({ token });
    } catch (error) {
      res.status(400).send({ error: error.message });
    }
  };
}

export default new UserController();
