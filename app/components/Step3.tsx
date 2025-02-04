import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useApplication } from "../../context/ApplicationContext"
import { useRouter } from "next/navigation"
import toast from "react-hot-toast"


interface Step3Props {
  prevStep: () => void
}

export default function Step3({ prevStep }: Step3Props) {
  const { applicationData, updateApplicationData, submitApplication } = useApplication() as any;
  const router = useRouter()
  const [resume, setResume] = useState<File | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      await submitApplication()
      router.push("/success")
    } catch (error) {
      console.error("Failed to submit application:", error)
      // alert("Failed to submit application. Please try again.")
      toast.error("Failed to submit application. Please try again.")
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
              placeholder="Tell us why you're interested in this internship..."
              className="mt-2 h-32"
              required
            />
          </div>
        </>
      ) : (
        <>
          <div>
            <Label htmlFor="experience" className="text-lg font-semibold">
              Relevant Experience
            </Label>
            <Textarea
              id="experience"
              placeholder="Describe Any Language or Tech Stack You Are Interested In..."
              className="mt-2 h-32"
              required
            />
          </div>
          <div>
            <Label htmlFor="expectations" className="text-lg font-semibold">
              Program Expectations
            </Label>
            <Textarea
              id="expectations"
              placeholder="What do you hope to gain from this training program?"
              className="mt-2 h-32"
              required
            />
          </div>
        </>
      )}
      <div className="flex flex-col sm:flex-row justify-between gap-4">
        <Button type="button" onClick={prevStep} variant="outline" className="w-full sm:w-auto">
          Previous
        </Button>
        <Button type="submit" className="w-full sm:w-auto">
          Submit Application
        </Button>
      </div>
    </form>
  )
}

