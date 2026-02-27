// app/(admin)/admin/emails/page.tsx
import AdminSidebar from '@/components/AdminSidebar'
import EmailTemplateForm from '@/components/EmailTemplateForm'
import EmailTemplatePreview from '@/components/EmailTemplatePreview'

export default function AdminEmailsPage() {
  return (
    <div className="flex min-h-screen">
      <AdminSidebar />
      <div className="flex-1 p-8 space-y-8">
        <h1 className="text-2xl font-semibold">E-mail templates</h1>
        <div className="grid gap-8 lg:grid-cols-2">
          <EmailTemplateForm />
          <EmailTemplatePreview />
        </div>
      </div>
    </div>
  )
}