import { addData } from "%/storage";
import { Store } from "./domain";

export const createStore = (store: Store) => addData("stores", store)