import React, { useState } from 'react'
import { useForm, useWatch } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { FaWhatsapp } from 'react-icons/fa'
import { LuCircleCheck, LuCircleAlert, LuLoader } from 'react-icons/lu'
import { inquirySchema, type InquiryFormValues } from '@/schemas/connect.schema'
import { submitInquiry, ApiValidationError } from '@/lib/api'
import { Input } from '@/components/ui/Input'
import { Textarea } from '@/components/ui/Textarea'
import { Select } from '@/components/ui/Select'

export const ConnectForm: React.FC = () => {
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [statusMessage, setStatusMessage] = useState<string>('')

  const {
    register,
    handleSubmit,
    control,
    reset,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<InquiryFormValues>({
    resolver: zodResolver(inquirySchema),
    mode: 'onTouched',
    defaultValues: {
      name: '',
      email: '',
      organization: '',
      interestedIn: 'General enquiry',
      goals: '',
    },
  })

  const goalsValue = useWatch({ control, name: 'goals', defaultValue: '' }) || ''

  const interestOptions = [
    { value: 'General enquiry', label: 'General enquiry' },
    { value: 'Student guidance (IAIC)', label: 'Student guidance (IAIC)' },
    { value: 'Education discovery (UniSeek)', label: 'Education discovery (UniSeek)' },
    { value: 'Education marketplace (StudyPick)', label: 'Education marketplace (StudyPick)' },
    { value: 'Application technology (AdmissionPortal)', label: 'Application technology (AdmissionPortal)' },
    { value: 'Academic pathways (University Road)', label: 'Academic pathways (University Road)' },
  ]

  const onSubmit = async (data: InquiryFormValues) => {
    setSubmitStatus('idle')
    setStatusMessage('')

    try {
      const response = await submitInquiry(data)
      setSubmitStatus('success')
      setStatusMessage(response.message)
      reset({
        name: '',
        email: '',
        organization: '',
        interestedIn: 'General enquiry',
        goals: '',
      })
    } catch (err: unknown) {
      setSubmitStatus('error')
      if (err instanceof ApiValidationError) {
        if (err.errors) {
          for (const [field, message] of Object.entries(err.errors)) {
            if (field in data) {
              setError(field as keyof InquiryFormValues, {
                type: 'server',
                message,
              })
            }
          }
        }
        setStatusMessage(err.message || 'Validation failed')
      } else {
        setStatusMessage('Something went wrong. Please try again later.')
      }
    }
  }

  return (
    <div className="bg-white border border-slate-200/90 rounded-radius-lg p-8 sm:p-10 shadow-sm">
      <div className="mb-6 space-y-1 text-left">
        <h3 className="text-xl sm:text-2xl font-semibold text-slate-900">What's on your mind?</h3>
        <p className="text-xs sm:text-sm text-slate-500">
          Prepare a message below, then continue the conversation in WhatsApp.
        </p>
      </div>

      {submitStatus === 'success' && (
        <div
          role="status"
          className="mb-6 p-4 rounded-radius-md bg-green-50 border border-green-200 text-green-800 text-sm flex items-start gap-3"
        >
          <LuCircleCheck className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
          <div>
            <p className="font-semibold">{statusMessage}</p>
          </div>
        </div>
      )}

      {submitStatus === 'error' && (
        <div
          role="alert"
          className="mb-6 p-4 rounded-radius-md bg-red-50 border border-red-200 text-red-800 text-sm flex items-start gap-3"
        >
          <LuCircleAlert className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
          <div>
            <p className="font-semibold">{statusMessage}</p>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
        {/* Name and Email side by side on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Input
            label="Your Name"
            isRequired
            placeholder="Full name"
            error={errors.name?.message}
            {...register('name')}
          />
          <Input
            label="Email address"
            isRequired
            type="email"
            placeholder="you@organization.com"
            error={errors.email?.message}
            {...register('email')}
          />
        </div>

        {/* Organization (optional) */}
        <Input
          label="Institution or organization"
          placeholder="If applicable"
          error={errors.organization?.message}
          {...register('organization')}
        />

        {/* Interested in */}
        <Select
          label="I'm interested in"
          isRequired
          options={interestOptions}
          error={errors.interestedIn?.message}
          {...register('interestedIn')}
        />

        {/* Goals */}
        <Textarea
          label="Tell us a little about your goals"
          isRequired
          placeholder="What would you like to explore with IEG?"
          charCount={goalsValue.length}
          maxCharCount={2000}
          error={errors.goals?.message}
          {...register('goals')}
        />

        {/* Submit button */}
        <div className="pt-2">
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-radius-full text-sm font-semibold bg-brand-purple text-white hover:bg-brand-purple/90 active:bg-brand-purple/95 transition-all shadow-sm disabled:opacity-50 disabled:pointer-events-none"
          >
            {isSubmitting ? (
              <>
                <LuLoader className="w-4 h-4 animate-spin" />
                <span>Sending inquiry...</span>
              </>
            ) : (
              <>
                <FaWhatsapp className="w-4 h-4 text-white" />
                <span>Continue on Whatsapp</span>
              </>
            )}
          </button>
        </div>

        {/* Disclaimer per Figma */}
        <p className="text-[11px] text-slate-400 leading-relaxed text-left pt-1">
          This opens WhatsApp with your message. You choose whether to send it there. Your form
          entries are not saved by this website. Please avoid sharing sensitive documents here.{' '}
          <a href="#privacy" className="underline hover:text-slate-600 transition-colors">
            Privacy information.
          </a>
        </p>
      </form>
    </div>
  )
}
