import { useState, useEffect } from "react";

export const useDebounce = <T>(value: T, delay: number): T => {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
        const sti = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);

        return () => {
            clearTimeout(sti);
        };
    }, [value, delay]);

    return debouncedValue;
};

