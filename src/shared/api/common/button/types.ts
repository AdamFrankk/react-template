import { ButtonHTMLAttributes } from "react";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  color?: "primary" | "secondary";
  variant?: "outline";
  size?: "sm" | "md" | "lg" | "xl";
};
