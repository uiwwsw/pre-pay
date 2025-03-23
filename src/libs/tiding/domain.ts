import { Timestamp } from "firebase/firestore";

export interface Tiding {
  title?: string;
  text: string;
  startDt?: Timestamp;
  endDt?: Timestamp;
  hideClose?: boolean;
}
