import { addData } from "%/storage";
import { UserInfo } from "./domain";

export const createUser = (userInfo: UserInfo) => addData("users", userInfo)