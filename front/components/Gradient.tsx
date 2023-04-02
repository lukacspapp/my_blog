
export default function Gradient() {
  const gradientClasses = `rounded-full bg-gradient-to-r dark:from-rose-700 dark:via-pink-700 dark:to-purple-700 dark:opacity-60 from-blue-300 via-cyan-300 to-green-300 opacity-70 -z-50 aspect-square w-full max-w-screen-md blur-3xl filter`;

  return (
    <div className="fixed inset-x-0 top-0 flex justify-center transform -translate-y-3/4">
      <div className={gradientClasses} />
    </div>
  )
}