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
