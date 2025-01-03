import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";

interface Button {
  name: string;
  link:string;
}
export default function Button({name ,link} : Button) {
  return (
    <div className=" items-center flex ">
      <Link href={link} className="inline-flex items-center justify-center gap-2 whitespace-nowrap  border-black/20 border-2 text-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-black/90 text-white shadow hover:bg-black/90 rounded-md w-full h-10 px-20 md:px-6 font-semibold sm:w-fit">
        {name}
        <ArrowRight />
      </Link>
    </div>
  );
}
