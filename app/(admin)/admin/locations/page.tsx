// app/(admin)/admin/locations/page.tsx
import AdminSidebar from '@/components/AdminSidebar'

export default function AdminLocationsPage() {
  return (
    <div className="flex min-h-screen">
      <AdminSidebar />
      <div className="flex-1 p-8">
        <h1 className="text-2xl font-semibold">Locaties beheren</h1>
        <p className="text-gray-600 mt-2">
          Beheer locatie types, spots en prijsregels.
        </p>
      </div>
    </div>
  )
}