import { useState, useEffect } from "react";

export const useStorage = <T>(
  key: string,
  initialValue?: T,
  storageType: "local" | "session" = "local"
) => {
  const storage = storageType === "local" ? localStorage : sessionStorage;

  const setValue = (value?: T) => {
    try {
      if (value) storage.setItem(key, JSON.stringify(value));
      else storage.removeItem(key);
    } catch (error) {
      console.error("Error writing to storage", error);
    }
  };

  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = storage.getItem(key);
      if (item) return JSON.parse(item);
      console.log(initialValue);
      setValue(initialValue);
      return initialValue;
    } catch (error) {
      console.error("Error reading from storage", error);
      return initialValue;
    }
  });
  useEffect(() => {
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === key) {
        setStoredValue(e.newValue ? JSON.parse(e.newValue) : undefined);
      }
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, [key, storage]);

  return [storedValue, setValue] as [T, typeof setValue];
};
