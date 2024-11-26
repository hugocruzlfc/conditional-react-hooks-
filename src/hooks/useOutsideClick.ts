import { useEffect } from "react";

export function useOutsideClick(
  enabled: boolean,
  elementRef: React.MutableRefObject<HTMLElement | null>,
  cb: () => void
) {
  useEffect(() => {
    if (!enabled) return;

    let element = elementRef.current;
    if (!element) return;

    function handle(e: MouseEvent) {
      if (!element?.contains(e.target as Node)) {
        cb();
      }
    }

    document.addEventListener("click", handle);

    return () => {
      document.removeEventListener("click", handle);
    };
  }, [enabled, elementRef, cb]);
}
