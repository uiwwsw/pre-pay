import { findData } from "%/storage";
import { UserInfo } from "./domain";

export const getUser = async (uid: string) => {
    const res = (await findData<UserInfo>("users", "uid", "==", uid));
    if (res.length) return res[0];

    return null
}