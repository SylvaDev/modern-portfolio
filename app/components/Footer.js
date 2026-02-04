export default function Footer() {
  return (
    <footer className="mt-10 border-t border-slate-800 pt-6 text-xs text-slate-500">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <p>
          © {new Date().getFullYear()} Irving / SylvaDev. All rights reserved.
        </p>
        <div className="flex gap-4">
          <a
            href="https://github.com/SylvaDev"
            target="_blank"
            rel="noreferrer"
            className="hover:text-emerald-400"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/irvingsylva"
            target="_blank"
            rel="noreferrer"
            className="hover:text-emerald-400"
          >
            LinkedIn
          </a>
          <a
            href="https://exovaralabs.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-emerald-400"
          >
            Exovara Labs
          </a>
        </div>
      </div>
    </footer>
  );
}

