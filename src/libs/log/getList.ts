import { searchData } from "%/storage";
import { Log } from "./domain";

export const getList = (uid: string) => searchData<Log>("logs", ["uid", uid]);
