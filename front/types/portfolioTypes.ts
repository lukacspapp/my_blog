export interface ProjectsData {
  projects: Projects[]
}

export interface Projects {
  description: string,
  slug: string,
  title: string,
  created: string
}

export interface ProjectData {
  project: Project
}

export interface Project {
  created: string,
  content: ProjectContent,
  description: string,
  title: string
}

export interface ProjectContent {
  markdown: string
}
export interface Description  {
  title: string
  description: string
  hideBreak?: boolean
}