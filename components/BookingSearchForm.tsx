export default function BookingSearchForm() {
  return (
    <form className="grid gap-4 md:grid-cols-5 items-end">
      <div>
        <label className="block text-sm text-gray-600 mb-1">Aankomst</label>
        <input type="date" className="w-full border-gray-300 rounded-md" />
      </div>
      <div>
        <label className="block text-sm text-gray-600 mb-1">Vertrek</label>
        <input type="date" className="w-full border-gray-300 rounded-md" />
      </div>
      <div>
        <label className="block text-sm text-gray-600 mb-1">Type</label>
        <select className="w-full border-gray-300 rounded-md">
          <option>Tent</option>
          <option>Glamping</option>
          <option>Bungalow</option>
        </select>
      </div>
      <div>
        <label className="block text-sm text-gray-600 mb-1">Personen</label>
        <input type="number" min={1} className="w-full border-gray-300 rounded-md" />
      </div>
      <button
        type="submit"
        className="bg-gray-900 text-white rounded-md py-2 px-4"
      >
        Zoeken
      </button>
    </form>
  )
}