import { ArrowRight, Search } from "lucide-react";
import Link from "next/link";
import React from "react";

interface ButtonWhite {
  name: string;
  link: string;
}
export default function ButtonWhite({ name, link }: ButtonWhite) {
  return (
    <div className="items-center flex ">
      <Link
        href={link}
        className="inline-flex items-center justify-center  gap-2 border-black/20 border  text-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-white text-black/90 shadow hover:bg-gray-300 rounded-md w-full h-10 px-20 md:px-6  font-semibold sm:w-fit">
        {name}
        <Search/>
      </Link>
    </div>
  );
}
