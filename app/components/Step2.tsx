import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useApplication } from "../../context/ApplicationContext"
import type React from "react"

interface Step2Props {
  nextStep: () => void
  prevStep: () => void
}

export default function Step2({ nextStep, prevStep }: Step2Props) {
  const { applicationData, updateApplicationData } = useApplication()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (applicationData.program) {
      nextStep()
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <Label className="text-lg font-semibold mb-4 block">Select a program</Label>
        <div className="grid gap-6 md:grid-cols-2">
          <Card className={applicationData.program === "internship" ? "border-primary" : ""}>
            <CardHeader>
              <CardTitle>Internship Program</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">Gain hands-on experience in a professional setting.</p>
              <p className="font-semibold">Stipend:</p>
              <p>₹5,000 - ₹35,000 per month</p>
              <p className="text-sm text-muted-foreground mt-2">(Based on interview performance)</p>
            </CardContent>
          </Card>
          <Card className={applicationData.program === "training" ? "border-primary" : ""}>
            <CardHeader>
              <CardTitle>Training Program</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">Comprehensive instruction in various technical skills.</p>
              <p className="font-semibold">Program Costs:</p>
              <ul className="list-disc list-inside">
                <li>3 Months: ₹12,500</li>
                <li>6 Months: ₹16,500</li>
              </ul>
            </CardContent>
          </Card>
        </div>
        <RadioGroup
          value={applicationData.program}
          onValueChange={(value) => updateApplicationData({ program: value })}
          className="mt-6 space-y-4"
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

