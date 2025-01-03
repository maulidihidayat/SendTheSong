import Card from "@/Components/Info/Card";
import CardnoButton from "@/Components/Info/CardNoButton";
import CardWhiteButton from "@/Components/Info/CardWhiteButton";
import DescriptionFeedback from "@/Components/Info/DescriptionFeedback";
import InfiniteScroll from "@/Components/Info/InfiniteScroll";
import InfiniteScrollBack from "@/Components/Info/InfiniteScroolBAck";
import Button from "@/Components/Templates/Button";
import ButtonStatic from "@/Components/Templates/ButtonStatic";
import ButtonWhite from "@/Components/Templates/ButtonWhite";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center mt-4 py-2 md:mt-24">
      <h1 className="font-reenie text-3xl md:text-5xl text-center max-w-96 md:max-w-2xl">
        a bunch of the untold words, sent through the songs
      </h1>
      <p className="font-inter text-slate-500 p-4 text-center text-sm md:text-lg font-normal">
        Express your untold message through the song.
      </p>
      <div className="space-y-2 md:space-y-0 md:flex md:justify-center md:max-w-3xl md:mx-auto  md:items-center md:gap-4 md:p-3">
        <Button link="/submit" name={"Tell Your Story"} />
        <ButtonWhite link="/browse" name={"Browse the stories"} />
        <ButtonStatic link="/browse" name={"Support SendTheSong"} />
      </div>
      <DescriptionFeedback />
      <div className="p-6 inset-0 space-y-6 md:space-y-0 md:flex md:flex-row md:justify-center md:gap-2 ">
        <Card
          description="Choose a song and write a heartfelt message to someone special."
          title="Share Your Message"
        />
        <CardWhiteButton
          description="Find messages that were written for you. Search by your name to discover heartfelt dedications."
          title="Browse Messages"
        />
        <CardnoButton
          description="You can click on any message card to read the full story and listen to the chosen song!"
          title="Details Message"
        />
      </div>
      <div className="overflow-hidden relative w-full max-w-screen-sm md:max-w-full border p-4">
        <div className="flex flex-col space-y-6">
          <InfiniteScroll />
          <InfiniteScrollBack />
        </div>
      </div>
    </div>
  );
}
