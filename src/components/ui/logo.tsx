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
        {/* Logo Icon - Abstract Eye / AI Vision */}
        <svg
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]"
        >
          <defs>
            <linearGradient id="logo-main" x1="0" y1="8" x2="48" y2="40" gradientUnits="userSpaceOnUse">
              <stop stopColor="#3B82F6" />
              <stop offset="0.5" stopColor="#6366F1" />
              <stop offset="1" stopColor="#8B5CF6" />
            </linearGradient>
            <linearGradient id="logo-iris" x1="18" y1="16" x2="30" y2="32" gradientUnits="userSpaceOnUse">
              <stop stopColor="#8B5CF6" />
              <stop offset="1" stopColor="#3B82F6" />
            </linearGradient>
          </defs>
          {/* Outer eye shape - two arcs forming a lens */}
          <path
            d="M2 24C2 24 10 8 24 8C38 8 46 24 46 24C46 24 38 40 24 40C10 40 2 24 2 24Z"
            stroke="url(#logo-main)"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          {/* Iris - hexagonal ring (tech/geometric feel) */}
          <path
            d="M24 14L31 19V29L24 34L17 29V19L24 14Z"
            stroke="url(#logo-main)"
            strokeWidth="2"
            strokeLinejoin="round"
            fill="none"
          />
          {/* Pupil - inner dot */}
          <circle cx="24" cy="24" r="4" fill="url(#logo-iris)" />
          {/* Connection nodes - small dots at key vertices */}
          <circle cx="24" cy="8" r="1.5" fill="#3B82F6" />
          <circle cx="24" cy="40" r="1.5" fill="#8B5CF6" />
          <circle cx="6" cy="24" r="1.5" fill="#3B82F6" />
          <circle cx="42" cy="24" r="1.5" fill="#8B5CF6" />
          {/* Neural connection lines from pupil to hexagon vertices */}
          <line x1="24" y1="20" x2="24" y2="14" stroke="#6366F1" strokeWidth="0.8" opacity="0.5" />
          <line x1="28" y1="22" x2="31" y2="19" stroke="#6366F1" strokeWidth="0.8" opacity="0.5" />
          <line x1="28" y1="26" x2="31" y2="29" stroke="#6366F1" strokeWidth="0.8" opacity="0.5" />
          <line x1="24" y1="28" x2="24" y2="34" stroke="#6366F1" strokeWidth="0.8" opacity="0.5" />
          <line x1="20" y1="26" x2="17" y2="29" stroke="#6366F1" strokeWidth="0.8" opacity="0.5" />
          <line x1="20" y1="22" x2="17" y2="19" stroke="#6366F1" strokeWidth="0.8" opacity="0.5" />
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
