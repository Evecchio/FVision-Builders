import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  iconSize?: number;
  textSize?: string;
  showText?: boolean;
}

export function Logo({ 
  className, 
  iconSize = 40,
  textSize = "text-xl",
  showText = true
}: LogoProps) {
  return (
    <a href="#" className={cn("flex items-center gap-3 group", className)}>
      <img 
        src="/logo.png" 
        alt="FVision Logo" 
        style={{ height: iconSize }}
        className="object-contain transition-transform duration-300 group-hover:scale-105"
      />
      {showText && (
        <span className={cn("font-display font-bold tracking-tight text-white", textSize)}>
          FVISION
        </span>
      )}
    </a>
  );
}
