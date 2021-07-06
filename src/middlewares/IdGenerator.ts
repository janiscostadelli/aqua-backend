import { v4 } from "uuid";

class IdGenerator {
  generate(): string{
    return v4();
  }
}
export default new IdGenerator();