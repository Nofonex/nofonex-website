"use client"

import { useEffect, useState } from "react"
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { MessageSquare, Users, FileText, AlertTriangle, CheckCircle, Flag } from "lucide-react"

export default function DashboardClient() {
  const { data: session, status } = useSession()
  const router = useRouter()
  const [mounted, setMounted] = useState(false)

  // Mock data for client-side rendering
  const [stats, setStats] = useState({
    pendingComments: 0,
    totalComments: 0,
    reportedComments: 0,
    totalUsers: 0,
  })

  useEffect(() => {
    setMounted(true)
    if (status === "unauthenticated") {
      router.push("/login")
    }

    // In a real implementation, you would fetch this data from an API
    if (status === "authenticated" && session?.user?.role === "admin") {
      // Simulate API call
      setStats({
        pendingComments: 3,
        totalComments: 25,
        reportedComments: 1,
        totalUsers: 15,
      })
    }
  }, [status, session, router])

  // Don't render anything on the server
  if (!mounted) return null

  // Show loading state while checking authentication
  if (status === "loading") {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse flex flex-col items-center">
          <div className="h-6 w-48 bg-gray-200 rounded mb-2"></div>
          <div className="h-4 w-32 bg-gray-200 rounded"></div>
        </div>
      </div>
    )
  }

  // If authenticated, show the dashboard
  if (status === "authenticated") {
    return (
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold mb-2">Dashboard</h1>
          <p className="text-gray-500">Welcome back, {session?.user?.name || "User"}</p>
        </div>

        {session?.user.role === "admin" ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-medium">Comments</h3>
                    <p className="text-3xl font-bold mt-2">{stats.totalComments}</p>
                  </div>
                  <div className="p-3 bg-blue-50 rounded-full">
                    <MessageSquare className="h-6 w-6 text-blue-500" />
                  </div>
                </div>
                <div className="mt-4">
                  <div className="flex items-center text-sm text-amber-600">
                    <AlertTriangle size={16} className="mr-1" />
                    {stats.pendingComments} pending approval
                  </div>
                  {stats.reportedComments > 0 && (
                    <div className="flex items-center mt-1 text-sm text-red-600">
                      <Flag size={16} className="mr-1" />
                      {stats.reportedComments} reported
                    </div>
                  )}
                </div>
                <div className="mt-4">
                  <Link href="/dashboard/comments" className="text-sm text-blue-600 hover:text-blue-800 font-medium">
                    Manage Comments →
                  </Link>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-medium">Users</h3>
                    <p className="text-3xl font-bold mt-2">{stats.totalUsers}</p>
                  </div>
                  <div className="p-3 bg-green-50 rounded-full">
                    <Users className="h-6 w-6 text-green-500" />
                  </div>
                </div>
                <div className="mt-4">
                  <div className="flex items-center text-sm text-green-600">
                    <CheckCircle size={16} className="mr-1" />
                    All users active
                  </div>
                </div>
                <div className="mt-4">
                  <Link href="/dashboard/users" className="text-sm text-blue-600 hover:text-blue-800 font-medium">
                    Manage Users →
                  </Link>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-medium">Blog Posts</h3>
                    <p className="text-3xl font-bold mt-2">4</p>
                  </div>
                  <div className="p-3 bg-purple-50 rounded-full">
                    <FileText className="h-6 w-6 text-purple-500" />
                  </div>
                </div>
                <div className="mt-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <FileText size={16} className="mr-1" />
                    All posts published
                  </div>
                </div>
                <div className="mt-4">
                  <Link href="/dashboard/posts" className="text-sm text-blue-600 hover:text-blue-800 font-medium">
                    Manage Posts →
                  </Link>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                <h3 className="text-lg font-medium mb-4">Recent Comments</h3>
                <p className="text-gray-500 text-center py-6">Loading recent comments...</p>
                <div className="mt-4 text-center">
                  <Link href="/dashboard/comments" className="text-sm text-blue-600 hover:text-blue-800 font-medium">
                    View All Comments →
                  </Link>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                <h3 className="text-lg font-medium mb-4">Comment Activity</h3>
                <p className="text-gray-500 text-center py-6">Loading activity chart...</p>
                <div className="mt-4 text-center">
                  <button className="text-sm text-blue-600 hover:text-blue-800 font-medium">View Analytics →</button>
                </div>
              </div>
            </div>
          </>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
              <h3 className="text-lg font-medium mb-4">Your Profile</h3>
              <div className="space-y-2">
                <p>
                  <span className="font-medium">Name:</span> {session?.user?.name}
                </p>
                <p>
                  <span className="font-medium">Email:</span> {session?.user?.email}
                </p>
                <Link href="/profile/edit" className="mt-3 text-sm text-blue-600 hover:text-blue-500 inline-block">
                  Edit Profile
                </Link>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
              <h3 className="text-lg font-medium mb-4">Recent Comments</h3>
              <p className="text-gray-600">You haven't made any comments yet.</p>
              <button className="mt-3 text-sm text-blue-600 hover:text-blue-500">View All Comments</button>
            </div>
          </div>
        )}
      </div>
    )
  }

  // This should never be reached due to the redirect, but just in case
  return null
}
