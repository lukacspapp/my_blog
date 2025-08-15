export function InsightCard({ label, value }: { label: string; value: number | string }) {
  return (
    <div className="flex transform flex-col items-center overflow-hidden rounded-lg border bg-white p-6 shadow-lg transition duration-300 ease-out border-divider glass hover:scale-[1.03] hover:shadow-2xl dark:bg-gray-800 dark:shadow-none">
      <p className="text-2xl font-semibold">{value}</p>
      <p className="mt-1 leading-6 text-gray-500">{label}</p>
    </div>
  )
}