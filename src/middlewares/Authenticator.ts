import * as jwt from "jsonwebtoken";
import { config } from "dotenv";

config();

class Authenticator {

  public generateToken(
    input: AuthenticationData,
    expiresIn: string = process.env.ACCESS_TOKEN_EXPIRES_IN!
  ): string {
    const token = jwt.sign(
      {
        nickname: input.email,
      },
      process.env.JWT_KEY as string,
      {
        expiresIn,
      }
    );
    return token;
  }

  public getData(token: string): AuthenticationData {
    const payload = jwt.verify(token, process.env.JWT_KEY as string) as any;
    const result = {
      email: payload.email,
    };
    return result;
  }
}

type AuthenticationData = {
  email: string;
}

export default new Authenticator();
