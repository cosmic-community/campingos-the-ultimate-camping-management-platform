import { getTranslations } from '@/lib/i18n'

export default function Footer({ locale }: { locale: string }) {
  const t = getTranslations(locale)

  return (
    <footer className="border-t border-gray-200 py-6">
      <div className="max-w-6xl mx-auto px-4 text-sm text-gray-500">
        {t.footer}
      </div>
    </footer>
  )
}