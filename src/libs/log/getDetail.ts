import { getDataWithId } from "%/storage";
import { Log } from "./domain";

export const getDetail = (id: string) => getDataWithId<Log>("logs", id);
