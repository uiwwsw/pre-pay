import { searchData } from "%/storage";
import { UserInfo } from "./domain";

export const getUser = async (uid?: string) => {
    if (!uid) return null
    const res = (await searchData<UserInfo>("users", "uid", uid));
    if (res.length) return res[0];

    return null
}