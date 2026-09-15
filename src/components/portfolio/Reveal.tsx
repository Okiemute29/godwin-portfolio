import { HTMLAttributes, ReactNode } from "react";
import { useReveal } from "@/hooks/use-reveal";
import { cn } from "@/lib/utils";

interface RevealProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  as?: "div";
  scale?: boolean;
  delayMs?: number;
}

/** Wraps children in a restrained reveal-on-scroll transition. */
const Reveal = ({ children, className, scale = false, delayMs = 0, style, ...props }: RevealProps) => {
  const { ref, isVisible } = useReveal<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={cn(scale ? "reveal-scale" : "reveal", isVisible && "is-visible", className)}
      style={{ transitionDelay: delayMs ? `${delayMs}ms` : undefined, ...style }}
      {...props}
    >
      {children}
    </div>
  );
};

export default Reveal;
