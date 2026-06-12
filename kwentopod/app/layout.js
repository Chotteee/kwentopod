import '../styles/globals.css'

export const metadata = {
  title: 'KwentoPod — Professional Podcast Video Editing',
  description: 'Professional podcast video editing built for creators — multi-cam cuts, clean audio, AI thumbnails, and content repurposed for every major platform.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
