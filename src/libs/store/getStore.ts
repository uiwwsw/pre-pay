import { getDataWithId } from "%/storage";
import { Store } from "./domain";

export const getStore = async (storeId: string) => {
    const res = (await getDataWithId<Store>("stores", storeId));
    if (res) return res;

    return null
}