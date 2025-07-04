"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { formatDistanceToNow } from "date-fns"
import { CheckCircle, XCircle, AlertTriangle, Trash2, MessageSquare, Shield, Filter } from "lucide-react"
import { approveComment, rejectComment, markAsSpam, deleteComment } from "@/app/actions/comment-actions"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

type Comment = {
  id: string
  content: string
  postSlug: string
  userId: string
  createdAt: Date
  updatedAt: Date
  status: string
  User: {
    name: string | null
    image: string | null
    email: string | null
  }
  Report: {
    id: string
    reason: string
  }[]
}

export default function CommentModerationList({
  initialComments,
}: {
  initialComments: any
}) {
  const [comments, setComments] = useState(initialComments?.comments || [])
  const [activeTab, setActiveTab] = useState("pending")
  const [filter, setFilter] = useState("all")
  const router = useRouter()

  // Filter comments based on active tab
  const filteredComments = comments.filter((comment: any) => {
    if (activeTab === "pending") return comment.status === "pending"
    if (activeTab === "approved") return comment.status === "approved"
    if (activeTab === "rejected") return comment.status === "rejected"
    if (activeTab === "spam") return comment.status === "spam"
    if (activeTab === "reported") return comment.Report?.length > 0
    return true
  })

  // Further filter by post if filter is set
  const displayedComments =
    filter === "all" ? filteredComments : filteredComments.filter((comment: any) => comment.postSlug === filter)

  // Get unique post slugs for filter dropdown
  const postSlugs = Array.from(new Set(comments.map((comment: any) => comment.postSlug)))

  // Handle comment moderation actions
  const handleApprove = async (id: string) => {
    await approveComment(id)
    setComments(comments.map((comment: any) => (comment.id === id ? { ...comment, status: "approved" } : comment)))
    router.refresh()
  }

  const handleReject = async (id: string) => {
    await rejectComment(id)
    setComments(comments.map((comment: any) => (comment.id === id ? { ...comment, status: "rejected" } : comment)))
    router.refresh()
  }

  const handleMarkAsSpam = async (id: string) => {
    await markAsSpam(id)
    setComments(comments.map((comment: any) => (comment.id === id ? { ...comment, status: "spam" } : comment)))
    router.refresh()
  }

  const handleDelete = async (id: string) => {
    await deleteComment(id)
    setComments(comments.filter((comment: any) => comment.id !== id))
    router.refresh()
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between gap-4">
        <Tabs defaultValue="pending" value={activeTab} onValueChange={setActiveTab} className="w-full sm:w-auto">
          <TabsList className="grid grid-cols-3 sm:grid-cols-5 w-full">
            <TabsTrigger value="pending" className="flex items-center gap-1">
              <MessageSquare size={16} />
              <span className="hidden sm:inline">Pending</span>
              <span className="inline sm:hidden">Pend</span>
              <span className="bg-amber-100 text-amber-800 text-xs px-1.5 py-0.5 rounded-full">
                {comments.filter((c: any) => c.status === "pending").length}
              </span>
            </TabsTrigger>
            <TabsTrigger value="approved">
              <CheckCircle size={16} className="mr-1 hidden sm:inline" />
              Approved
            </TabsTrigger>
            <TabsTrigger value="rejected">
              <XCircle size={16} className="mr-1 hidden sm:inline" />
              Rejected
            </TabsTrigger>
            <TabsTrigger value="spam">
              <AlertTriangle size={16} className="mr-1 hidden sm:inline" />
              Spam
            </TabsTrigger>
            <TabsTrigger value="reported" className="flex items-center gap-1">
              <Shield size={16} />
              <span className="hidden sm:inline">Reported</span>
              <span className="inline sm:hidden">Rep</span>
              <span className="bg-red-100 text-red-800 text-xs px-1.5 py-0.5 rounded-full">
                {comments.filter((c: any) => c.Report?.length > 0).length}
              </span>
            </TabsTrigger>
          </TabsList>
        </Tabs>

        <div className="flex items-center gap-2">
          <Filter size={16} className="text-gray-500" />
          <Select value={filter} onValueChange={setFilter}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Filter by post" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All posts</SelectItem>
              {postSlugs.map((slug: string) => (
                <SelectItem key={slug} value={slug}>
                  {slug.replace(/-/g, " ").substring(0, 20)}...
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="space-y-4">
        {displayedComments.length === 0 ? (
          <Card>
            <CardContent className="pt-6 text-center text-gray-500">
              No comments to display in this category.
            </CardContent>
          </Card>
        ) : (
          displayedComments.map((comment: any) => (
            <Card key={comment.id} className={comment.Report?.length > 0 ? "border-red-200" : ""}>
              <CardHeader className="pb-2">
                <div className="flex justify-between">
                  <div className="flex items-center gap-2">
                    <Avatar className="h-8 w-8">
                      {comment.User?.image ? (
                        <AvatarImage src={comment.User.image || "/placeholder.svg"} alt={comment.User.name || "User"} />
                      ) : (
                        <AvatarFallback>{comment.User?.name?.charAt(0) || "U"}</AvatarFallback>
                      )}
                    </Avatar>
                    <div>
                      <CardTitle className="text-sm font-medium">
                        {comment.User?.name || comment.User?.email || "Anonymous"}
                      </CardTitle>
                      <p className="text-xs text-gray-500">
                        {formatDistanceToNow(new Date(comment.createdAt), { addSuffix: true })}
                      </p>
                    </div>
                  </div>
                  <div className="text-xs text-gray-500">
                    Post: {comment.postSlug.replace(/-/g, " ").substring(0, 20)}...
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="whitespace-pre-wrap">{comment.content}</p>

                {comment.Report?.length > 0 && (
                  <div className="mt-2 p-2 bg-red-50 border border-red-100 rounded-md">
                    <p className="text-sm font-medium text-red-800">Reported {comment.Report.length} time(s)</p>
                    <ul className="mt-1 text-xs text-red-700">
                      {comment.Report.map((report: any) => (
                        <li key={report.id}>• {report.reason}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </CardContent>
              <CardFooter className="flex justify-end gap-2 pt-0">
                {comment.status === "pending" && (
                  <>
                    <Button
                      variant="outline"
                      size="sm"
                      className="text-green-600 border-green-200 hover:bg-green-50"
                      onClick={() => handleApprove(comment.id)}
                    >
                      <CheckCircle size={16} className="mr-1" />
                      Approve
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="text-red-600 border-red-200 hover:bg-red-50"
                      onClick={() => handleReject(comment.id)}
                    >
                      <XCircle size={16} className="mr-1" />
                      Reject
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="text-amber-600 border-amber-200 hover:bg-amber-50"
                      onClick={() => handleMarkAsSpam(comment.id)}
                    >
                      <AlertTriangle size={16} className="mr-1" />
                      Spam
                    </Button>
                  </>
                )}
                <Button
                  variant="outline"
                  size="sm"
                  className="text-gray-600 border-gray-200 hover:bg-gray-50"
                  onClick={() => handleDelete(comment.id)}
                >
                  <Trash2 size={16} className="mr-1" />
                  Delete
                </Button>
              </CardFooter>
            </Card>
          ))
        )}
      </div>
    </div>
  )
}
