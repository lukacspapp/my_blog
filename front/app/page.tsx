'use client'
import { TooltipProvider } from "@radix-ui/react-tooltip";
import clsx from "clsx";
import Inspect from "inspx";
import Navigation from "../components/Navigation/Navigation";



export default function Home() {

  return (
    <Inspect>
      <div className="mx-auto max-w-screen-lg">
        <span
          className={clsx(
            "rounded-full bg-gradient-to-r",
            "dark:from-rose-700 dark:via-pink-700 dark:to-purple-700 dark:opacity-60",
            "from-blue-300 via-cyan-300 to-green-300 opacity-70",
            "-z-50 aspect-square w-full max-w-screen-lg blur-3xl filter",
            "bottom-[calc(100%-200px)] dark:bottom-[calc(100%-180px)]",
            "absolute"
          )}
        />
      </div>
      <TooltipProvider>
        <Navigation />
      </TooltipProvider>
    </Inspect>
  );
}

