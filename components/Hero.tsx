export default function Hero({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <section className="bg-gray-50 border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <h1 className="text-3xl md:text-4xl font-semibold mb-4">{title}</h1>
        <p className="text-lg text-gray-600">{subtitle}</p>
      </div>
    </section>
  )
}