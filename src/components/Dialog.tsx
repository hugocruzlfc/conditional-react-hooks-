import { useRef } from "react";
import { useOutsideClick, useScrollLock } from "../hooks";

export function Dialog({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  let elementRef = useRef<HTMLDivElement | null>(null);

  useOutsideClick(isOpen, elementRef, () => {
    onClose();
  });
  useScrollLock(isOpen);

  return isOpen ? (
    <div
      ref={elementRef}
      role="dialog"
    >
      <h1> Hi Dialog</h1>
    </div>
  ) : null;
}
