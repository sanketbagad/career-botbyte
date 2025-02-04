import { NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseServiceRoleKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

const supabase = createClient(supabaseUrl, supabaseServiceRoleKey, {
  auth: {
    autoRefreshToken: false,
    persistSession: false
  }
})

export async function POST(request: Request) {
  const formData = await request.formData()
  const name = formData.get('name') as string
  const email = formData.get('email') as string
  const program = formData.get('program') as string
  const resume = formData.get('resume') as File
  const coverLetter = formData.get('coverLetter') as string
  const experience = formData.get('experience') as string
  const expectations = formData.get('expectations') as string

  // Check if the email has already registered for the same program
  const { data: existingApplication, error: existingError } = await supabase
  .from('Application')
  .select('*')
  .eq('email', email)
  .eq('program', program)
  .limit(1)
  .maybeSingle();



  if (existingApplication) {
    return NextResponse.json(
      { error: 'You have already applied for this program with this email address.' },
      { status: 400 }
    )
  }

  let resumeUrl = null

  if (resume) {
    const { data, error } = await supabase.storage
      .from('resumes')
      .upload(`${Date.now()}-${resume.name}`, resume)

    if (error) {
      return NextResponse.json({ error: 'Failed to upload resume' }, { status: 500 })
    }

    resumeUrl = data.path
  }

  const { data, error } = await supabase
    .from('Application')
    .insert({
      name,
      email,
      program,
      resumeUrl,
      coverLetter,
      experience,
      expectations,
    })
    .select()

  if (error) {
    console.log(error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  return NextResponse.json({ success: true, application: data[0] })
}
