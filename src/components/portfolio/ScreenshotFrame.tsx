import { ImageIcon } from "lucide-react";
import { ProjectImage } from "@/data/projects";
import { cn } from "@/lib/utils";

interface ScreenshotFrameProps {
  image: ProjectImage;
  className?: string;
  priority?: boolean;
}

/**
 * Renders a project screenshot, or — when no `src` is provided yet — a
 * clearly-labelled placeholder sized to the same frame so the layout is
 * final before real screenshots exist. Swap in a real image by adding
 * `src` to the corresponding entry in src/data/projects.ts.
 */
const ScreenshotFrame = ({ image, className, priority = false }: ScreenshotFrameProps) => {
  if (image.src) {
    return (
      <div className={cn("overflow-hidden rounded-sm border border-border bg-card", className)}>
        <img
          src={image.src}
          alt={image.alt}
          loading={priority ? "eager" : "lazy"}
          className="h-full w-full object-cover"
        />
      </div>
    );
  }

  return (
    <div
      className={cn(
        "relative flex flex-col items-center justify-center gap-3 overflow-hidden rounded-sm border border-dashed border-border bg-secondary/40 px-6 text-center",
        className
      )}
      role="img"
      aria-label={image.alt}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />
      <ImageIcon className="relative h-6 w-6 text-muted-foreground/70" strokeWidth={1.5} />
      <p className="relative text-xs text-muted-foreground/80">{image.alt}</p>
      <p className="relative text-[0.65rem] uppercase tracking-wider text-muted-foreground/50">
        Screenshot pending
      </p>
    </div>
  );
};

export default ScreenshotFrame;
