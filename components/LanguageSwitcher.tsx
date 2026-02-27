'use client'

import { useState } from 'react'

interface LanguageSwitcherProps {
  locale: string
  label: string
}

export default function LanguageSwitcher({ locale, label }: LanguageSwitcherProps) {
  const [value, setValue] = useState(locale)

  const handleChange = (nextLocale: string) => {
    setValue(nextLocale)
    document.cookie = `NEXT_LOCALE=${nextLocale}; path=/; max-age=31536000`
    window.location.reload()
  }

  return (
    <label className="flex items-center gap-2 text-sm text-gray-600">
      {label}
      <select
        className="border-gray-300 rounded-md text-sm"
        value={value}
        onChange={(event) => handleChange(event.target.value)}
      >
        <option value="nl">NL</option>
        <option value="en">EN</option>
      </select>
    </label>
  )
}