"use client"

import { useEffect, useState } from "react"
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { User, Mail, Calendar, Edit } from "lucide-react"
import Link from "next/link"

export default function ProfilePageClient() {
  const { data: session, status } = useSession()
  const router = useRouter()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    if (status === "unauthenticated") {
      router.push("/login")
    }
  }, [status, router])

  // Don't render anything on the server
  if (!mounted) return null

  // Show loading state while checking authentication
  if (status === "loading") {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse flex flex-col items-center">
          <div className="h-24 w-24 bg-gray-200 rounded-full mb-4"></div>
          <div className="h-6 w-48 bg-gray-200 rounded mb-2"></div>
          <div className="h-4 w-32 bg-gray-200 rounded"></div>
        </div>
      </div>
    )
  }

  // If authenticated, show the profile
  if (status === "authenticated") {
    return (
      <div className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold text-primary mb-8">Your Profile</h1>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              {/* Profile Header */}
              <div className="bg-primary/10 p-6 md:p-8 flex flex-col md:flex-row items-center md:items-start gap-6">
                <div className="relative">
                  <div className="h-24 w-24 md:h-32 md:w-32 rounded-full bg-gray-200 overflow-hidden">
                    {session?.user?.image ? (
                      <Image
                        src={session.user.image || "/placeholder.svg"}
                        alt={session?.user?.name || "Profile picture"}
                        fill
                        className="object-cover"
                      />
                    ) : (
                      <div className="h-full w-full flex items-center justify-center bg-primary/20">
                        <User className="h-12 w-12 text-primary/50" />
                      </div>
                    )}
                  </div>
                </div>

                <div className="text-center md:text-left">
                  <h2 className="text-2xl font-bold text-primary">{session?.user?.name || "User"}</h2>
                  <div className="flex items-center justify-center md:justify-start text-gray-600 mt-2">
                    <Mail className="h-4 w-4 mr-2" />
                    <span>{session?.user?.email}</span>
                  </div>
                  <div className="flex items-center justify-center md:justify-start text-gray-600 mt-2">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>Member since {new Date().toLocaleDateString()}</span>
                  </div>
                  <div className="mt-4">
                    <Link
                      href="/profile/edit"
                      className="inline-flex items-center px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-dark transition-colors"
                    >
                      <Edit className="h-4 w-4 mr-2" />
                      Edit Profile
                    </Link>
                  </div>
                </div>
              </div>

              {/* Profile Content */}
              <div className="p-6 md:p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-lg font-semibold text-primary mb-4">Account Information</h3>
                    <div className="space-y-4">
                      <div>
                        <div className="text-sm text-gray-500">Full Name</div>
                        <div className="font-medium">{session?.user?.name || "Not provided"}</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-500">Email Address</div>
                        <div className="font-medium">{session?.user?.email}</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-500">Account Type</div>
                        <div className="font-medium capitalize">{session?.user?.role || "user"}</div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-primary mb-4">Preferences</h3>
                    <div className="space-y-4">
                      <div>
                        <div className="text-sm text-gray-500">Language</div>
                        <div className="font-medium">English</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-500">Notification Preferences</div>
                        <div className="font-medium">All notifications enabled</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-gray-200">
                  <h3 className="text-lg font-semibold text-primary mb-4">Activity</h3>
                  <div className="bg-gray-50 p-6 rounded-lg text-center">
                    <p className="text-gray-600">Your recent activity will appear here.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  // This should never be reached due to the redirect, but just in case
  return null
}
