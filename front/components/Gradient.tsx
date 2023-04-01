
export default function Gradient() {
  const gradientClass = `rounded-full bg-gradient-to-r dark:from-rose-700 dark:via-pink-700 dark:to-purple-700 dark:opacity-60 from-blue-300 via-cyan-300 to-green-300 opacity-70 -z-50 aspect-square w-full max-w-screen-lg blur-3xl filter bottom-[calc(100%-200px)] dark:bottom-[calc(100%-180px)]`;

  return (
    <div className="fixed inset-0 flex items-center justify-center">
      <div className={gradientClass} />
    </div>
  )
}