import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Hero() {
  return (
    <div className="bg-dark text-white-foreground py-20 px-6 sm:px-12 md:px-24 lg:px-32 mb-12 rounded-lg shadow-lg">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">Shape Your Future in Tech</h1>
        <p className="text-xl sm:text-2xl mb-8">
          Join Botbyte AI's Internship or Training Program and kickstart your career in software development,
          AI, and cloud computing.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button asChild size="lg" variant="secondary">
            <Link href="#application-form">Apply Now</Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="#learn-more">Learn More</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

