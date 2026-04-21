"use client"

import { useActionState } from "react"
import { joinWaitlist, type WaitlistState } from "@/app/actions/waitlist"

interface WaitlistFormProps {
  product: string
}

export function WaitlistForm({ product }: WaitlistFormProps) {
  const boundAction = joinWaitlist.bind(null, product)
  const [state, formAction, isPending] = useActionState<WaitlistState, FormData>(boundAction, null)

  if (state?.success) {
    return (
      <p className="text-green-700 font-medium py-2">
        {state.message}
      </p>
    )
  }

  return (
    <div>
      <form action={formAction} className="flex flex-col sm:flex-row gap-3 max-w-md">
        <input
          type="email"
          name="email"
          placeholder="your@email.com"
          required
          className="flex-1 px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary text-sm"
        />
        <button
          type="submit"
          disabled={isPending}
          className="btn btn-primary whitespace-nowrap"
        >
          {isPending ? "Sending…" : "Notify me"}
        </button>
      </form>
      {state && !state.success && (
        <p className="text-red-600 text-sm mt-2">{state.message}</p>
      )}
    </div>
  )
}
