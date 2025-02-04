import { Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-dark text-white-foreground mt-12 py-6 px-4">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center">
        <div className="text-sm mb-4 sm:mb-0">
          © {new Date().getFullYear()} Botbyte AI. All rights reserved.
        </div>
        <div className="flex items-center">
          <Mail className="w-4 h-4 mr-2" />
          <span className="text-sm">Contact Us: </span>
          <a href="mailto:hello@botbyte.in" className="text-sm ml-1 hover:underline">
            hello@botbyte.in
          </a>
        </div>
      </div>
    </footer>
  )
}
