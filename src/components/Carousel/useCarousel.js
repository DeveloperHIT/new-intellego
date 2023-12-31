import { useRef, useState, useCallback } from "react";

export default function useCarousel(props) {
  const carouselRef = useRef(null);

  const [currentIndex, setCurrentIndex] = useState(props?.initialSlide || 0);

  const [nav, setNav] = useState(undefined);

  const carouselSettings = {
    arrows: false,
    dots: !!props?.customPaging,

    beforeChange: (current, next) => setCurrentIndex(next),
    ...props,
    fade: !!props?.fade,
  };

  const onSetNav = useCallback(() => {
    if (carouselRef.current) {
      setNav(carouselRef.current);
    }
  }, []);

  const onPrev = useCallback(() => {
    if (carouselRef.current) {
      carouselRef.current.slickPrev();
    }
  }, []);

  const onNext = useCallback(() => {
    if (carouselRef.current) {
      carouselRef.current.slickNext();
    }
  }, []);

  const onTogo = useCallback((index) => {
    if (carouselRef.current) {
      carouselRef.current.slickGoTo(index);
    }
  }, []);

  return {
    nav,
    carouselRef,
    currentIndex,
    carouselSettings,
    onPrev,
    onNext,
    onTogo,
    onSetNav,
    setNav,
    setCurrentIndex,
  };
}
