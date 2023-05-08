export interface Experience {
  companyTitle: string,
  endDate: string,
  id: string,
  jobTitle: string,
  portfolioTechnologies: Technology[],
  startDate: string,
  image: Image
}
export interface ProjectsData {
  projects: Projects[]
}

export interface Projects {
  description: string,
  slug: string,
  title: string,
  createdAt: string
}

export interface ProjectData {
  project: Project
}

export interface Project {
  content: string,
  description: string,
  title: string
}


export interface Technology {
  Image: Image,
  name: string
}

export interface Hero {
  id: string,
  profile: Image,
  vocations: string
}

export interface About {
  id: string,
  photo: Image,
  bio: string,
  location: string,
  title: string,
}

export interface Image {
  url: string,
  id: string
}

export interface PortfolioTechnologies {
  portfolioTechnologies: Technology[]
}

export interface PortfolioExpriences {
  portfolioExpriences: Experience[]
}

export interface PortfolioHero {
  portfolioHeroes: Hero[]
}

export interface PortfolioAbout {
  potfolioAbouts: About[]
}

export interface Description  {
  title: string
  description: string
  hideBreak?: boolean
}