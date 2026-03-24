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
    <a href="/" className={cn("flex items-center gap-3 group", className)}>
      <div 
        className="relative flex items-center justify-center transition-transform duration-500 group-hover:rotate-[10deg]"
        style={{ width: iconSize, height: iconSize }}
      >
        {/* Logo Icon - Modern Geometric SVG */}
        <svg 
          viewBox="0 0 40 40" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]"
        >
          <path 
            d="M10 5H30C32.7614 5 35 7.23858 35 10V15L15 25L5 20V10C5 7.23858 7.23858 5 10 5Z" 
            fill="url(#logo-gradient-1)"
          />
          <path 
            d="M5 20L15 25L25 35H10C7.23858 35 5 32.7614 5 30V20Z" 
            fill="url(#logo-gradient-2)"
          />
          <defs>
            <linearGradient id="logo-gradient-1" x1="5" y1="5" x2="35" y2="25" gradientUnits="userSpaceOnUse">
              <stop stopColor="#3B82F6" />
              <stop offset="1" stopColor="#8B5CF6" />
            </linearGradient>
            <linearGradient id="logo-gradient-2" x1="5" y1="20" x2="25" y2="35" gradientUnits="userSpaceOnUse">
              <stop stopColor="#8B5CF6" />
              <stop offset="1" stopColor="#EC4899" />
            </linearGradient>
          </defs>
        </svg>
        
        {/* Subtle background glow */}
        <div className="absolute inset-0 bg-primary/20 blur-lg rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      </div>

      {showText && (
        <div className="flex flex-col leading-none">
          <span className={cn(
            "font-display font-black tracking-tighter text-white transition-colors duration-300 group-hover:text-primary", 
            textSize
          )}>
            FVISION
          </span>
          <span className="text-[10px] font-sans font-bold tracking-[0.2em] text-slate-500 uppercase mt-0.5">
            Consulting
          </span>
        </div>
      )}
    </a>
  );
}
