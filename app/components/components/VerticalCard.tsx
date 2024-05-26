import { Path } from "@/data/courses";
import { CiClock2 } from "react-icons/ci";
import { IoMenuOutline } from "react-icons/io5";
import Image from "next/image";
const CARD_WIDTH = 270;
const MARGIN = 30;

const VerticalCard = ({ imgUrl, hours, title, lessons }: Path) => {
  return (
    <div
      className="relative flex flex-col shrink-0 cursor-pointer transition-transform]"
      style={{
        width: CARD_WIDTH,
        marginRight: MARGIN,
      }}
    >
        <div className="relative">
      <Image
        src={imgUrl}
        className="mb-3 h-[400px] w-full rounded-2xl object-cover brightness-75"
        alt={`A cover image for ${title} course`}
        width={270}
        height={400}
      />
      <div className="absolute z-50 text-white bottom-10 left-5 max-w-[240px]">
        <p className="text-3xl font-bold mb-4">{title}</p>
        <div className="flex flex-row items-center text-sm font-medium">
      <p className="mr-5 flex items-center justify-center gap-x-1">
        <CiClock2 />{hours} Ore
      </p>
      <p className="flex items-center justify-center gap-x-1">
        <IoMenuOutline />{lessons} Lezioni
      </p>
    </div>
      </div>
</div>
      
    </div>
  );
};

export default VerticalCard;
