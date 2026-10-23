import ProjectPreview from './ProjectPreview';
import { projects } from '../data/profile';
export default function ProjectCards() {
 return <div className="grid gap-6 sm:grid-cols-2">{projects.map(project => <a key={project.url} href={project.url} target="_blank" rel="noopener noreferrer" className="portfolio-project-card group block rounded-xl border border-stone-200 bg-white transition-all hover:-translate-y-1 hover:border-emerald-500/30 hover:shadow-lg dark:border-stone-800 dark:bg-stone-900 dark:hover:border-emerald-400/30">
 <ProjectPreview name={project.name} />
 <div className="project-card-copy"><div className="mb-3 flex items-center justify-between"><h3 className="font-semibold text-stone-900 transition-colors group-hover:text-emerald-600 dark:text-stone-50 dark:group-hover:text-emerald-400">{project.name}</h3><svg className="size-4 text-stone-400" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" /></svg></div>
 <p className="mb-4 text-sm leading-relaxed text-stone-500 dark:text-stone-400">{project.description}</p><div className="flex flex-wrap gap-2">{project.tags.map(tag=><span key={tag} className="rounded-full bg-stone-100 px-2.5 py-0.5 text-xs font-medium text-stone-600 dark:bg-stone-800 dark:text-stone-300">{tag}</span>)}</div></div></a>)}</div>;
}
