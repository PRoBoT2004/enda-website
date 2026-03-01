import './globals.css'

export const metadata = {
  title: 'ENDA',
  description: 'Performance footwear from Kenya',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}