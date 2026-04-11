import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import type { ReactNode } from "react";

interface ScrollAnimationProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "fade";
}

const prefersReducedMotion =
  typeof window !== "undefined"
    ? window.matchMedia("(prefers-reduced-motion: reduce)").matches
    : false;

const ScrollAnimation = ({
  children,
  className = "",
  delay = 0,
  direction = "up"
}: ScrollAnimationProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const getVariants = () => {
    const baseHidden = { opacity: 0 };
    const baseVisible = { opacity: 1, x: 0, y: 0 };

    if (prefersReducedMotion) {
      return { hidden: { opacity: 0 }, visible: { opacity: 1 } };
    }

    switch (direction) {
      case "up":
        return { hidden: { ...baseHidden, y: 24 }, visible: baseVisible };
      case "down":
        return { hidden: { ...baseHidden, y: -24 }, visible: baseVisible };
      case "left":
        return { hidden: { ...baseHidden, x: 24 }, visible: baseVisible };
      case "right":
        return { hidden: { ...baseHidden, x: -24 }, visible: baseVisible };
      case "fade":
      default:
        return { hidden: baseHidden, visible: baseVisible };
    }
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={getVariants()}
      transition={{
        duration: prefersReducedMotion ? 0 : 0.45,
        delay: prefersReducedMotion ? 0 : delay,
        ease: [0.25, 0.1, 0.25, 1]
      }}
    >
      {children}
    </motion.div>
  );
};

export default ScrollAnimation;
