// app/(admin)/admin/settings/page.tsx
import AdminSidebar from '@/components/AdminSidebar'

export default function AdminSettingsPage() {
  return (
    <div className="flex min-h-screen">
      <AdminSidebar />
      <div className="flex-1 p-8">
        <h1 className="text-2xl font-semibold">Instellingen</h1>
        <p className="text-gray-600 mt-2">
          Pas thema’s, e-mails en boekingsregels aan.
        </p>
      </div>
    </div>
  )
}