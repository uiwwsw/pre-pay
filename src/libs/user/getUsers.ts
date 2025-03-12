import { readData } from "%/storage";
import { UserInfo } from "./domain";

export const getUsers = () => readData<UserInfo>("users")