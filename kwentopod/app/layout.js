import '../styles/globals.css'

export const metadata = {
  title: 'KwentoPod — Professional Podcast Video Editing',
  description: 'Professional podcast video editing built for creators. Multi-cam cuts, short-form reels, 4 platforms optimized.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
