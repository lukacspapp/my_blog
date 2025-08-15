import { formatDate, normalizeUtc } from "../../lib/date";
import { UserInsightsType } from "../../types/githubTypes";
import { InsightCard } from "./InsightCard";

export default function InsightsGroup({ insights }: { insights: UserInsightsType }) {
  return (
    <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:grid-rows-2">
      <InsightCard label="Current Streak" value={insights.currentStreak} />
      <InsightCard label="Longest Streak" value={insights.longestStreak} />
      <InsightCard label="Total Contributions" value={insights.totalContributions} />
      <InsightCard
        label="First Contribution"
        value={formatDate(normalizeUtc(new Date(insights.firstContributionDate)))}
      />
    </div>
  )
}