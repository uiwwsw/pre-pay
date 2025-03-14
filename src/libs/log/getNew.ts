import { searchData } from "%/storage";
import { Log } from "./domain";

export const getNew = (uid: string, confirm: boolean = false) =>
  searchData<Log>("logs", ["uid", uid], ["confirm", confirm]);
