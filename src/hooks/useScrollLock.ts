import { useEffect } from "react";

export function useScrollLock(enabled: boolean) {
  useEffect(() => {
    if (!enabled) return;

    let previous = document.documentElement.style.overflow;

    document.documentElement.style.overflow = "hidden";

    return () => {
      document.documentElement.style.overflow = previous;
    };
  }, [enabled]);
}
