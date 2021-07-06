import UserDatabase from "../data/UserDatabase";
import { InvalidInputError } from "../error/InvalidInputError";
import Authenticator from "../middlewares/Authenticator";
import { signupDTO } from "../models/userModel";

class UserBusiness {
  signup = async (user: signupDTO) => {
    if (!user.name || !user.email || !user.nickname || !user.password) {
      throw new InvalidInputError(
        "Preencha os campos 'name', 'email', 'nickname' e 'password'."
      );
    }

    if (user.password.length < 6) {
      throw new InvalidInputError(
        "O campo 'password' precisa ter, no mínimo, 6 caracteres."
      );
    }
    await UserDatabase.createUser(user);
    return Authenticator.generateToken({ email: user.email });
  };
}

export default new UserBusiness();


