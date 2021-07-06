import HashManager from "../middlewares/HashManager";
import { signupDTO } from "../models/userModel";
import connection from "./connection";

class UserDatabase {
  tableName: string;

  constructor(tableName: string = "users") {
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
}

export default new UserDatabase();
// signup:
//connection✓ => models✓ => data => business => controller
