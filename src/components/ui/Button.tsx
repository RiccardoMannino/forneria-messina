import { cn } from "@/lib/utils";
import React from "react";

export default function Button({
  children,
  onClick,
  className,
  type,
}: {
  children: React.ReactNode;
  type?: "submit";
  onClick?: () => void;
  className?: string;
}) {
  return (
    <button
      className={cn(
        `rounded-md px-4 py-2 font-semibold text-white pad:text-base xmd:text-lg`,
        className,
      )}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
}
