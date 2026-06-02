export default function WorkPreviewPage({ params }: { params: { slug: string } }) {
  return (
    <main className="mx-auto max-w-4xl px-6 py-24">
      Work preview: {params.slug}
    </main>
  );
}
