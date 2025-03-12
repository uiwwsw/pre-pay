import { readData } from "%/storage";
import { Store } from "./domain";

export const getStores = async () => {
    const res = (await readData<Store>("stores"));
    if (res) return res;

    return null
}