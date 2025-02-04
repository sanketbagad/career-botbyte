"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import Breadcrumbs from "./Breadcrumbs"
import Step1 from "./Step1"
import Step2 from "./Step2"
import Step3 from "./Step3"

export default function ApplicationForm() {
  const [step, setStep] = useState(1)

  const nextStep = () => setStep((prev) => Math.min(prev + 1, 3))
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1))

  return (
    <Card className="w-full">
      <CardContent className="p-4 sm:p-6">
        <Breadcrumbs currentStep={step} />
        {step === 1 && <Step1 nextStep={nextStep} />}
        {step === 2 && <Step2 nextStep={nextStep} prevStep={prevStep} />}
        {step === 3 && <Step3 prevStep={prevStep} />}
      </CardContent>
    </Card>
  )
}

