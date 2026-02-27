interface PricingBreakdownProps {
  basePrice: number
  extras: { label: string; price: number }[]
  total: number
}

export default function PricingBreakdown({ basePrice, extras, total }: PricingBreakdownProps) {
  return (
    <div className="border border-gray-200 rounded-xl p-6 space-y-3">
      <h3 className="font-semibold">Prijsopbouw</h3>
      <div className="flex justify-between text-sm">
        <span>Basisprijs</span>
        <span>€{basePrice}</span>
      </div>
      {extras.map((extra) => (
        <div key={extra.label} className="flex justify-between text-sm">
          <span>{extra.label}</span>
          <span>€{extra.price}</span>
        </div>
      ))}
      <div className="flex justify-between font-semibold pt-2 border-t border-gray-200">
        <span>Totaal</span>
        <span>€{total}</span>
      </div>
    </div>
  )
}