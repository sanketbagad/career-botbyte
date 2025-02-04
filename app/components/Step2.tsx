import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import type React from "react"
import { useApplication } from "../../context/ApplicationContext"

interface Step2Props {
  nextStep: () => void
  prevStep: () => void
}

export default function Step2({ nextStep, prevStep }: Step2Props) {
  const { applicationData, updateApplicationData } = useApplication() as any;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (applicationData.program) {
      nextStep()
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <Label className="text-lg font-semibold">Select a program</Label>
        <RadioGroup
          value={applicationData.program}
          onValueChange={(value) => updateApplicationData({ program: value })}
          className="mt-4 space-y-4"
        >
          <div className="flex items-center space-x-3">
            <RadioGroupItem value="internship" id="internship" />
            <Label htmlFor="internship" className="text-base">
              Internship
            </Label>
          </div>
          <div className="flex items-center space-x-3">
            <RadioGroupItem value="training" id="training" />
            <Label htmlFor="training" className="text-base">
              Training Program
            </Label>
          </div>
        </RadioGroup>
      </div>
      <div className="flex flex-col sm:flex-row justify-between gap-4">
        <Button type="button" onClick={prevStep} variant="outline" className="w-full sm:w-auto">
          Previous
        </Button>
        <Button type="submit" disabled={!applicationData.program} className="w-full sm:w-auto">
          Next
        </Button>
      </div>
    </form>
  )
}

