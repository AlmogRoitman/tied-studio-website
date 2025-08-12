import { Variants } from "framer-motion";

export const fadeIn: Variants = {
  initial: {
    opacity: 0,
    y: 60,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
};

export const staggerContainer: Variants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

export const slideInRight: Variants = {
  initial: {
    x: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

export const slideInLeft: Variants = {
  initial: {
    x: -100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

export const scaleIn: Variants = {
  initial: {
    scale: 0.8,
    opacity: 0,
  },
  animate: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export const textReveal: Variants = {
  initial: {
    y: "100%",
    opacity: 0,
  },
  animate: {
    y: "0%",
    opacity: 1,
    transition: {
      duration: 0.75,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
};

export const buttonHover = {
  scale: 1.05,
  transition: {
    duration: 0.2,
    ease: [0.4, 0, 0.2, 1],
  },
};

export const buttonTap = {
  scale: 0.95,
  transition: {
    duration: 0.1,
  },
};

export const cardHover = {
  y: -10,
  scale: 1.02,
  transition: {
    duration: 0.3,
    ease: "easeOut",
  },
};