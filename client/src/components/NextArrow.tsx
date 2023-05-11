import { MdOutlineArrowForwardIos } from "react-icons/md";

type NextArrowPros = {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

function NextArrow({ onClick }: NextArrowPros) {
  return (
    <button
      onClick={onClick}
      className="absolute right-5 top-[50%] z-10 -translate-x-0 translate-y-[-50%] cursor-pointer rounded-full bg-black/20 p-2 text-white"
    >
      <MdOutlineArrowForwardIos size={27} />
    </button>
  );
}

export default NextArrow;
