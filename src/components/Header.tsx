export default function Header(){return (
<nav aria-label="Main navigation" className={"glass-nav"}>
{" "}
  <div className={"glass-nav-row"}>
{" "}
    <a href={"/"} className={"glass-brand mascot-brand"} aria-label="Atos — home">
<span className="brand-portrait"><img src="/mascot-atos.png" width="48" height="48" alt="" /></span><span className="brand-type"><span className="brand-name">atos<span className="brand-period">.</span></span><span className="brand-caption">building &amp; exploring</span></span>
    </a>
{" "}
{" "}
    <div className={"glass-desktop hidden items-center gap-6 sm:flex"}>
{" "}
      <a href={"/projects"} className={"text-sm text-stone-500 transition-colors hover:text-stone-900 dark:text-stone-400 dark:hover:text-stone-50"}>
{" projects "}
      </a>
      <a href={"/experience"} className={"text-sm text-stone-500 transition-colors hover:text-stone-900 dark:text-stone-400 dark:hover:text-stone-50"}>
{" experience "}
      </a>
      <a href={"/blog"} className={"text-sm text-stone-500 transition-colors hover:text-stone-900 dark:text-stone-400 dark:hover:text-stone-50"}>
{" blog "}
      </a>
      <a href={"/#contact"} className={"text-sm text-stone-500 transition-colors hover:text-stone-900 dark:text-stone-400 dark:hover:text-stone-50"}>
{" contact "}
      </a>
{" "}
      <button type={"button"} aria-label={"Toggle dark mode"} data-theme-toggle={""} className={"rounded-full p-2 text-stone-500 transition-colors hover:text-stone-900 dark:text-stone-400 dark:hover:text-stone-50"}>
{" "}
{" "}
        <svg className={"hidden size-5 dark:block"} fill={"none"} viewBox={"0 0 24 24"} strokeWidth={"1.5"} stroke={"currentColor"}>
{" "}
          <path strokeLinecap={"round"} strokeLinejoin={"round"} d={"M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"}>

          </path>
{" "}
        </svg>
{" "}
{" "}
        <svg className={"block size-5 dark:hidden"} fill={"none"} viewBox={"0 0 24 24"} strokeWidth={"1.5"} stroke={"currentColor"}>
{" "}
          <path strokeLinecap={"round"} strokeLinejoin={"round"} d={"M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 006.963-2.738 9.718 9.718 0 002.039-3.26z"}>

          </path>
{" "}
        </svg>
{" "}
      </button>
{" "}
{" "}
    </div>
{" "}
{" "}
    <div className={"flex items-center gap-2 sm:hidden"}>
{" "}
      <button type={"button"} aria-label={"Toggle dark mode"} data-theme-toggle={""} className={"rounded-full p-2 text-stone-500 transition-colors hover:text-stone-900 dark:text-stone-400 dark:hover:text-stone-50"}>
{" "}
{" "}
        <svg className={"hidden size-5 dark:block"} fill={"none"} viewBox={"0 0 24 24"} strokeWidth={"1.5"} stroke={"currentColor"}>
{" "}
          <path strokeLinecap={"round"} strokeLinejoin={"round"} d={"M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"}>

          </path>
{" "}
        </svg>
{" "}
{" "}
        <svg className={"block size-5 dark:hidden"} fill={"none"} viewBox={"0 0 24 24"} strokeWidth={"1.5"} stroke={"currentColor"}>
{" "}
          <path strokeLinecap={"round"} strokeLinejoin={"round"} d={"M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 006.963-2.738 9.718 9.718 0 002.039-3.26z"}>

          </path>
{" "}
        </svg>
{" "}
      </button>
{"  "}
      <button id={"menu-toggle"} aria-controls="mobile-menu" aria-expanded="false" type={"button"} aria-label={"Toggle menu"} className={"rounded-lg p-2 text-stone-500 transition-colors hover:text-stone-900 dark:text-stone-400 dark:hover:text-stone-50"}>
{" "}
        <svg id={"menu-open"} className={"size-5"} fill={"none"} viewBox={"0 0 24 24"} strokeWidth={"1.5"} stroke={"currentColor"}>
{" "}
          <path strokeLinecap={"round"} strokeLinejoin={"round"} d={"M3.75 9h16.5m-16.5 6.75h16.5"}>

          </path>
{" "}
        </svg>
{" "}
        <svg id={"menu-close"} className={"hidden size-5"} fill={"none"} viewBox={"0 0 24 24"} strokeWidth={"1.5"} stroke={"currentColor"}>
{" "}
          <path strokeLinecap={"round"} strokeLinejoin={"round"} d={"M6 18L18 6M6 6l12 12"}>

          </path>
{" "}
        </svg>
{" "}
      </button>
{" "}
    </div>
{" "}
  </div>
{" "}
{" "}
  <div id={"mobile-menu"} className={"glass-mobile hidden sm:hidden"}>
{" "}
    <div className={"space-y-1 px-6 py-4"}>
{" "}
      <a href={"/projects"} className={"mobile-link block rounded-lg px-3 py-2 text-base text-stone-600 transition-colors hover:bg-stone-100 hover:text-stone-900 dark:text-stone-300 dark:hover:bg-stone-800 dark:hover:text-stone-50"}>
{" projects "}
      </a>
      <a href={"/experience"} className={"mobile-link block rounded-lg px-3 py-2 text-base text-stone-600 transition-colors hover:bg-stone-100 hover:text-stone-900 dark:text-stone-300 dark:hover:bg-stone-800 dark:hover:text-stone-50"}>
{" experience "}
      </a>
      <a href={"/blog"} className={"mobile-link block rounded-lg px-3 py-2 text-base text-stone-600 transition-colors hover:bg-stone-100 hover:text-stone-900 dark:text-stone-300 dark:hover:bg-stone-800 dark:hover:text-stone-50"}>
{" blog "}
      </a>
      <a href={"/#contact"} className={"mobile-link block rounded-lg px-3 py-2 text-base text-stone-600 transition-colors hover:bg-stone-100 hover:text-stone-900 dark:text-stone-300 dark:hover:bg-stone-800 dark:hover:text-stone-50"}>
{" contact "}
      </a>
{" "}
    </div>
{" "}
  </div>
{" "}
</nav>
);}
