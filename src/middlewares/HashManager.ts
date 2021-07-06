import * as bcrypt from 'bcryptjs';
import { config } from "dotenv";

config();

class HashManager {
  cost: number = Number(process.env.BCRYPT_COST);

  hash(plainText: string): string{
    const salt = bcrypt.genSaltSync(this.cost);
    return bcrypt.hashSync(plainText, salt);
  }

  compare(plainText: string, cypherText: string): boolean{
    return bcrypt.compareSync(plainText,cypherText)
  }
}

export default new HashManager();
