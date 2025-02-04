'use server'
import { NextResponse } from "next/server"
import { PrismaClient } from "@prisma/client"
import { supabase } from "@/lib/supabase"

const prisma = new PrismaClient()

export async function POST(request: Request) {
  const formData = await request.formData()
  const name = formData.get("name") as string
  const email = formData.get("email") as string
  const program = formData.get("program") as string
  const resume = formData.get("resume") as File
  const coverLetter = formData.get("coverLetter") as string
  const experience = formData.get("experience") as string
  const expectations = formData.get("expectations") as string

  let resumeUrl = null

  if (resume) {
    const { data, error } = await supabase.storage.from("resumes").upload(`${Date.now()}-${resume.name}`, resume)

    if (error) {
      console.log(error)
      return NextResponse.json({ error: "Failed to upload resume" }, { status: 500 })
    }

    resumeUrl = data.path
  }

  try {
    const application = await prisma.application.create({
      data: {
        name,
        email,
        program,
        resumeUrl,
        coverLetter,
        experience,
        expectations,
      },
    })

    return NextResponse.json({ success: true, application })
  } catch (error) {
    console.log(error)
    return NextResponse.json({ error: "Failed to submit application" }, { status: 500 })
  }
}

