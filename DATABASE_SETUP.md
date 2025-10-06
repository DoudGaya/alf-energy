# Database Setup Instructions

## Setting up Neon Database with Prisma

### 1. Create a Neon Database

1. Go to [Neon Console](https://console.neon.tech/)
2. Sign in or create a new account
3. Click "Create Project"
4. Give your project a name (e.g., "alfuttaim-energy")
5. Select a region closest to your users
6. Click "Create Project"

### 2. Get Your Connection String

1. After creating the project, you'll see your connection details
2. Copy the connection string (it looks like: `postgresql://username:password@host.neon.tech/neondb?sslmode=require`)
3. You'll need this for your `.env` file

### 3. Set Up Environment Variables

1. Create a `.env` file in the root of your project (if it doesn't exist)
2. Add your Neon connection string:

```env
DATABASE_URL="your-neon-connection-string-here"
```

Example:
```env
DATABASE_URL="postgresql://alfuttaim_owner:npg_xxxxx@ep-xxxxx.us-east-2.aws.neon.tech/alfuttaim?sslmode=require"
```

### 4. Install Dependencies

Make sure you have all the required dependencies installed:

```bash
npm install prisma @prisma/client @neondatabase/serverless
```

Or with the legacy peer deps flag if you encounter conflicts:

```bash
npm install prisma @prisma/client @neondatabase/serverless --legacy-peer-deps
```

### 5. Initialize Prisma (if not already done)

The Prisma schema is already set up in `prisma/schema.prisma`. To generate the Prisma client:

```bash
npx prisma generate
```

### 6. Run Database Migrations

Create the database tables based on your schema:

```bash
npx prisma db push
```

Or to create a proper migration:

```bash
npx prisma migrate dev --name init
```

### 7. View Your Database (Optional)

You can use Prisma Studio to view and edit your database:

```bash
npx prisma studio
```

This will open a browser window where you can see your `Visitor` table and any data stored in it.

## How the Visitor Modal Works

1. **First Visit**: When a user visits your website for the first time, a modal will appear after 1 second asking for their information.

2. **Form Fields**: The modal collects:
   - First Name
   - Last Name
   - Email
   - Company Name
   - Phone Number

3. **Local Storage**: After submission (or if they skip), the app stores a flag in localStorage so the modal won't show again on future visits.

4. **Database Storage**: Submitted information is saved to the Neon database with a unique email constraint (no duplicates).

5. **API Endpoint**: The form submits to `/api/visitors` which validates and stores the data.

## Viewing Visitor Data

### Option 1: Prisma Studio
```bash
npx prisma studio
```

### Option 2: Direct Database Query
You can create an admin page to view visitors or query directly from the Neon console.

### Option 3: Create an Admin API Route
Add this to `app/api/visitors/list/route.ts`:

```typescript
import { NextResponse } from 'next/server'
import prisma from '@/lib/prisma'

export async function GET() {
  try {
    const visitors = await prisma.visitor.findMany({
      orderBy: { createdAt: 'desc' },
      take: 100,
    })
    
    return NextResponse.json({ visitors })
  } catch (error) {
    console.error('Error fetching visitors:', error)
    return NextResponse.json(
      { message: 'Error fetching visitors' },
      { status: 500 }
    )
  }
}
```

Then visit `/api/visitors/list` to see all visitors.

## Troubleshooting

### Issue: "Can't reach database server"
- Check that your DATABASE_URL is correct
- Ensure your Neon database is active (it may sleep after inactivity on free tier)
- Check your internet connection

### Issue: "Module not found: prisma"
- Run: `npm install prisma @prisma/client --legacy-peer-deps`
- Then: `npx prisma generate`

### Issue: Modal doesn't appear
- Clear your browser's localStorage
- Check the browser console for errors
- Ensure you're on the home page (`/`)

### Issue: Form submission fails
- Check that DATABASE_URL is set in `.env`
- Verify Prisma client is generated: `npx prisma generate`
- Check database connection: `npx prisma db push`
- Look at server logs for detailed error messages

## Security Notes

1. **Never commit `.env` file** - It's already in `.gitignore`
2. **Validate all inputs** - The API uses Zod for validation
3. **Unique email constraint** - Prevents duplicate submissions
4. **Rate limiting** - Consider adding rate limiting for production

## Production Deployment

When deploying to production:

1. Set your `DATABASE_URL` in your hosting platform's environment variables
2. Run migrations: `npx prisma migrate deploy`
3. Update `NEXT_PUBLIC_SITE_URL` to your production domain
4. Consider adding proper authentication for any admin routes
