// Components/Info/InfiniteScrollBack.tsx
"use client";
import React, { useState } from "react";
import ImageSlider from "./ImageSlider";

const InfiniteScrollBack: React.FC = () => {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <div
      className="overflow-x-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div
        className={`flex space-x-6 transition-transform duration-500 ${
          isPaused ? "animate-none" : "animate-loop-scroll-back"
        }`}
      >
        <div className="flex shrink-0 space-x-6 group-hover:paused">
          <ImageSlider
            message="masih inget how your smile made everything feel okay... i miss that feeling"
            name="novan"
            imageSrc="https://i.scdn.co/image/ab67616d0000b27321456c115d2f0f44f4630a63"
            singer="Head in The Clouds - 88rising joji"
          />
          <ImageSlider
            message="i still keep the letter u wrote... some words just hit different now"
            name="radit"
            imageSrc="https://i.scdn.co/image/ab67616d0000b273733e6d7818eef87d20df86b5"
            singer="Pluto Project - Rex Orange County"
          />
          <ImageSlider
            message="tiap lewat coffee shop itu i wonder if u still remember our promises"
            name="tara"
            imageSrc="https://i.scdn.co/image/ab67616d0000b2739da736813eb8d9de94d46828"
            singer="Khalid - The Box"
          />
          <ImageSlider
            message="i know we promised no goodbyes, tapi kadang life really gets in the way ya"
            name="kinan"
            imageSrc="https://i.scdn.co/image/ab67616d0000b2739e1cfc756886ac782e363d79"
            singer="Lil Nas X - Happier Than Ever"
          />
          <ImageSlider
            message="i know we promised no goodbyes, tapi kadang life really gets in the way ya"
            name="nayla"
            imageSrc="https://i.scdn.co/image/ab67616d0000b2739b7190e673e46271b2754aab"
            singer="Space Song - Beach House"
          />
          <ImageSlider
            message="everything reminds me of u, even that warteg tempat kita first hangout"
            name="jensen"
            imageSrc="https://i.scdn.co/image/ab67616d0000b273a1f060b534d1d9c859acc73f"
            singer="Billie Eilish - Bad Guy"
          />
        </div>
      </div>
    </div>
  );
};

export default InfiniteScrollBack;