"use server"

export type WaitlistState = {
  success: boolean
  message: string
} | null

export async function joinWaitlist(
  product: string,
  _prevState: WaitlistState,
  formData: FormData
): Promise<WaitlistState> {
  const email = formData.get("email")

  if (typeof email !== "string" || !email.includes("@") || email.trim().length < 5) {
    return { success: false, message: "Please enter a valid email address." }
  }

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY

  if (!supabaseUrl || !supabaseKey) {
    return { success: false, message: "Service unavailable. Please try again later." }
  }

  try {
    const response = await fetch(`${supabaseUrl}/rest/v1/waitlist`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        apikey: supabaseKey,
        Authorization: `Bearer ${supabaseKey}`,
        Prefer: "return=minimal",
      },
      body: JSON.stringify({ email: email.trim(), product }),
    })

    if (response.status === 201) {
      return { success: true, message: "You're on the list." }
    }

    if (response.status === 409) {
      return { success: true, message: "You're already on the list." }
    }

    return { success: false, message: "Something went wrong. Please try again." }
  } catch {
    return { success: false, message: "Something went wrong. Please try again." }
  }
}
