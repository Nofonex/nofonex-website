"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { User, Save, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function ProfileEditClient() {
  const { data: session, status, update } = useSession()
  const router = useRouter()
  const [mounted, setMounted] = useState(false)

  const [isSaving, setIsSaving] = useState(false)
  const [message, setMessage] = useState({ type: "", text: "" })

  // Form state
  const [name, setName] = useState("")
  const [bio, setBio] = useState("")
  const [profileImage, setProfileImage] = useState<string | null>(null)
  const [imageFile, setImageFile] = useState<File | null>(null)

  useEffect(() => {
    setMounted(true)
    if (status === "unauthenticated") {
      router.push("/login")
    } else if (status === "authenticated" && session?.user) {
      setName(session.user.name || "")
      setBio("") // We'll add this field to the user model later
      setProfileImage(session.user.image || null)
    }
  }, [status, session, router])

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

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setImageFile(file)
      // Create a preview URL
      const reader = new FileReader()
      reader.onloadend = () => {
        setProfileImage(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSaving(true)
    setMessage({ type: "", text: "" })

    try {
      // In a real implementation, you would upload the image to a storage service
      // and update the user profile in your database

      // Simulate an API call
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // Update the session
      await update({
        ...session,
        user: {
          ...session?.user,
          name,
        },
      })

      setMessage({ type: "success", text: "Profile updated successfully!" })

      // In a real implementation, you would redirect after a successful update
      // For now, we'll just show a success message
    } catch (error) {
      console.error("Error updating profile:", error)
      setMessage({ type: "error", text: "Failed to update profile. Please try again." })
    } finally {
      setIsSaving(false)
    }
  }

  // If authenticated, show the profile edit form
  if (status === "authenticated") {
    return (
      <div className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center mb-8">
              <Link href="/profile" className="mr-4 text-gray-600 hover:text-primary">
                <ArrowLeft className="h-5 w-5" />
              </Link>
              <h1 className="text-3xl md:text-4xl font-bold text-primary">Edit Profile</h1>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <form onSubmit={handleSubmit} className="p-6 md:p-8">
                {message.text && (
                  <div
                    className={`mb-6 p-4 rounded-md ${
                      message.type === "success" ? "bg-green-50 text-green-700" : "bg-red-50 text-red-700"
                    }`}
                  >
                    {message.text}
                  </div>
                )}

                {/* Profile Image */}
                <div className="flex flex-col items-center mb-8">
                  <div className="relative mb-4">
                    <div className="h-32 w-32 rounded-full bg-gray-200 overflow-hidden">
                      {profileImage ? (
                        <Image
                          src={profileImage || "/placeholder.svg"}
                          alt="Profile preview"
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

                  <label className="inline-flex items-center px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition-colors cursor-pointer">
                    <input type="file" accept="image/*" onChange={handleImageChange} className="hidden" />
                    Change Profile Picture
                  </label>
                </div>

                {/* Form Fields */}
                <div className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>

                  <div>
                    <label htmlFor="bio" className="block text-sm font-medium text-gray-700 mb-1">
                      Bio
                    </label>
                    <textarea
                      id="bio"
                      value={bio}
                      onChange={(e) => setBio(e.target.value)}
                      rows={4}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Tell us a bit about yourself..."
                    ></textarea>
                  </div>

                  <div className="flex justify-end">
                    <button
                      type="submit"
                      disabled={isSaving}
                      className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-md hover:bg-primary-dark transition-colors disabled:opacity-50"
                    >
                      {isSaving ? (
                        <>Saving...</>
                      ) : (
                        <>
                          <Save className="h-4 w-4 mr-2" />
                          Save Changes
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }

  // This should never be reached due to the redirect, but just in case
  return null
}
