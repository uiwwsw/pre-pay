import { searchData } from "%/storage";
import { Store } from "./domain";

export const getStores = async (uid: string) => {
  const res = await searchData<Store>("stores", ["ownerId", uid]);
  if (res) return res;

  return null;
};
