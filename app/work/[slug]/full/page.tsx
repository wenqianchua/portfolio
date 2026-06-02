export default function WorkFullPage({ params }: { params: { slug: string } }) {
  return (
    <main className="mx-auto max-w-4xl px-6 py-24">
      Full case study: {params.slug}
    </main>
  );
}
