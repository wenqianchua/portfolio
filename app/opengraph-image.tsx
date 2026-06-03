import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Wen Qian Chua — UX Researcher & Product Designer'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#fafaf8',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          padding: '80px',
        }}
      >
        <div style={{ fontSize: 72, marginBottom: 24 }}>☁️</div>
        <div
          style={{
            fontSize: 52,
            fontWeight: 500,
            color: '#37352f',
            lineHeight: 1.2,
            marginBottom: 20,
          }}
        >
          Wen Qian Chua
        </div>
        <div
          style={{
            fontSize: 28,
            color: '#888',
            letterSpacing: '0.05em',
          }}
        >
          UX Researcher · Product Designer · AI
        </div>
        <div
          style={{
            position: 'absolute',
            bottom: 80,
            left: 80,
            fontSize: 18,
            color: '#bbb',
            letterSpacing: '0.1em',
          }}
        >
          wenqianchua.com
        </div>
      </div>
    ),
    size,
  )
}
