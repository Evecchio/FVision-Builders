import { cn } from "@/lib/utils";
import { Aperture } from "lucide-react";

interface LogoProps {
  className?: string;
  iconSize?: number;
  textSize?: string;
}

export function Logo({ 
  className, 
  iconSize = 32,
  textSize = "text-xl"
}: LogoProps) {
  return (
    <a href="#" className={cn("flex items-center gap-3 group", className)}>
      <div 
        className="relative flex items-center justify-center rounded-xl bg-gradient-to-br from-primary to-blue-500 shadow-lg shadow-primary/20 group-hover:shadow-primary/40 transition-all duration-300 group-hover:scale-105"
        style={{ width: iconSize, height: iconSize }}
      >
        <Aperture className="text-white" size={iconSize * 0.6} strokeWidth={2.5} />
      </div>
      <span className={cn("font-bold tracking-tight", textSize)}>
        <span className="text-white">F</span>
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">Vision</span>
      </span>
    </a>
  );
}
