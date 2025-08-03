import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const title = searchParams.get('title') || 'Alfuttaim Energy'
    const description = searchParams.get('description') || 'Powering a Sustainable Future'

    return new ImageResponse(
      (
        <div
          style={{
            background: 'linear-gradient(135deg, #f97316 0%, #2563eb 100%)',
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '80px 60px',
            color: 'white',
            fontFamily: 'system-ui, sans-serif',
          }}
        >
          {/* Logo/Brand Area */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: '60px',
            }}
          >
            <div
              style={{
                fontSize: '32px',
                fontWeight: 'bold',
                background: 'rgba(255, 255, 255, 0.1)',
                padding: '16px 32px',
                borderRadius: '12px',
                backdropFilter: 'blur(12px)',
              }}
            >
              Alfuttaim Energy
            </div>
          </div>

          {/* Main Title */}
          <div
            style={{
              fontSize: title.length > 60 ? '48px' : '64px',
              fontWeight: 'bold',
              textAlign: 'center',
              lineHeight: 1.2,
              marginBottom: '30px',
              maxWidth: '1000px',
            }}
          >
            {title}
          </div>

          {/* Description */}
          {description && (
            <div
              style={{
                fontSize: '24px',
                textAlign: 'center',
                opacity: 0.9,
                maxWidth: '800px',
                lineHeight: 1.4,
              }}
            >
              {description}
            </div>
          )}

          {/* Bottom Brand */}
          <div
            style={{
              position: 'absolute',
              bottom: '40px',
              left: '60px',
              fontSize: '16px',
              opacity: 0.8,
            }}
          >
            alfuttaim-energy.com
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    )
  } catch (e: any) {
    console.log(`${e.message}`)
    return new Response(`Failed to generate the image`, {
      status: 500,
    })
  }
}
