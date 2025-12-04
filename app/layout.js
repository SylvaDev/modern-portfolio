// app/layout.js
import "./globals.css";

export const metadata = {
  title: "SylvaDev – Web & Game Developer",
  description: "Portfolio of Irving Sylva, full-stack web developer.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
