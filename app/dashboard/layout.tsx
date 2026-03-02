import type React from "react"
import { getServerSession } from "next-auth/next"
import { redirect } from "next/navigation"
import Link from "next/link"
import { authOptions } from "@/lib/auth"
import { LayoutDashboard, MessageSquare, Users, FileText, Settings, LogOut } from "lucide-react"
import { Footer } from "@/components/footer"

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getServerSession(authOptions)

  // Check if user is authenticated
  if (!session) {
    redirect("/login?callbackUrl=/dashboard")
  }

  return (
    <>
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Sidebar */}
            <aside className="w-full md:w-64 shrink-0">
              <div className="bg-white rounded-lg shadow-md p-4">
                <nav className="space-y-1">
                  <Link
                    href="/dashboard"
                    className="flex items-center px-3 py-2 text-sm font-medium rounded-md hover:bg-gray-100"
                  >
                    <LayoutDashboard size={18} className="mr-2 text-gray-500" />
                    Dashboard
                  </Link>

                  {session.user.role === "admin" && (
                    <>
                      <Link
                        href="/dashboard/comments"
                        className="flex items-center px-3 py-2 text-sm font-medium rounded-md hover:bg-gray-100"
                      >
                        <MessageSquare size={18} className="mr-2 text-gray-500" />
                        Comments
                      </Link>

                      <Link
                        href="/dashboard/users"
                        className="flex items-center px-3 py-2 text-sm font-medium rounded-md hover:bg-gray-100"
                      >
                        <Users size={18} className="mr-2 text-gray-500" />
                        Users
                      </Link>

                      <Link
                        href="/dashboard/posts"
                        className="flex items-center px-3 py-2 text-sm font-medium rounded-md hover:bg-gray-100"
                      >
                        <FileText size={18} className="mr-2 text-gray-500" />
                        Blog Posts
                      </Link>
                    </>
                  )}

                  <Link
                    href="/dashboard/settings"
                    className="flex items-center px-3 py-2 text-sm font-medium rounded-md hover:bg-gray-100"
                  >
                    <Settings size={18} className="mr-2 text-gray-500" />
                    Settings
                  </Link>

                  <Link
                    href="/api/auth/signout"
                    className="flex items-center px-3 py-2 text-sm font-medium rounded-md hover:bg-gray-100 text-red-600"
                  >
                    <LogOut size={18} className="mr-2" />
                    Sign Out
                  </Link>
                </nav>
              </div>
            </aside>

            {/* Main content */}
            <main className="flex-1">
              <div className="bg-white rounded-lg shadow-md p-6">{children}</div>
            </main>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
