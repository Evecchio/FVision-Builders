import { cn } from "@/lib/utils";

const FALLBACK_SRC =
  "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop";

interface AvatarProps {
  size?: "sm" | "md" | "lg";
  className?: string;
  alt?: string;
}

const sizeClasses = {
  sm: "w-8 h-8",
  md: "w-10 h-10",
  lg: "w-full h-full",
};

export function Avatar({ size = "md", className, alt = "Ezequiel" }: AvatarProps) {
  return (
    <img
      src="/Profile.png"
      alt={alt}
      className={cn(sizeClasses[size], "object-cover", className)}
      onError={(e) => {
        (e.target as HTMLImageElement).src = FALLBACK_SRC;
      }}
    />
  );
}
