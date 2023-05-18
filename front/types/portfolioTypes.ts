export interface ProjectsData {
  projects: Project[]
}
export interface Project {
  content: any
  description: string,
  slug: string,
  title: string,
  created: string
}
export interface ProjectData {
  project: Project
}
export interface ProjectContent {
  markdown: string
}
export interface DescriptionType  {
  title: string
  description: string
  hideBreak?: boolean
}