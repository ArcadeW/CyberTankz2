import { cn } from "@/lib/utils";

export default function CyberButton({
  title,
  symbol,
  className,
}: {
  title: string;
  symbol: string;
  className?: string;
}) {
  return (
    <button className={cn("cybr-btn", className)}>
      {title}
      <span aria-hidden>_</span>
      <span aria-hidden className="cybr-btn__glitch">
        {title}_
      </span>
      <span aria-hidden className="cybr-btn__tag">
        {symbol}
      </span>
    </button>
  );
}

import { cn } from "@/lib/utils";
import styles from "./glitch.module.scss";
import { distopianFont, inter } from "@/lib/font";
import CyberButton from "../button";

export default function GlitchSection({
  text,
  description,
}: {
  text: string;
  description: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col items-top justify-top min-h-screen",
        distopianFont.className,
        styles.body
      )}
    >
      <div className={styles.glitch}>
        {Array.from({ length: 9 }).map((_, index) => (
          <div key={index} className={styles.line}>
            {text}
          </div>
        ))}
      </div>
      <p className={cn("max-w-6xl text-center", inter.className)}>
        {description}
      </p>
      <div className="flex items-top justify-top gap-2 pt-5">
        <CyberButton title="Download Game" symbol="DWN" className="w-fit h-11" />
        {/* <CyberButton title="Download Game" className="w-fit" /> */}
      </div>
      <div className="flex items-top justify-top gap-2 pt-5">
        <CyberButton title="Discord Server" symbol="JOIN" className="w-fit h-12" />
        {/* <CyberButton title="Discord Server" className="w-fit" /> */}
      </div>
    </div>
  );
}


























import Button from "@/components/modules/home/button";
import GlitchSection from "@/components/modules/home/glitch-section";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col h-screen">
      <Image
        src="/wallpaper-new.png"
        alt="hero_wallpaper"
        width={1920}
        height={1080}
        className="absolute h-screen opacity-10 -z-10"
      />
      <GlitchSection
        text="CyberTankz"
        description=" It's time to embark on a journey across the battlefield where the
        past meets the present. The game will take you from 2017 to 2020 and
        offer you an unforgettable experience. With over 31 ranks to achieve,
        each map offers familiar yet new battles and challenges. Plenty of
        special quests and unique rewards await you to make you stand out on the
        battlefield. The future of CyberTankz will be developed based on your
        feedback, but rest assured that both new and old fan-favourite features
        are in store. Join us as we embark on a rewritten past with CyberTankz!"
      />

      <div className="flex flex-col items-center justify-center gap-4 p-5">
        {/* Free Nickname Box */}
        <div className="flex flex-col items-center justify-center p-5 bg-gray-100 rounded shadow-lg">
          <img
            src="https://i.imgur.com/bGiCzi1.png"
            alt="Free Nickname Logo"
            className="mb-4"
          />
          <h2 className="text-2xl font-bold mb-2">Free Nickname</h2>
          <p className="text-center mb-4">
            Reserve your exclusive nickname today! The in-game nickname must be a minimum of three characters long. Basic nicknames will be free upon the game's release!
          </p>
          <p className="text-center text-lg font-semibold mb-4">
            <strong>Price:</strong> For free
          </p>
          
      <div className="flex items-top justify-top gap-2 pt-5">
        <CyberButton title="Reserve your nick here" symbol="RESERVE" className="w-fit h-13" />
        {/* <CyberButton title="Reserve your nick here" className="w-fit" /> */}
      </div>

        </div>

        {/* Premium Nickname Box */}
        <div className="flex flex-col items-center justify-center p-5 bg-gray-100 rounded shadow-lg">
          <img
            src="https://i.imgur.com/DO8C8NG.png"
            alt="Premium Nickname Logo"
            className="mb-4"
          />
          <h2 className="text-2xl font-bold mb-2">Premium Nickname</h2>
          <p className="text-center mb-4">
            Do you consider yourself a tanker who enjoys feeling exclusive? Well, we have got just the thing for you: two-letter or number nicknames. With these unique nicknames, you will stand out in style. Are you ready to embrace your individuality with a stylish and iconic username?
          </p>
          <p className="text-center text-lg font-semibold mb-4">
            <strong>Price:</strong> $15
          </p>
          <a
            href="https://buy.stripe.com/5kA9DF4NE6bYe3edQV"
            className="reserve-btn px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
          >
            Reserve your nick here
          </a>
        </div>

        {/* Elite Nickname Box */}
        <div className="flex flex-col items-center justify-center p-5 bg-gray-100 rounded shadow-lg">
          <img
            src="https://i.imgur.com/eLK5cns.png"
            alt="Elite Nickname Logo"
            className="mb-4"
          />
          <h2 className="text-2xl font-bold mb-2">Elite Nickname</h2>
          <p className="text-center mb-4">
            A brand-new feature which was considered to be impossible in all Tanki versions, a nickname that contains one character. Now you can reserve premium one letter/number nicknames! Get your ticket today and start your unique journey!
          </p>
          <p className="text-center text-lg font-semibold mb-4">
            <strong>Price:</strong> $30
          </p>
          <a
            href="https://buy.stripe.com/fZecPRcg61VI3oAcMS"
            className="reserve-btn px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
          >
            Reserve your nick here
          </a>
        </div>
      </div>

    </main>
  );
}
