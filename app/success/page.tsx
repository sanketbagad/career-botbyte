import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function SuccessPage() {
  return (
    <Card className="w-full mt-20">
      <CardHeader>
        <CardTitle className="text-center text-2xl">Application Submitted Successfully!🎉</CardTitle>
      </CardHeader>
      <CardContent className="text-center">
        <p className="mb-4 text-muted-foreground">
          Thank you for submitting your application. We will review it and get back to you soon.
        </p>
        <Link href="/">
          <Button>Return to Home</Button>
        </Link>
      </CardContent>
    </Card>
  )
}

