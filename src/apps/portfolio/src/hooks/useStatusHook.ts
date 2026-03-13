import { useEffect, useState } from "react";

export default function useStatusHook<T>(
  defaultValue: T,
  resetTimeMS: number = 5000,
): [T, React.Dispatch<React.SetStateAction<T>>] {
  const [status, setStatus] = useState(defaultValue);

  useEffect(() => {
    const timeOutId = setTimeout(() => setStatus(defaultValue), resetTimeMS);

    return () => clearTimeout(timeOutId);
  }, [status, resetTimeMS]);

  return [status, setStatus];
}
