import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";

interface ButtonProps {
  name: string;
  link: string;
}

export default function Button({ name, link }: ButtonProps) {
  return (
    <div className="flex items-center">
      <Link
        href={link}
        className="inline-flex p-8 items-center justify-center gap-2 whitespace-nowrap border-black/20 border-2 text-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-black/90 text-white shadow hover:bg-black/80 rounded-md w-full py-2 px-4 md:px-6 lg:px-8 font-semibold "
      >
        {name}
        <ArrowRight />
      </Link>
    </div>
  );
}