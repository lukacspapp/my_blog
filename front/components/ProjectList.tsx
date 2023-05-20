'use client'

import clsx from "clsx"
import Link from "next/link"
import { useRef, useState } from "react"
import { na } from "../lib/date"
import { Project } from "../types/portfolioTypes"

type ProjectListProps = {
  projects: Project[]
}

const cardStyle =
  "flex flex-col px-4 py-6 relative hover:highlight sm:hover:!bg-transparent rounded-xl transition-colors duration-300"
const asideStyle =
  "absolute [writing-mode:vertical-rl] h-full top-0 -left-12 md:-left-14 pr-11 text-center text-sm text-gray-400 dark:text-gray-600 font-['Luxurious_Roman']"

export default function ProjectList({ projects } : ProjectListProps) {

  const [highlightedTab, setHighlightedTab] = useState<HTMLElement | null>(null)
  const [isHoveredFromNull, setIsHoveredFromNull] = useState(true)
  const [transform, setTransform] = useState("translate(0, 0")

  const parentRef = useRef<HTMLDivElement>(null)
  const highlightRef = useRef<HTMLDivElement>(null)

  function handleMouseOver(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {

    const node = event.target as HTMLElement
    const parent = parentRef.current!

    setIsHoveredFromNull(!highlightedTab)
    setHighlightedTab(node)

    const tabBoundingBox = node.getBoundingClientRect()
    const parentBoundingBox = parent.getBoundingClientRect()
    const highlightOffset = tabBoundingBox.top - parentBoundingBox.top

    // exit early if event triggered by children
    if (node.className === cardStyle || node.className === asideStyle) {
      setTransform(`translate(0, ${highlightOffset}px)`)
    }
  }

  return (

      <div className="ml-12 md:ml-0">
        {/* Book Binding */}
        <div className="fixed top-0 -ml-4 h-full border-l-2 border-dotted border-divider md:-ml-6" />

        <div ref={parentRef} className="relative" onMouseLeave={() => setHighlightedTab(null)}>
          {/* Highlighter */}
          <div
            ref={highlightRef}
            className={clsx(
              "absolute hidden h-[104px] w-full sm:block",
              "duration-200",
              isHoveredFromNull ? "transition-none" : "transition-transform "
            )}
            style={{ transform }}
          >
            <div
              className={clsx(
                "h-full w-full rounded-lg highlight",
                highlightedTab ? "opacity-100" : "opacity-0",
                "transition-opacity duration-300"
              )}
            />
          </div>
          {/* Entries */}
          {projects.map(project => (
            <Link legacyBehavior key={project.slug} href={`/projects/${project.slug}`} passHref>
              <a className={cardStyle} onMouseOver={handleMouseOver}>
                <aside className={asideStyle} onMouseOver={handleMouseOver}>
                  {na(project.created)}
                </aside>
                <h2 className="text-lg font-semibold">
                  {project.title.replace(/\d+$/, '')}
                </h2>
                <p className="mt-2 text-sm text-gray-500 dark:text-gray-500">{project.description}</p>
              </a>
            </Link>
          ))}
        </div>
      </div>
  )
}