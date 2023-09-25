"use client";
// components/ImageSplitter.tsx

import { useEffect, useRef } from "react";
import Image from "next/image";
import { Box } from "@mui/material";
import { styled } from "@mui/system";

const SliceContainer = styled(Box)({
  width: 850,
  height: 500,
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  perspective: "400px",
  cursor: "pointer",
});

const SliceImage = styled("div")({
  position: "absolute",
  zIndex: 1,
  backgroundRepeat: "no-repeat",
  transform: "rotateY(-50deg) scale(0.5)",
  opacity: 0,
  transformOrigin: "bottom",
  transition: "all 0.6s cubic-bezier(0.71, 0.05, 0.09, 0.91)",
});

interface Props {
  imageUrl: string;
}

const ImageSplitter: React.FC<Props> = ({ imageUrl }) => {
  const sliceDiv = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sliceDiv.current) return; // Make sure the ref is available

    const gridX = 4;
    const w = sliceDiv.current.offsetWidth;
    const h = sliceDiv.current.offsetHeight;
    const delay = 0.05;

    for (let x = 0; x < gridX; x++) {
      const width = (x * w) / gridX + "px";
      const div = document.createElement("div");
      sliceDiv.current.appendChild(div);
      div.style.left = width;
      div.style.top = "0";
      div.style.width = w / gridX + "px";
      div.style.height = h + "px";
      div.style.backgroundImage = `url(${imageUrl})`;
      div.style.backgroundPosition = `-${width}`;
      div.style.backgroundSize = w + "px";
      div.style.transitionDelay = x * delay + "s";
    }
  }, [imageUrl]);

  return (
    <SliceContainer
      ref={sliceDiv}
      onMouseOver={() => sliceDiv.current?.classList.add("active")}
      onMouseOut={() => sliceDiv.current?.classList.remove("active")}
    >
      <Image
        src={imageUrl}
        layout="fill"
        objectFit="cover"
        alt="background image"
      />
      <SliceImage />
    </SliceContainer>
  );
};

export default ImageSplitter;
