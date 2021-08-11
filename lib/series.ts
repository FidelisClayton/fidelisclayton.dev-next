import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const postsDirectory = path.join(process.cwd(), 'posts')

export type Serie = {
  language: string
  title: string
  slug: string
}

export function getAllSeries() {
  const fileNames = fs.readdirSync(postsDirectory)

  const allSeries = fileNames.flatMap((folderName) => {
    return fs
      .readdirSync(path.join(postsDirectory, folderName))
      .map((fileName) => {
        const [_, languageOrExtension, ...rest] = fileName.split('.')
        const language = rest.length > 0 ? languageOrExtension : 'en'
        const fullPath = path.join(postsDirectory, folderName, fileName)
        const fileContents = fs.readFileSync(fullPath, 'utf8')

        const matterResult = matter(fileContents)

        return {
          language,
          title: matterResult.data.serie,
          slug: matterResult.data.serieSlug,
        }
      })
  })

  const allSeriesBySlugAndLanguage = Object.fromEntries(
    allSeries.map((serie) => [serie.slug + serie.language, serie])
  )

  return Object.values(allSeriesBySlugAndLanguage)
}

export const getAllSeriesIds = () => {
  return getAllSeries().map((serie) => ({
    params: {
      id: serie.slug,
    },
  }))
}
