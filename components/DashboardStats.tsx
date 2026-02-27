const stats = [
  { label: 'Bezettingsgraad', value: '78%' },
  { label: 'Omzet deze maand', value: '€42.500' },
  { label: 'Aankomsten', value: '38' },
  { label: 'Open betalingen', value: '5' }
]

export default function DashboardStats() {
  return (
    <div className="grid gap-4 md:grid-cols-4">
      {stats.map((stat) => (
        <div key={stat.label} className="border border-gray-200 rounded-xl p-4">
          <p className="text-sm text-gray-500">{stat.label}</p>
          <p className="text-xl font-semibold mt-2">{stat.value}</p>
        </div>
      ))}
    </div>
  )
}