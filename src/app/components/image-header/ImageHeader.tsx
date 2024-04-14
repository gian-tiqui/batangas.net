import { news } from "@/app/utils/News";
import Image from "next/image";

const ImageHeader = () => {
  return (
    <div className="absolute mt-10 md:mt-0 top-0 right-0 z-0">
      <Image
        src={news[0].urlToImage}
        alt="batangas.net"
        height={10000}
        width={10000}
        className="h-auto w-[900px] md:rounded-es-full bg-blend-darken filter dark:brightness-[40%]"
      />
    </div>
  );
};

export default ImageHeader;
