// app/(admin)/admin/page.tsx
import AdminSidebar from '@/components/AdminSidebar'
import DashboardStats from '@/components/DashboardStats'
import BookingCalendar from '@/components/BookingCalendar'

export default function AdminDashboard() {
  return (
    <div className="flex min-h-screen">
      <AdminSidebar />
      <div className="flex-1 p-8 space-y-8">
        <h1 className="text-2xl font-semibold">Admin Dashboard</h1>
        <DashboardStats />
        <BookingCalendar />
      </div>
    </div>
  )
}