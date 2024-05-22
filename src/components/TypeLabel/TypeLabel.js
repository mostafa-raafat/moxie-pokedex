import { colorsType } from "@utils/const";

const TypeLabel = ({ type }) => {
  return (
    <span
      className={`mx-1 w-24 rounded-lg p-2 text-center text-base font-black ${
        colorsType[type.name]
      } text-white`}
    >
      {type.name}
    </span>
  );
};

export default TypeLabel;
