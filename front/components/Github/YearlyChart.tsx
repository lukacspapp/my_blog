

import { useTheme } from "next-themes"
import { useLayoutEffect, useRef } from "react"
import { drawChart } from "../../lib/utils"
import { ContributionsCollectionType } from "../../types/githubTypes"

type YearlyChartProps = {
  collection: ContributionsCollectionType;
}

export default function YearlyChart( { collection }: YearlyChartProps) {
  const { resolvedTheme } = useTheme()
  const svgRef = useRef<SVGSVGElement>(null)

  const numberOfContributions = collection.data.user.contributionsCollection.contributionCalendar.totalContributions
  const year = collection.data.user.contributionsCollection.year

  useLayoutEffect(() => {
    // exit early is ref is not defined
    if (!svgRef.current) return

    drawChart(collection, svgRef, resolvedTheme)
  }, [svgRef, collection, resolvedTheme])

  return (
    <div className="mb-8 overflow-x-scroll md:-ml-[62px] md:overflow-visible">
      <p className="text-md inline-block pb-2 pl-5 font-medium text-gray-700 dark:text-gray-300">
        {numberOfContributions} contribution{numberOfContributions === 1 ? "" : "s"} in{" "}
        {year !== undefined ? year : "the last year"}
      </p>
      <svg ref={svgRef} className="overflow-visible" />
    </div>
  )
}