import Image from "next/image";
import React from "react";

interface Component {
  name: string;
  message: string;
  imageSrc: string;
  singer: string
}
const ImageSlider = ({ name, message , imageSrc , singer}: Component) => {
  return (
    <div className=" rounded-xl border bg-card text-card-foreground shadow relative w-full max-w-xs overflow-hidden hover:bg-gray-950/[.05] transition-colors duration-200">
      <div className="flex flex-col space-y-1.5 p-6">
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium text-gray-400">
            to:
            <span className="text-sm font-medium text-gray-800">{name}</span>
          </figcaption>
        </div>
        <blockquote className="mt-2 text-3xl text-gray-800 font-reenie">
          {message}
        </blockquote>
      </div>
      <div className="flex items-center p-4 pt-0">
        <div className="flex items-center gap-2 w-full">
          <div className="flex-shrink-0 rounded-full">
            <Image
              src={imageSrc}
              alt="Pluto Projector by Rex Orange County"
              width="40"
              height="40"
              className=""
            />
          </div>
          <div className="flex-grow min-w-0">
            <div className="flex flex-wrap gap-1">
              <span className="inline-flex items-center rounded-full bg-slate-300/20 px-2.5 py-0.5 text-sm font-medium text-gray-800 truncate">
                {singer}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
