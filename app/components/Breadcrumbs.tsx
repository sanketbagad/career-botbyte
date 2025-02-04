import { Check } from "lucide-react"

interface BreadcrumbsProps {
  currentStep: number
}

export default function Breadcrumbs({ currentStep }: BreadcrumbsProps) {
  const steps = ["Basic Info", "Program Selection", "Application"]

  return (
    <nav aria-label="Progress" className="mb-8">
      <ol role="list" className="flex items-center">
        {steps.map((step, index) => (
          <li key={step} className={`relative ${index !== steps.length - 1 ? "pr-4 sm:pr-8" : ""} flex-1`}>
            {index < currentStep ? (
              <div className="absolute inset-0 flex items-center" aria-hidden="true">
                <div className="h-0.5 w-full bg-primary" />
              </div>
            ) : null}
            <div
              className={`relative flex h-8 w-8 items-center justify-center rounded-full ${
                index < currentStep
                  ? "bg-primary"
                  : index === currentStep
                    ? "border-2 border-primary"
                    : "border-2 border-gray-300"
              }`}
            >
              {index < currentStep ? (
                <Check className="h-5 w-5 text-white" aria-hidden="true" />
              ) : (
                <span
                  className={`h-2.5 w-2.5 rounded-full ${index === currentStep ? "bg-primary" : "bg-transparent"}`}
                  aria-hidden="true"
                />
              )}
              <span className="sr-only">{step}</span>
            </div>
            <div className="absolute top-10 w-full text-center text-xs font-medium text-muted-foreground">{step}</div>
          </li>
        ))}
      </ol>
    </nav>
  )
}

