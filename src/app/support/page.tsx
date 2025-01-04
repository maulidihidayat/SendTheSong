import Button from "@/Components/Templates/Button";
import ButtonWhite from "@/Components/Templates/ButtonWhite";
import React from "react";

export default function page() {
  return (
    <div className="mt-32 mb-40 md:mt-4 md:mb-6">
      <div className="flex flex-col justify-center items-center p-8">
        <h1 className="font-inter text-3xl md:text-5xl mb-6 font-normal">
          Support <span className="font-reenie font-normal  text-4xl">SendTheSong</span>
        </h1>
        <p className="font-inter text-center md:max-w-3xl ">
          SendTheSing is and will always be completely free to use! However, if
          you'd like to support the developer and server costs, you can make
          voluntary contribution.Any amount id deeply appreciated and helps keep
          this service running smoothly for everyone :){" "}
        </p>
        <div className="flex flex-col gap-2 mt-8 md:flex-row">
          <Button
            name="Support SendTheSong (Saweria)"
            link="https://saweria.co/harukaaaa"
          />
          <Button name="Support SendTheSong (SociaBuzz)" link="/" />
        </div>
        <p className="font-inter text-sm mt-4 text-center">
          Accept payments from outside indonesia
        </p>
      </div>
    </div>
  );
}
