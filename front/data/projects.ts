interface ProjectType {
  name: string
  description: string
  month: string
  year?: number
  href?: string
  preview?: string
}

export const projects: ProjectType[] = [
  {
    name: "SWL",
    description: "Modern Next.js 13 website overhaul",
    month: "March",
    year: 2023,
    preview: "/images/projects/man-pages.png",
  },
  {
    name: "UWL",
    description: "Modern Next.js 12 website overhaul",
    month: "September",
    year: 2022,
    href: "https://ukstore.universalorlando.com/",
    preview: "/images/projects/tailwindcss-snippets.png",
  }
]