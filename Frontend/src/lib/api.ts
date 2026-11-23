import type { InquiryFormData } from '@/types/connect.types'

export interface SubmitInquirySuccess {
  success: true
  message: string
  data: { id: string }
}

export interface SubmitInquiryValidationError {
  success: false
  message: string
  errors?: Record<string, string>
}

export class ApiValidationError extends Error {
  errors?: Record<string, string>
  constructor(message: string, errors?: Record<string, string>) {
    super(message)
    this.name = 'ApiValidationError'
    this.errors = errors
  }
}

export class ApiGenericError extends Error {
  constructor(message = 'Something went wrong. Please try again later.') {
    super(message)
    this.name = 'ApiGenericError'
  }
}

export async function submitInquiry(data: InquiryFormData): Promise<SubmitInquirySuccess> {
  const origin = (import.meta.env.VITE_API_URL || '').replace(/\/+$/, '')
  const endpoint = `${origin}/api/v1/inquiry`

  let response: Response
  try {
    response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
  } catch {
    throw new ApiGenericError()
  }

  if (response.status === 201) {
    const resData: SubmitInquirySuccess = await response.json().catch(() => ({
      success: true,
      message: 'Inquiry submitted successfully',
      data: { id: '' },
    }))
    return resData
  }

  if (response.status === 400) {
    const errorJson: SubmitInquiryValidationError = await response.json().catch(() => ({
      success: false,
      message: 'Validation failed',
    }))
    throw new ApiValidationError(errorJson.message || 'Validation failed', errorJson.errors)
  }

  throw new ApiGenericError()
}
