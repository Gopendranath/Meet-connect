"use client"

import { useTheme } from "next-themes"
import { Toaster as Sonner, ToasterProps } from "sonner"

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme()

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group border-none text-white"
      style={
        {
          "--normal-bg": "bg-dark-1",
          "--normal-text": "text-white",
          "--normal-border": "none",
        } as React.CSSProperties
      }
      {...props}
    />
  )
}

export { Toaster }
