import { urlFor } from "@/sanity/lib/urlFor";
import Image from "next/image";

interface PortableTextImageProps {
  value: {
    alt: string;
    asset: {
      _ref: string;
    };
    imageWidth: number;
    imageHeight: number;
  };
}

export const PortableTextImage = (props: PortableTextImageProps) => {
  const { alt, asset, imageWidth, imageHeight } = props.value;

  if (!asset || !asset._ref) {
    return <div>Image not available</div>;
  }

  const url = urlFor(asset._ref).url();

  return <Image src={url} alt={alt} width={imageWidth} height={imageHeight} />;
};
