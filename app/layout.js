// app/layout.js
// Play and AvenirNext are both served from /public/fonts/ via globals.css
// No next/font/google needed — everything is local

import './globals.css';

export const metadata = {
  title: 'Enda',
  description: 'Enda — Run Forever',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}