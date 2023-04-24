export default function Gradient() {

  const gradient = "rounded-full bg-gradient-to-r dark:from-purple-700 dark:via-indigo-700 dark:to-blue-700 dark:opacity-60 from-yellow-300 via-orange-300 to-red-300 opacity-70 -z-50 aspect-square w-full max-w-screen-lg blur-3xl filter bottom-[calc(100%-200px)] dark:bottom-[calc(100%-180px)] fixed";

  return (
    <div className="mx-auto max-w-screen-lg">
      <span className={gradient} />
    </div>
  )
}

