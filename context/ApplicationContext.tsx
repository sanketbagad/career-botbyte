"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

interface ApplicationData {
  name: string
  email: string
  program: string
  resume: File | null
  coverLetter: string
  experience: string
  expectations: string
  agreeToEmail: boolean
}

interface ApplicationContextType {
  applicationData: ApplicationData
  updateApplicationData: (data: Partial<ApplicationData>) => void
  submitApplication: () => Promise<{ success: boolean; error?: string }>
}

const ApplicationContext = createContext<ApplicationContextType | undefined>(undefined)

export function ApplicationProvider({ children }: { children: ReactNode }) {
  const [applicationData, setApplicationData] = useState<ApplicationData>({
    name: "",
    email: "",
    program: "",
    resume: null,
    coverLetter: "",
    experience: "",
    expectations: "",
    agreeToEmail: false,
  })

  const updateApplicationData = (data: Partial<ApplicationData>) => {
    setApplicationData((prev) => ({ ...prev, ...data }))
  }

  const submitApplication = async () => {
    const formData = new FormData()
    Object.entries(applicationData).forEach(([key, value]) => {
      if (value !== null) {
        formData.append(key, value)
      }
    })

    const response = await fetch("/api/submission", {
      method: "POST",
      body: formData,
    })

    const result = await response.json()

    if (!response.ok) {
      return { success: false, error: result.error }
    }

    return { success: true }
  }

  return (
    <ApplicationContext.Provider value={{ applicationData, updateApplicationData, submitApplication }}>
      {children}
    </ApplicationContext.Provider>
  )
}

export function useApplication() {
  const context = useContext(ApplicationContext)
  if (context === undefined) {
    throw new Error("useApplication must be used within an ApplicationProvider")
  }
  return context
}

