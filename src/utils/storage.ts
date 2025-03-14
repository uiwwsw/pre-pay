import {
  collection,
  addDoc,
  DocumentData,
  getDocs,
  onSnapshot,
  QuerySnapshot,
  query,
  where,
  WhereFilterOp,
  doc,
  getDoc,
  updateDoc,
  Timestamp,
} from "firebase/firestore";
import { db } from "./firebase";
import { FirebaseDocData } from "#/firebase/domain";

const initialDate = () => Timestamp.fromDate(new Date());
export const addData = async (collectionName: string, data: DocumentData) => {
  try {
    const docRef = await addDoc(collection(db, collectionName), {
      ...data,
      created: initialDate(),
    });
    console.log("Document written with ID: ", docRef.id);
    return docRef;
  } catch (error) {
    console.error("Error adding document: ", error);
  }
};

// export const addDataWithId = async (
//   collectionName: string,
//   documentId: string,
//   data: DocumentData
// ) => {
//   try {
//     const docRef = doc(db, collectionName, documentId);
//     await setDoc(docRef, data);
//     console.log("Document written with ID: ", documentId);
//     return docRef;
//   } catch (error) {
//     console.error("Error adding document with ID: ", error);
//     throw error;
//   }
// };

export const updateData = async (
  collectionName: string,
  documentId: string,
  data: DocumentData
) => {
  try {
    const docRef = doc(db, collectionName, documentId);
    await updateDoc(docRef, { ...data, updated: initialDate() });
    console.log("Document updated with ID: ", documentId);
  } catch (error) {
    console.error("Error updating document: ", error);
  }
};
export const readData = async <T>(collectionName: string) => {
  const querySnapshot = await getDocs(collection(db, collectionName));
  const dataList: (T & FirebaseDocData)[] = [];
  querySnapshot.forEach((doc) => {
    dataList.push({ id: doc.id, ...doc.data() } as T & FirebaseDocData);
  });
  return dataList;
};

export const getDataWithId = async <T>(
  collectionName: string,
  documentId: string
) => {
  try {
    const docRef = doc(db, collectionName, documentId);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return docSnap.data() as T & FirebaseDocData;
    } else {
      console.log("No such document!");
      return null;
    }
  } catch (error) {
    console.error("Error fetching document: ", error);
    throw error;
  }
};

export const subscribeToData = <T>(
  documentId: string,
  callback: React.Dispatch<React.SetStateAction<T | undefined>>
) => {
  try {
    const docRef = doc(db, "subscribe", documentId);

    const sub = onSnapshot(docRef, (doc) => {
      if (doc.exists()) {
        callback(doc.data() as T);
      } else {
        console.error("No such document!");
      }
    });
    return sub;
  } catch (error) {
    console.error("Error fetching document: ", error);
    throw error;
  }
};
// 특정 조건으로 데이터 검색 함수
export const findData = async <T>(
  collectionName: string,
  ...queries: [string, WhereFilterOp, unknown][]
) => {
  const q = query(
    collection(db, collectionName),
    ...queries.map(([fieldName, operator, value]) =>
      where(fieldName, operator, value)
    )
  );
  const querySnapshot = await getDocs(q);
  const dataList: (T & FirebaseDocData)[] = [];
  querySnapshot.forEach((doc) => {
    dataList.push({ id: doc.id, ...doc.data() } as T & FirebaseDocData);
  });
  return dataList;
};

// 필드 값으로 데이터 검색 함수
export const searchData = async <T>(
  collectionName: string,
  ...queries: [string, unknown][]
) => {
  const formattedQueries: [string, WhereFilterOp, unknown][] = queries.map(
    ([fieldName, value]) => [fieldName, "==", value]
  );
  return findData<T>(collectionName, ...formattedQueries);
};
