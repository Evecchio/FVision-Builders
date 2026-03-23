import { useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface SpotlightCardProps {
  children: React.ReactNode;
  className?: string;
  spotlightColor?: string;
}

export function SpotlightCard({ 
  children, 
  className, 
  spotlightColor = "rgba(45, 212, 191, 0.1)" // Refined opacity
}: SpotlightCardProps) {
  const divRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setOpacity(1)}
      onMouseLeave={() => setOpacity(0)}
      className={cn(
        "glass-card relative overflow-hidden transition-all duration-300 hover:border-primary/50 hover:shadow-primary/5 group",
        className
      )}
    >
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-500 z-0 bg-[radial-gradient(800px_circle_at_var(--x)_var(--y),var(--color),transparent_40%)]"
        style={{
          opacity,
          "--x": `${position.x}px`,
          "--y": `${position.y}px`,
          "--color": spotlightColor,
        } as any}
      />
      <div className="relative z-10 h-full">
        {children}
      </div>
    </div>
  );
}
