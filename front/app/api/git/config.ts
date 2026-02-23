export const GITHUB_API_URL = 'https://api.github.com/graphql'
const GITHUB_TOKEN = process.env.NEXT_PUBLIC_GITHUB_TOKEN || ''
export const GITHUB_HEADER = { Authorization: `bearer ${GITHUB_TOKEN}` }
export const DEFAULT_GITHUB_USERNAME = "lukacspapp"