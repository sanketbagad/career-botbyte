import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function LearnMore() {
  return (
    <div id="learn-more" className="space-y-8">
      <h2 className="text-3xl font-bold text-center mb-8">Why Choose Botbyte AI?</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Cutting-Edge Technology</CardTitle>
          </CardHeader>
          <CardContent>Work with the latest technologies in AI, cloud computing, and software development.</CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Expert Mentorship</CardTitle>
          </CardHeader>
          <CardContent>Learn from industry leaders and gain insights that will shape your career.</CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Real-World Projects</CardTitle>
          </CardHeader>
          <CardContent>Contribute to actual projects and build a portfolio that stands out to employers.</CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Paid Internship</CardTitle>
          </CardHeader>
          <CardContent>
           You will get paid for the work you do, based on your Interview.
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Global Network</CardTitle>
          </CardHeader>
          <CardContent>Connect with professionals and fellow learners from around the world.</CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Innovation Culture</CardTitle>
          </CardHeader>
          <CardContent>Be part of a company that values creativity, innovation, and forward-thinking.</CardContent>
        </Card>
      </div>
    </div>
  )
}

