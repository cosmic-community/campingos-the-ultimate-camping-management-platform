// app/(admin)/admin/bookings/page.tsx
import AdminSidebar from '@/components/AdminSidebar'

export default function AdminBookingsPage() {
  return (
    <div className="flex min-h-screen">
      <AdminSidebar />
      <div className="flex-1 p-8">
        <h1 className="text-2xl font-semibold">Boekingen</h1>
        <p className="text-gray-600 mt-2">
          Overzicht van aankomende boekingen en open betalingen.
        </p>
      </div>
    </div>
  )
}