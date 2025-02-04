import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Card, CardContent } from "@/components/ui/card"
import { useApplication } from "../../context/ApplicationContext"

export default function Step1({ nextStep }: { nextStep: () => void }) {
  const { applicationData, updateApplicationData } = useApplication() as any;
  const [errors, setErrors] = useState<Partial<typeof applicationData>>({})

  const validateForm = () => {
    const newErrors: Partial<typeof applicationData> = {}
    if (!applicationData.name) newErrors.name = "Name is required"
    if (!applicationData.email) newErrors.email = "Email is required"
    else if (!/\S+@\S+\.\S+/.test(applicationData.email)) newErrors.email = "Email is invalid"
    if (!applicationData.agreeToEmail) newErrors.agreeToEmail = "You must agree to receive emails"
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (validateForm()) {
      nextStep()
    }
  }

  return (
    <div className="space-y-6">
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardContent className="p-4">
            <h3 className="text-lg font-semibold mb-2">Internship Program</h3>
            <p className="text-sm text-muted-foreground">
              Our internship program offers hands-on experience in a professional setting. You'll work on real projects,
              receive mentorship, and develop valuable skills for your future career.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <h3 className="text-lg font-semibold mb-2">Training Program</h3>
            <p className="text-sm text-muted-foreground">
              Our training program provides comprehensive instruction in various technical skills. You'll learn from
              industry experts, work on practical assignments, and earn certifications to boost your resume.
            </p>
          </CardContent>
        </Card>
      </div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            value={applicationData.name}
            onChange={(e) => updateApplicationData({ name: e.target.value })}
            className={errors.name ? "border-red-500" : ""}
          />
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
        </div>
        <div>
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            value={applicationData.email}
            onChange={(e) => updateApplicationData({ email: e.target.value })}
            className={errors.email ? "border-red-500" : ""}
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox
            id="agreeToEmail"
            checked={applicationData.agreeToEmail}
            onCheckedChange={(checked) => updateApplicationData({ agreeToEmail: checked as boolean })}
          />
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Label htmlFor="agreeToEmail" className="cursor-pointer">
                  I agree to receive emails about the program
                </Label>
              </TooltipTrigger>
              <TooltipContent>
                <p>We'll send you important information about the program</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
        {errors.agreeToEmail && <p className="text-red-500 text-sm mt-1">{errors.agreeToEmail}</p>}
        <Button type="submit" className="w-full">
          Next
        </Button>
      </form>
    </div>
  )
}

