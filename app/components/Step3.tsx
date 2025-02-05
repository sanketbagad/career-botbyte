import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useApplication } from "../../context/ApplicationContext"
import { useRouter } from "next/navigation"
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert"
import { AlertCircle } from "lucide-react"

interface Step3Props {
  prevStep: () => void
}

export default function Step3({ prevStep }: Step3Props) {
  const { applicationData, updateApplicationData, submitApplication } = useApplication()
  const router = useRouter()
  const [resume, setResume] = useState<File | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    setLoading(true)
    try {
      const result = await submitApplication()
      if (result.success) {
        setLoading(false)
        router.push("/success")
      } else {
        setLoading(false)
        setError(result.error || "An unexpected error occurred. Please try again.")
      }
    } catch (error) {
      console.error("Failed to submit application:", error)
      setLoading(false)
      setError("An unexpected error occurred. Please try again.")
    }
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setResume(e.target.files[0])
      updateApplicationData({ resume: e.target.files[0] })
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {error && (
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}
      {applicationData.program === "internship" ? (
        <>
          <div>
            <Label htmlFor="resume" className="text-lg font-semibold">
              Upload Resume (PDF only)
            </Label>
            <Input id="resume" type="file" accept=".pdf" onChange={handleFileChange} required className="mt-2" />
          </div>
          <div>
            <Label htmlFor="coverLetter" className="text-lg font-semibold">
              Cover Letter
            </Label>
            <Textarea
              id="coverLetter"
              placeholder="Tell us why you're interested in this internship... or Put N/A"
              className="mt-2 h-32"
              required
              value={applicationData.coverLetter}
              onChange={(e) => updateApplicationData({ coverLetter: e.target.value })}
            />
          </div>
        </>
      ) : (
        <>
          <div>
            <Label htmlFor="experience" className="text-lg font-semibold">
              Introduce Yourself
            </Label>
            <Textarea
              id="experience"
              placeholder="Add your technical skills and please share your Mobile Number"
              className="mt-2 h-32"
              required
              value={applicationData.experience}
              onChange={(e) => updateApplicationData({ experience: e.target.value })}
            />
          </div>
          <div>
            <Label htmlFor="expectations" className="text-lg font-semibold">
              Program Expectations
            </Label>
            <Textarea
              id="expectations"
              placeholder="What do you hope to gain from this training program? or N/A"
              className="mt-2 h-32"
              required
              value={applicationData.expectations}
              onChange={(e) => updateApplicationData({ expectations: e.target.value })}
            />
          </div>
        </>
      )}
      <div className="flex flex-col sm:flex-row justify-between gap-4">
        <Button type="button" onClick={prevStep} variant="outline" className="w-full sm:w-auto">
          Previous
        </Button>
        <Button type="submit" className="w-full sm:w-auto">
          {loading ? "Submiting..." : "Submit Application"}
        </Button>
      </div>
    </form>
  )
}

