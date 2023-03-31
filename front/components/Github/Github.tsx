'use client'

import { MagnifyingGlassCircleIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import { useRouter, useSearchParams } from 'next/navigation';
import { Fragment, useLayoutEffect, useRef } from "react";
import { useHotkeys } from "react-hotkeys-hook";
import useSWR from "swr";
import { UserInformationType, UserInsightsType } from "../../types/githubTypes";
import TransitionPage from "../TransitionPage";
import Description from "./Desciption";
import InsightsGroup from "./InsightsGroup";
import YearlyChart from "./YearlyChart";

const title = "Github Contributions"
const description = "visualize, analyze and contrast your commits"

export const DEFAULT_USERNAME = "lukacspapp"
const fetcher = (username: string): Promise<UserInformationType> =>
  fetch(`/api/hello?username=${username}`).then(res => res.json() as Promise<UserInformationType>)

const DEFAULT_INSIGHTS: UserInsightsType = {
  longestStreak: 0,
  currentStreak: 0,
  totalContributions: 0,
  firstContributionDate: "",
}

export default function GithubContributions() {
  const usernameRef = useRef<HTMLInputElement>(null)
  const searchd = useSearchParams()
  const router = useRouter()

  const searchParam = searchd ? searchd.get('search') : ''

  const { data, error } = useSWR<UserInformationType, Error>(searchParam, fetcher)
  const isLoading = !data && !error
  const insights = data?.insights || DEFAULT_INSIGHTS
  const collections = data?.collections || []

  // Update router based on input
  function handleInput() {
    const username = usernameRef.current?.value || ""

    // Only push router if it doesn't already have the same username
    if (searchParam === username) return

    router.push("?search=" + username)
  }

  // Synchronize input with router
  useLayoutEffect(() => {
    const usernameInput = usernameRef.current

    // exit early if it's rendering on the server
    if (!router) return

    // exit early if usernameRef is null
    if (!usernameInput) return

    // fallback to default username
    if (searchParam === null) {
      usernameInput.value = DEFAULT_USERNAME
      router.push(`?search=${DEFAULT_USERNAME}`)
    } else {
      usernameInput.value = String(searchParam)
    }
  }, [searchParam])


  // Focus input form based on hotkeys
  useHotkeys("⌘+k, ctrl+k, /", event => {
    event.preventDefault()
    usernameRef.current?.focus()
  })

  return (
    <TransitionPage title={title} description={description}>
      <div className={clsx("flex flex-col items-center", isLoading ? "cursor-wait" : "")}>
        <Description title={title} description={description} hideBreak />
        <form
          className="relative mb-7 w-full rounded-md shadow-sm md:w-96"
          onSubmit={event => {
            event.preventDefault()
            handleInput()
          }}
        >
          <input
            className={clsx(
              "block w-full rounded-lg border bg-white p-4 pr-14 text-xl border-divider glass dark:bg-gray-800 md:w-96",
              "focus:border-blue-300 focus:ring-blue-300 dark:focus:border-blue-900 dark:focus:ring-blue-900",
              isLoading ? "cursor-wait" : "cursor-auto"
            )}
            type="text"
            placeholder="username"
            ref={usernameRef}
          />
          <button className="absolute inset-y-0 right-0 flex items-center px-3" onClick={() => handleInput()}>
            {!isLoading ? (
              <MagnifyingGlassCircleIcon className="h-8 w-8 text-gray-400 dark:text-gray-500" aria-hidden="true" />
            ) : (
              <div className="flex h-8 w-8">
                <svg
                  className="m-auto h-6 w-6 animate-spin text-black dark:text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  />
                </svg>
              </div>
            )}
          </button>
        </form>
      </div>
      <div
        className={clsx(
          "flex flex-col items-center",
          "transform transition duration-300 ease-out",
          isLoading || !error ? "opacity-0" : "opacity-100",
          isLoading || !error ? "" : "translate-y-4"
        )}
      >
        <p className="text-md mt-2 text-gray-400 dark:text-gray-500">
          Uh oh! It looks like the user you&apos;re looking for doesn&#39;t exist.
        </p>
      </div>

      <div
        className={clsx(
          "pb-0",
          "-translate-y-4 transform transition duration-300 ease-out",
          isLoading || error ? "opacity-0" : "opacity-100",
          isLoading || error ? "" : "translate-y-0"
        )}
      >
        {collections.map((collection, index) => (
          <Fragment key={index}>
            <YearlyChart key={index} collection={collection} />
            {index === 0 && (
              <>
                <InsightsGroup insights={insights} />
                <div className="divider-x mb-8" />
              </>
            )}
          </Fragment>
        ))}
      </div>
    </TransitionPage>
  )
}