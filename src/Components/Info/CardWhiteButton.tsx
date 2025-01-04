import React from "react";
import ButtonWhite from "../Templates/ButtonWhite";

interface CardProps {
  title: string;
  description: string;
}
const CardWhiteButton = ({ title, description }: CardProps) => {
  return (
    <div className="flex flex-col justify-center items-center  p-6 border rounded-lg transition-colors hover:border-gray-400">
      <div className="items-center">
        <h1 className="mb-2 font-reenie text-2xl text-black sm:mb-4 ">
          {title}
        </h1>
        <p className="mb-5 font-normal text-sm leading-[22px] text-gray-600 sm:mb-6 sm:text-base">
          {description}
        </p>
        <ButtonWhite link="/" name="Browse Message" />
      </div>
      <div className="w-full ">
      </div>
    </div>
  );
};

export default CardWhiteButton;
