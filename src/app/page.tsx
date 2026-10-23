import { about } from '../data/profile';
import ProjectCards from '../components/ProjectCards';
import Contributions from '../components/Contributions';
export const metadata = {
  "title": "atos",
  "description": "Atos Barros Almeida — Computer Science student at PUC Minas, founder and builder.",
  "alternates": {
    "canonical": "/"
  },
  "openGraph": {
    "title": "atos",
    "description": "Atos Barros Almeida — Computer Science student at PUC Minas, founder and builder.",
    "url": "/"
  }
};

export default function Page() {
 return (
<main>
{" "}
  <section id={"hero"} className={"relative flex min-h-screen flex-col items-center justify-center px-6"} data-astro-cid-bbe6dxrz={""}>
{" "}
    <div className={"hero-container relative flex items-center justify-center"} data-astro-cid-bbe6dxrz={""}>
{" "}
      <div id={"hero-domain"} className={"hero-line"} data-astro-cid-bbe6dxrz={""}>
{" "}
        <span className={"hero-text font-mono font-bold tracking-tight text-stone-900 dark:text-stone-50"} data-astro-cid-bbe6dxrz={""}>
{"atos"}
        </span>
{" "}
      </div>
{" "}
      <div id={"hero-phrase"} className={"hero-line opacity-0"} data-astro-cid-bbe6dxrz={""}>
{" "}
        <span className={"hero-text font-sans font-bold tracking-tight text-stone-900 dark:text-stone-50"} data-astro-cid-bbe6dxrz={""}>

          <span id={"hero-word"} data-astro-cid-bbe6dxrz={""}>

          </span>
          <span className={"text-emerald-600 dark:text-emerald-400"} data-astro-cid-bbe6dxrz={""}>
{"."}
          </span>
{" "}
        </span>
{" "}
      </div>
{" "}
    </div>
{" "}
    <p className={"hero-subtitle mt-6 max-w-md text-center text-lg text-stone-500 opacity-0 dark:text-stone-400"} data-astro-cid-bbe6dxrz={""}>
{"\nDeveloper, student, builder & other things.\n"}
    </p>
{" "}
    <a href={"#about"} className={"hero-cta absolute bottom-12 opacity-0 transition-colors hover:text-emerald-600 dark:hover:text-emerald-400"} aria-label={"Scroll to about section"} data-astro-cid-bbe6dxrz={""}>
{" "}
      <svg className={"size-6 animate-bounce text-stone-400"} fill={"none"} viewBox={"0 0 24 24"} strokeWidth={"1.5"} stroke={"currentColor"} data-astro-cid-bbe6dxrz={""}>
{" "}
        <path strokeLinecap={"round"} strokeLinejoin={"round"} d={"M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3"} data-astro-cid-bbe6dxrz={""}>

        </path>
{" "}
      </svg>
{" "}
    </a>
{" "}
  </section>
{"  "}
{" "}
  <section id={"about"} className={"mx-auto max-w-2xl px-6 py-24"}>
{" "}
    <h2 className={"mb-8 font-mono text-sm font-medium uppercase tracking-widest text-emerald-600 dark:text-emerald-400"}>
{"\nAbout\n"}
    </h2>
{" "}
    <div className="space-y-5 text-lg leading-relaxed text-stone-600 dark:text-stone-300">{about.map(paragraph => <p key={paragraph}>{paragraph}</p>)}</div>
  </section>
{" "}
  <section id={"projects"} className={"mx-auto max-w-5xl px-6 py-24"}>
{" "}
    <div className={"mb-8 flex items-center justify-between"}>
{" "}
      <h2 className={"font-mono text-sm font-medium uppercase tracking-widest text-emerald-600 dark:text-emerald-400"}>
{"\nProjects\n"}
      </h2>
{" "}
      <a href={"/projects"} className={"text-sm text-stone-400 transition-colors hover:text-emerald-600 dark:hover:text-emerald-400"}>
{"\nView all →\n"}
      </a>
{" "}
    </div>
{" "}
    <ProjectCards />
    <Contributions />
  </section>
{" "}
  <section id={"contact"} className={"mx-auto max-w-2xl px-6 py-24"}>
{" "}
    <h2 className={"mb-8 font-mono text-sm font-medium uppercase tracking-widest text-emerald-600 dark:text-emerald-400"}>
{"\nContact\n"}
    </h2>
{" "}
    <p className={"mb-8 text-lg text-stone-500 dark:text-stone-400"}>
{"\nWant to chat? Feel free to reach out.\n"}
    </p>
{" "}
    <div className={"flex gap-5"}>
{" "}
      <a href={"https://github.com/atos-og"} target={"_blank"} rel={"noopener noreferrer"} aria-label={"GitHub"} className={"rounded-lg border border-stone-200 p-3 text-stone-500 transition-all hover:-translate-y-0.5 hover:border-emerald-500/30 hover:text-emerald-600 hover:shadow-md dark:border-stone-800 dark:text-stone-400 dark:hover:border-emerald-400/30 dark:hover:text-emerald-400"}>
{" "}
        <svg className={"size-5"} viewBox={"0 0 24 24"}>
          <path d={"M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"} fill={"currentColor"}>

          </path>
        </svg>
{" "}
      </a>
      <a href={"https://www.linkedin.com/in/atos-barros/"} target={"_blank"} rel={"noopener noreferrer"} aria-label={"LinkedIn"} className={"rounded-lg border border-stone-200 p-3 text-stone-500 transition-all hover:-translate-y-0.5 hover:border-emerald-500/30 hover:text-emerald-600 hover:shadow-md dark:border-stone-800 dark:text-stone-400 dark:hover:border-emerald-400/30 dark:hover:text-emerald-400"}>
{" "}
        <svg className={"size-5"} viewBox={"0 0 24 24"}>
          <path d={"M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"} fill={"currentColor"}>

          </path>
        </svg>
{" "}
      </a>
      <a href={"https://x.com/atosbarros_s"} target={"_blank"} rel={"noopener noreferrer"} aria-label={"X"} className={"rounded-lg border border-stone-200 p-3 text-stone-500 transition-all hover:-translate-y-0.5 hover:border-emerald-500/30 hover:text-emerald-600 hover:shadow-md dark:border-stone-800 dark:text-stone-400 dark:hover:border-emerald-400/30 dark:hover:text-emerald-400"}>
{" "}
        <svg className={"size-5"} viewBox={"0 0 24 24"}>
          <path d={"M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"} fill={"currentColor"}>

          </path>
        </svg>
{" "}
      </a>
      <a href={"mailto:atosbarros23@icloud.com"} aria-label={"Email"} className={"rounded-lg border border-stone-200 p-3 text-stone-500 transition-all hover:-translate-y-0.5 hover:border-emerald-500/30 hover:text-emerald-600 hover:shadow-md dark:border-stone-800 dark:text-stone-400 dark:hover:border-emerald-400/30 dark:hover:text-emerald-400"}>
{" "}
        <svg className={"size-5"} viewBox={"0 0 24 24"}>
          <path strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"1.5"} stroke={"currentColor"} fill={"none"} d={"M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"}>

          </path>
        </svg>
{" "}
      </a>
{" "}
    </div>
{" "}
  </section>
{" "}
</main>
 );
}
