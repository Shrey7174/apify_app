// src/app/layout.jsx
import './globals.css';

export const metadata = {
  title: 'Apify Integration App',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
