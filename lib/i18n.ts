const translations = {
  nl: {
    language: 'Taal',
    footer: '© CampingOS – Alle rechten voorbehouden.',
    home: {
      title: 'Beheer je camping met één platform',
      subtitle: 'Boekingen, prijzen en gastenbeheer in één SaaS-oplossing.',
      featuredCampings: 'Uitgelichte campings'
    }
  },
  en: {
    language: 'Language',
    footer: '© CampingOS – All rights reserved.',
    home: {
      title: 'Manage your camping with one platform',
      subtitle: 'Bookings, pricing, and guest management in one SaaS solution.',
      featuredCampings: 'Featured campings'
    }
  }
}

export function getLocale(cookieLocale?: string) {
  if (cookieLocale === 'en') return 'en'
  return 'nl'
}

export function getTranslations(locale: string) {
  return locale === 'en' ? translations.en : translations.nl
}