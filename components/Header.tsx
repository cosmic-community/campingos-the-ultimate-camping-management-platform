import Link from 'next/link'
import LanguageSwitcher from '@/components/LanguageSwitcher'
import { getTranslations } from '@/lib/i18n'

export default function Header({ locale }: { locale: string }) {
  const t = getTranslations(locale)

  return (
    <header className="border-b border-gray-200 bg-white">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-lg font-semibold">
          CampingOS
        </Link>
        <nav className="flex items-center gap-6 text-sm text-gray-600">
          <Link href="/admin">Dashboard</Link>
          <Link href="/admin/bookings">Boekingen</Link>
          <Link href="/admin/locations">Locaties</Link>
          <LanguageSwitcher locale={locale} label={t.language} />
        </nav>
      </div>
    </header>
  )
}