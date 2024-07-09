import { User } from "../users/types";

export type Task = {
  id: number;
  name: string;
  creator: User;
  executor: User;
};
