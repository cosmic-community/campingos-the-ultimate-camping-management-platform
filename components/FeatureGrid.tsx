const features = [
  { title: 'Multi-tenant beheer', description: 'Beheer campings veilig en schaalbaar.' },
  { title: 'Realtime beschikbaarheid', description: 'Voorkom dubbele boekingen.' },
  { title: 'Dynamische prijzen', description: 'Flexibele regels per seizoen en weekend.' },
  { title: 'Mollie betalingen', description: 'iDEAL, Bancontact en meer.' }
]

export default function FeatureGrid() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {features.map((feature) => (
        <div key={feature.title} className="border border-gray-200 rounded-xl p-6">
          <h3 className="font-semibold">{feature.title}</h3>
          <p className="text-sm text-gray-600 mt-2">{feature.description}</p>
        </div>
      ))}
    </div>
  )
}