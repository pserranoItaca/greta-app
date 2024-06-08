import Base from "./Base";

export interface UserModel extends Base {
  avatar: string;
  username: string;
  email: string;
  pass: string;
  passAgain?: string;
}
