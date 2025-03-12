import { addData } from "%/storage";
import { Store } from "./domain";

export const createStoreRequest = (store: Store) => addData("requests", store)