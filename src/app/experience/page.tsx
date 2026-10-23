export const metadata = {
  title: 'Experience — atos',
  description: 'My journey in entrepreneurship, building products and studying Computer Science.',
  alternates: { canonical: '/experience' },
  openGraph: { title: 'Experience — atos', description: 'My journey in entrepreneurship, building products and studying Computer Science.', url: '/experience' },
};

const experiences = [
  { name: 'Stealth project', role: 'Founder', period: 'Now', tag: 'In progress', description: "Currently in development." },
  { name: 'Global e-commerce business', role: 'Founder', period: '2025 · Approx. 7 months', tag: 'E-commerce · Global market', description: 'I founded a global e-commerce business, serving thousands of customers and generating approximately 100k in revenue over about seven months.' },
  { name: 'Faceless content page', role: 'Founder & operator', period: '2023 — 2024', tag: 'Audience growth · Monetization', description: 'Built and monetized a niche social media page, growing its following through content without appearing on camera.' },
  { name: 'Selling NFTs', role: 'Seller & player', period: '2020 — 2021', tag: 'Digital collectibles · NFT games', description: 'Explored the early NFT market, sold digital collectibles and played NFT games, learning about online communities, digital ownership and internet-native markets.' },
];

export default function Experience() {
  return (
    <main className="experience-page mx-auto max-w-2xl px-6 pt-32 pb-24">
      <p className="journey-eyebrow">THE JOURNEY SO FAR</p>
      <h1 className="mb-2 text-3xl font-bold tracking-tight text-stone-900 dark:text-stone-50">Experience</h1>
      <p className="journey-intro text-stone-500 dark:text-stone-400">Building businesses, studying tech and following my curiosity.</p>
      <section aria-label="Entrepreneurship timeline">
        <ol className="experience-timeline">
          {experiences.map((experience, index) => (
            <li key={experience.name} className={'timeline-entry' + (index === 0 ? ' timeline-current' : '')}>
              <span className="timeline-dot" aria-hidden="true" />
              <div className="timeline-period">{experience.period}</div>
              <article className="timeline-content">
                <div className="timeline-heading">
                  <span className="timeline-icon" aria-hidden="true">{index === 0 ? (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="m12 3 2.5 6.5L21 12l-6.5 2.5L12 21l-2.5-6.5L3 12l6.5-2.5L12 3Z" /></svg>
                  ) : (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="9"/><ellipse cx="12" cy="12" rx="4" ry="9"/><path d="M3 12h18M5 6.5h14M5 17.5h14"/></svg>
                  )}</span>
                  <div><h2>{experience.name}</h2><p className="timeline-role">{experience.role}</p></div>
                </div>
                <p className="timeline-description">{experience.description}</p>
                <span className="timeline-tag">{experience.tag}</span>
              </article>
            </li>
          ))}
        </ol>
      </section>
      <section className="journey-education" aria-labelledby="education-title">
        <p className="journey-eyebrow">ALONG THE WAY</p>
        <h2 id="education-title">Education & community</h2>
        <div className="education-heading"><h3>PUC Minas</h3><span>Computer Science</span></div>
        <p className="education-location">Minas Gerais, Brazil</p>
        <p className="timeline-description">I study Computer Science at PUC Minas, building a strong foundation in mathematics, algorithms and computational thinking. Alongside my studies, I build useful side projects and explore AI agents and data science.</p>
      </section>
    </main>
  );
}
