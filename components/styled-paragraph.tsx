import type React from "react"

interface StyledParagraphProps {
  children: React.ReactNode
  variant?: "default" | "highlight" | "callout" | "quote"
  bgColor?: "purple" | "orange" | "blue" | "green" | "none"
}

export default function StyledParagraph({ children, variant = "default", bgColor = "none" }: StyledParagraphProps) {
  const baseStyles = "my-6 leading-relaxed text-lg"

  const variantStyles = {
    default: "",
    highlight: "border-l-4 border-primary pl-4 italic",
    callout: "rounded-lg p-6 shadow-md",
    quote: "text-xl italic font-serif border-l-4 border-gray-300 pl-6 py-2",
  }

  const bgColorStyles = {
    none: "",
    purple: "bg-purple-100 text-purple-900",
    orange: "bg-orange-100 text-orange-900",
    blue: "bg-blue-100 text-blue-900",
    green: "bg-green-100 text-green-900",
  }

  return (
    <div
      className={`
      ${baseStyles} 
      ${variantStyles[variant]} 
      ${bgColor !== "none" ? bgColorStyles[bgColor] : ""}
      ${variant === "callout" && bgColor === "none" ? "bg-gray-50" : ""}
    `}
    >
      {children}
    </div>
  )
}
