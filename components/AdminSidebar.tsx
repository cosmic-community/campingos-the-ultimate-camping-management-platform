import Link from 'next/link'

const links = [
  { href: '/admin', label: 'Dashboard' },
  { href: '/admin/bookings', label: 'Boekingen' },
  { href: '/admin/locations', label: 'Locaties' },
  { href: '/admin/emails', label: 'E-mails' },
  { href: '/admin/settings', label: 'Instellingen' }
]

export default function AdminSidebar() {
  return (
    <aside className="w-64 border-r border-gray-200 bg-gray-50 p-6">
      <h2 className="font-semibold mb-6">CampingOS Admin</h2>
      <nav className="space-y-3 text-sm">
        {links.map((link) => (
          <Link key={link.href} href={link.href} className="block text-gray-700">
            {link.label}
          </Link>
        ))}
      </nav>
    </aside>
  )
}