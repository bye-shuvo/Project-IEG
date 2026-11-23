import type { InquiryFormData } from '@/types/connect.types'

export async function submitInquiry(data: InquiryFormData): Promise<{ success: boolean; message?: string }> {
  const baseUrl = import.meta.env.VITE_API_URL || ''
  const endpoint = `${baseUrl}/api/inquiries`

  const response = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}))
    throw new Error(errorData.message || `Request failed with status ${response.status}`)
  }

  return response.json().catch(() => ({ success: true }))
}

