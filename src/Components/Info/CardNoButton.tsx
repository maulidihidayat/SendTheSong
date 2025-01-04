import React from "react";

interface CardnoProps {
    title :string;
    description :string;
}
const CardnoButton = ({title , description} : CardnoProps) => {
  return (
    <div className="flex flex-col items-center p-6 border rounded-lg transition-colors hover:border-gray-400">
      <div className="">
        <h1 className="mb-2 font-reenie text-2xl text-black sm:mb-4 ">
          {title}
        </h1>
        <p className="mb-5 font-normal text-sm leading-[22px] text-gray-600 sm:mb-6 sm:text-base">
          {description}
        </p>
      </div>
    </div>
  );
};

export default CardnoButton;
