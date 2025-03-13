import { Timestamp } from "firebase/firestore";

export interface FirebaseDocData {
  id: string;
  created: Timestamp;
}
