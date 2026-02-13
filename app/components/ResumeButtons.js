export default function ResumeButtons() {
    return (
      <div className="mt-6 flex flex-wrap gap-4">
        {/* View Resume */}
        <a
          href="/Irving-Sylva-Full-Stack-Developer-Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-full border-2 border-emerald-500 px-4 py-2.5 text-sm font-semibold text-emerald-400 shadow-lg shadow-emerald-500/20 transition hover:bg-emerald-500 hover:text-slate-950"
        >
          View Resume
        </a>

        {/* Download Resume */}
        <a
          href="/Irving-Sylva-Full-Stack-Developer-Resume.pdf"
          download="Irving-Sylva-Resume.pdf"
          className="inline-flex items-center justify-center rounded-full bg-emerald-500 px-4 py-2.5 text-sm font-semibold text-slate-950 shadow-lg shadow-emerald-500/30 transition hover:bg-emerald-400"
        >
          Download Resume
        </a>
      </div>
    );
  }
  