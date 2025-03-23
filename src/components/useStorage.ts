import { useState, useEffect } from "react";

export const useStorage = <T>(
  key: string,
  initialValue?: T,
  storageType: "local" | "session" = "local"
) => {
  const storage = storageType === "local" ? localStorage : sessionStorage;

  const setValue = (value?: T) => {
    try {
      let newValue: undefined | string = undefined;
      if (value) {
        newValue = JSON.stringify(value);
        storage.setItem(key, newValue);
      } else storage.removeItem(key);

      const e: StorageEvent = new StorageEvent("storage", { key, newValue });
      window.dispatchEvent(e);
    } catch (error) {
      console.error("Error writing to storage", error);
    }
  };

  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = storage.getItem(key);
      if (item) return JSON.parse(item);
      setValue(initialValue);
      return initialValue;
    } catch (error) {
      console.error("Error reading from storage", error);
      return initialValue;
    }
  });
  useEffect(() => {
    const handleStorageChange = (e: StorageEvent) => {
      console.log(e.key, e, "dajwkldjawd");
      if (e.key === key) {
        setStoredValue(e.newValue ? JSON.parse(e.newValue) : undefined);
      }
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, [key, storage]);

  return [storedValue, setValue] as [T, typeof setValue];
};
