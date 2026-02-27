export default function EmailTemplateForm() {
  return (
    <form className="space-y-4 border border-gray-200 rounded-xl p-6">
      <h3 className="font-semibold">Nieuwe template</h3>
      <div>
        <label className="block text-sm text-gray-600 mb-1">Naam</label>
        <input className="w-full border-gray-300 rounded-md" placeholder="Bevestiging" />
      </div>
      <div>
        <label className="block text-sm text-gray-600 mb-1">Onderwerp</label>
        <input className="w-full border-gray-300 rounded-md" placeholder="Uw boeking is bevestigd" />
      </div>
      <div>
        <label className="block text-sm text-gray-600 mb-1">HTML inhoud</label>
        <textarea className="w-full border-gray-300 rounded-md h-32" />
      </div>
      <button className="bg-gray-900 text-white rounded-md px-4 py-2">
        Opslaan
      </button>
    </form>
  )
}