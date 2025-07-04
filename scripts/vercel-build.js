const { execSync } = require("child_process")

console.log("Starting Vercel build process...")

try {
  // Run Prisma generate explicitly
  console.log("Generating Prisma client...")
  execSync("npx prisma generate", { stdio: "inherit" })
  console.log("Prisma client generated successfully!")

  // Run Next.js build
  console.log("Starting Next.js build...")
  execSync("next build", { stdio: "inherit" })
  console.log("Next.js build completed successfully!")
} catch (error) {
  console.error("Build process failed:", error)
  process.exit(1)
}
