import { NextRequest, NextResponse } from 'next/server'
import prisma from '@/lib/prisma'
import { z } from 'zod'

const visitorSchema = z.object({
  firstName: z.string().min(2, 'First name must be at least 2 characters'),
  lastName: z.string().min(2, 'Last name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  companyName: z.string().min(2, 'Company name must be at least 2 characters'),
  phoneNumber: z.string().min(10, 'Phone number must be at least 10 characters'),
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Validate the request body
    const validatedData = visitorSchema.parse(body)
    
    // Check if visitor already exists by email
    const existingVisitor = await prisma.visitor.findUnique({
      where: { email: validatedData.email },
    })
    
    if (existingVisitor) {
      return NextResponse.json(
        { message: 'Welcome back! You have already submitted your information.' },
        { status: 200 }
      )
    }
    
    // Create new visitor
    const visitor = await prisma.visitor.create({
      data: validatedData,
    })
    
    return NextResponse.json(
      { 
        message: 'Thank you for your information!',
        visitor: {
          id: visitor.id,
          firstName: visitor.firstName,
          email: visitor.email,
        }
      },
      { status: 201 }
    )
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { message: 'Validation error', errors: error.errors },
        { status: 400 }
      )
    }
    
    console.error('Error creating visitor:', error)
    return NextResponse.json(
      { message: 'An error occurred while processing your request' },
      { status: 500 }
    )
  }
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const email = searchParams.get('email')
    
    if (!email) {
      return NextResponse.json(
        { message: 'Email parameter is required' },
        { status: 400 }
      )
    }
    
    const visitor = await prisma.visitor.findUnique({
      where: { email },
    })
    
    return NextResponse.json({ exists: !!visitor })
  } catch (error) {
    console.error('Error checking visitor:', error)
    return NextResponse.json(
      { message: 'An error occurred while checking visitor' },
      { status: 500 }
    )
  }
}
