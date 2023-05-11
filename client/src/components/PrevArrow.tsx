import { MdOutlineArrowBackIos } from "react-icons/md";

type PrevArrowProps = {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

function PrevArrow({ onClick }: PrevArrowProps) {
  return (
    <button
      onClick={onClick}
      className="absolute left-5 top-[50%] z-10 -translate-x-0 translate-y-[-50%] cursor-pointer rounded-full bg-black/20 p-2 text-white"
    >
      <MdOutlineArrowBackIos size={27} />
    </button>
  );
}

export default PrevArrow;
