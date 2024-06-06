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

      
      <div className="reserve-nick">
        <CyberButton title="Free nickname" description="Reserve your exclusive nickname today! The in-game nickname must be a minimum of three characters long. Basic nicknames will be free upon the game's release!" className="free-nickname" />
        {/* <CyberButton title="Discord Server" className="w-fit" /> */}
      </div>
    </div>
  );
}
