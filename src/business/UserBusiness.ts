import UserDatabase from "../data/UserDatabase";
import { InvalidInputError } from "../error/InvalidInputError";
import { NotFoundError } from "../error/NotFoundError";
import Authenticator from "../middlewares/Authenticator";
import HashManager from "../middlewares/HashManager";
import { loginDTO, signupDTO } from "../models/userModel";

class UserBusiness {
  signup = async (user: signupDTO) => {
    if (!user.name || !user.email || !user.nickname || !user.password) {
      throw new InvalidInputError(
        "Preencha os campos 'name', 'email', 'nickname' e 'password'"
      );
    }

    if (user.password.length < 6) {
      throw new InvalidInputError(
        "O campo 'password' precisa ter, no mínimo, 6 caracteres."
      );
    }
    await UserDatabase.createUser(user);
    return Authenticator.generateToken({ nickname: user.nickname });
  };

  login = async (user: loginDTO) => {
    if (!user.email || !user.password) {
      throw new InvalidInputError("Preencha os campos 'email' e 'password'");
    }
    const result = await UserDatabase.getUserByEmail(user.email);
    if (!result) {
      throw new NotFoundError("E-mail não cadastrado");
    }
    if (!HashManager.compare(user.password, result.password)) {
      throw new InvalidInputError("Senha incorreta");
    }
    return Authenticator.generateToken({ nickname: result.nickname });
  };
}

export default new UserBusiness();
