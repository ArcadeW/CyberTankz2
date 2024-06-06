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

      <div className="flex flex-col items-center justify-center gap-4 p-5">
        <div className="overflow-y-auto">
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
            <a
              href="https://www.cybertankzforum.com/register/"
              className="reserve-btn px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
            >
              Reserve your nick here
            </a>
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
      </div>
    </div>
  );
}
