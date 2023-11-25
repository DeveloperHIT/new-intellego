import { useState, useEffect, useCallback, RefObject } from "react";

export function useBoundingClientRect<T extends HTMLElement>(
  containerRef: RefObject<T>,
) {
  const [container, setContainer] = useState<DOMRect | null>(null);

  const handleResize = useCallback(() => {
    if (containerRef.current) {
      const value = containerRef.current.getBoundingClientRect();
      setContainer(value);
    }
  }, [containerRef]);

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, [handleResize]);

  return container;
}
