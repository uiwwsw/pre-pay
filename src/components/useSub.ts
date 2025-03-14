import { subscribeToData } from "%/storage";
import { useEffect, useState } from "react";

export const useSub = <T>(documentId: string) => {
  const [data, setData] = useState<T>();
  useEffect(() => {
    const sub = subscribeToData<T>(documentId, setData);
    return () => {
      sub();
    };
  }, []);
  return data;
};
