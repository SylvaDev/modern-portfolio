// app/layout.js
import "./globals.css";
import BackgroundParticles from "./components/BackgroundParticles";

export const metadata = {
  title: "SylvaDev – Web & Game Developer",
  description: "Portfolio of Irving Sylva, full-stack web developer.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="relative bg-slate-950 text-slate-50">
        <BackgroundParticles />
        {children}
      </body>
    </html>
  );
}
