import Button from "@/Components/Templates/Button";
import React from "react";

export default function page() {
  return (
    <div className="px-4 space-y-4 mb-80 md:mb-24 md:mt-16 sm:px-32">
      <form action="/" className="font-inter flex flex-col gap-4 mt-10 ">
        <label htmlFor="name" className="font-semibold">Recipient Name</label>
        <input type="text" name="name" id="name"  className="border p-3 text-sm rounded-md" placeholder="Enter recipient name" />

        <label htmlFor="message" className="font-semibold">Message</label>
        <textarea name="message" id="message"  className="border p-3 py-6 text-sm rounded-md" placeholder="Enter your message" />

        <label htmlFor="song" className="font-semibold">Song</label>
        <select name="song" id="song" className="border p-3 bg-white rounded-md text-sm">
          <option value="song" >Search for a song</option>
          <option value="song1">Wide Wake - Kety Perry</option>
          <option value="song2">About you - the 1975</option>
          <option value="song3">December - udin</option>
          <option value="song4">Anchor - Novo Amor</option>
          <option value="song5">Love Story - Taylor Swift</option>
        </select>
        {/* <input type="text" name="song" id="song"  className="border p-3 rounded-md" placeholder="Enter the song" /> */}
          <Button name="sumbit" link="/" />
        {/* <div className="flex justify-center">
        </div> */}
      </form>

    </div>
  );
}
