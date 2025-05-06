'use client'
import { usePathname } from "next/navigation";

// This is a custom hook that returns the isActive function
export function useIsActive() {
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname === path ? "text-blue-500 font-semibold" : "text-black";
  };

  return isActive;
}
