import React from "react"

interface DropCapProps {
  children: React.ReactNode
  color?: "primary" | "secondary" | "purple" | "orange" | "blue"
}

export default function DropCap({ children, color = "primary" }: DropCapProps) {
  const colorClasses = {
    primary: "text-primary",
    secondary: "text-secondary",
    purple: "text-purple-600",
    orange: "text-orange-600",
    blue: "text-blue-600",
  }

  // Extract the first letter and the rest of the text
  const content = React.Children.toArray(children)[0]

  if (typeof content !== "string") {
    return <p className="my-6 leading-relaxed text-lg">{children}</p>
  }

  const firstLetter = content.charAt(0)
  const restOfText = content.slice(1)

  return (
    <p className="my-6 leading-relaxed text-lg">
      <span className={`float-left text-7xl font-bold mr-2 mt-2 ${colorClasses[color]}`}>{firstLetter}</span>
      {restOfText}
    </p>
  )
}
