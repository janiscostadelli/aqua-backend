import HashManager from "../middlewares/HashManager";
import { signupDTO } from "../models/userModel";
import connection from "./connection";

class UserDatabase {
  tableName: string;
  constructor(tableName: string = "devdatabase.users") {
    this.tableName = tableName;
  }

  createUser = async (user: signupDTO) => {
    await connection.raw(`
      INSERT INTO ${this.tableName} (name, email, nickname, password) VALUES (
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
