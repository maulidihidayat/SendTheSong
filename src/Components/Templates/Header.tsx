"use client";
import { useState } from "react";
import { Menu } from "lucide-react"; // Importing Menu icon from Lucide
import Link from "next/link";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="flex justify-between items-center p-4 bg-white border-b border-b-slate-300 border-gray-200">
      <Link href={"/"} className="font-reenie text-3xl">sendthesongs</Link>
      {/* Desktop Navigation */}
      <nav className="hidden md:flex md:gap-4">
        <div className="text-md font-inter text-black/70 flex flex-row gap-4">
          <Link href={"/"} className="flex justify-center p-2">
            Submit
          </Link>
          <Link href={"/browse"} className="flex justify-center p-2">
            Browse
          </Link>
          <Link href={"/"} className="flex justify-center p-2">
            History
          </Link>
          <Link href={"/support"} className="flex justify-center p-2">
            Support
          </Link>
        </div>
      </nav>
      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button onClick={toggleMenu} aria-label="Toggle menu">
          <Menu className="h-6 w-6" />
        </button>
      </div>
      {/* Mobile Navigation */}
      <nav
        className={`absolute top-16 right-0 bg-white p-10 w-full md:hidden ${
          isMenuOpen ? "block" : "hidden"
        }`}
      >
        
        <div className="text-md font-inter text-black/70 flex flex-col gap-4">
          <Link
            href={"/submit"}
            className="flex justify-center border-b p-2"
          >
            Submit
          </Link>
          <Link
            href={"/browse"}
            className="flex justify-center border-b p-2"
          >
            Browse
          </Link>
          <Link
            href={"/browse"}
            className="flex justify-center border-b p-2"
          >
            History
          </Link>
          <Link
            href={"/support"}
            className="flex justify-center border-b p-2"
          >
            Support
          </Link>
        </div>
      </nav>
    </header>
  );
}
