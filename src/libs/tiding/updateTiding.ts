import { updateData } from "%/storage";
import { Tiding } from "./domain";

export const updateTiding = (tiding: Tiding) =>
  updateData("subscribe", "tiding", {
    hideClose: false,
    ...tiding,
  });
