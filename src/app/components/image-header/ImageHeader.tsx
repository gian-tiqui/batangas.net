import { news } from "@/app/utils/News";
import Image from "next/image";

const ImageHeader = () => {
  return (
    <div className="absolute top-0 right-0 z-0">
      <Image
        src={news[0].urlToImage}
        alt="batangas.net"
        height={10000}
        width={10000}
        className="h-auto w-[900px] rounded-es-full bg-blend-darken"
        style={{ filter: "brightness(40%)" }}
      />
    </div>
  );
};

export default ImageHeader;
