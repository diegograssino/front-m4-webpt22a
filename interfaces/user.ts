import { Order } from "./orders";

export interface UserLogin {
  email: string;
  password: string;
}

export interface UserRegister extends UserLogin {
  name: string;
  address: string;
  phone: string;
}
export interface User {
  login: boolean;
  user: UserData;
  token: string;
}

interface UserData {
  id: number;
  name: string;
  email: string;
  address: string;
  phone: string;
  role: string;
  credential: Credential;
  orders: Order[];
}

interface Credential {
  id: number;
  password: string;
}
