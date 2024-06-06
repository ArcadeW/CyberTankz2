import Link from "next/link";
import { links } from "./links";
import { cn } from "@/lib/utils";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="fixed top-0 flex items-center justify-between w-full h-14 border-b border-foreground/20 px-14">
      <Image src={"/logo.png"} alt="logo" width={50} height={50} />
      <ul className="flex items-center space-x-3">
        {links.map((link, index) => (
          <li key={index}>
            <Link
              href={link.url}
              className={cn(
                link.url.length === 0
                  ? "cursor-not-allowed text-foreground/60"
                  : "text-foreground hover:text-foreground/80"
              )}
            >
              {link.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
