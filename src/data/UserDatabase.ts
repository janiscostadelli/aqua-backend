import HashManager from "../middlewares/HashManager";
import IdGenerator from "../middlewares/IdGenerator";
import { signupDTO } from "../models/userModels";
import connection from "./connection";

class UserDatabase {
  tableName: string;
  constructor(tableName: string = "devdatabase.user") {
    this.tableName = tableName;
  }

  createUser = async (user: signupDTO) => {
    await connection.raw(`
      INSERT INTO ${
        this.tableName
      } (id, name, email, nickname, password) VALUES (
        '${IdGenerator.generate()}',
        '${user.name}',
        '${user.email}',
        '${user.nickname}',
        '${HashManager.hash(user.password)}'
        );
    `);
  };

  getUserByEmail = async (email: string) => {
    const [result] = await connection.raw(`
      SELECT * FROM ${this.tableName} WHERE email='${email}'
    `);
    return result[0];
  };
}

export default new UserDatabase();
