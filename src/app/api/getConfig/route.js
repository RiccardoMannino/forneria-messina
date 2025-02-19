import { NextResponse } from 'next/server'

export async function GET() {
  const responseData = {
    supabaseUrl: process.env.SUPABASE_URL,
    supabaseKey: process.env.SUPABASE_ANON_KEY,
  }

  // Restituisci la risposta JSON
  return NextResponse.json(responseData)
}
