export default function EmailTemplatePreview() {
  return (
    <div className="border border-gray-200 rounded-xl p-6">
      <h3 className="font-semibold mb-2">Preview</h3>
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 text-sm">
        <p><strong>Beste {{'{{guest_name}}'}},</strong></p>
        <p>Uw boeking is bevestigd voor {{'{{arrival_date}}'}}.</p>
        <p>Locatie: {{'{{location_name}}'}}</p>
        <p>Totaal: €{{'{{price_total}}'}}</p>
      </div>
    </div>
  )
}