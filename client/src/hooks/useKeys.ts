import { useEffect } from "react";

export function useKeys(keys: string[], action: (e: KeyboardEvent | null) => void) {
  useEffect(() => {
    const pressedKeys = new Set();

    const handleKeyDown = (e: KeyboardEvent) => {
      pressedKeys.add(e.key);
      //compare supplied keys with pressed
      if (keys.every((key) => pressedKeys.has(key))) {
        action(e || null);
      }
    };

    const handleKeyUp = () => {
      pressedKeys.clear();
    };

    document.body.addEventListener("keydown", handleKeyDown);
    document.body.addEventListener("keyup", handleKeyUp);
    return () => {
      document.body.removeEventListener("keydown", handleKeyDown);
      document.body.removeEventListener("keyup", handleKeyUp);
    };
  }, [keys, action]);
}
