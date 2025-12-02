// app/layout.js
import "./globals.css";

export const metadata = {
  title: "BugzeeDev – Web & Game Developer",
  description: "Portfolio of Irving (Bugzee), full-stack web & game dev.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
