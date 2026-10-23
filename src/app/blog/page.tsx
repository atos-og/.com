export const metadata = {
  title: 'Blog — atos',
  description: 'Nothing here yet.',
  alternates: { canonical: '/blog' },
};

export default function Blog() {
  return (
    <main className="mx-auto max-w-2xl px-6 pt-32 pb-24">
      <h1 className="mb-2 text-3xl font-bold tracking-tight text-stone-900 dark:text-stone-50">Blog</h1>
      <p className="text-stone-500 dark:text-stone-400">Nothing here yet.</p>
    </main>
  );
}