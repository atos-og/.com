import ProjectCards from '../../components/ProjectCards';
export const metadata = {
  "title": "Projects — atos",
  "description": "Things I've built and experiments I'm working on.",
  "alternates": {
    "canonical": "/projects"
  },
  "openGraph": {
    "title": "Projects — atos",
    "description": "Things I've built and experiments I'm working on.",
    "url": "/projects"
  }
};

export default function Page() {
 return (
<main className={"mx-auto max-w-5xl px-6 pt-32 pb-24"}>
{" "}
  <h1 className={"mb-2 text-3xl font-bold tracking-tight text-stone-900 dark:text-stone-50"}>
{"\nProjects\n"}
  </h1>
{" "}
  <p className={"mb-12 text-stone-500 dark:text-stone-400"}>
{"\nThings I've built and experiments I'm working on.\n"}
  </p>
{" "}
  <ProjectCards />
</main>
 );
}
