"use client";
import { useScroll } from "framer-motion";
import { useCallback, useEffect, useMemo, useState } from "react";

export function useOffsetTop(top = 0, options) {
  const { scrollY } = useScroll(options);

  const [value, setValue] = useState(false);

  const onOffSetTop = useCallback(() => {
    scrollY.on("change", (scrollHeight) => {
      if (scrollHeight > top) {
        setValue(true);
      } else {
        setValue(false);
      }
    });
  }, [scrollY, top]);

  useEffect(() => {
    onOffSetTop();
  }, [onOffSetTop]);

  return useMemo(() => value, [value]);
}
