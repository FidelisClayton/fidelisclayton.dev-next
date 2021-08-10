import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const postsDirectory = path.join(process.cwd(), 'posts')

export type Category = {
  language: string
  title: string
  slug: string
}

export function getAllCategories() {
  const fileNames = fs.readdirSync(postsDirectory)

  const allCategories = fileNames.flatMap((folderName) => {
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
          title: matterResult.data.category,
          slug: matterResult.data.categorySlug,
        }
      })
  })

  const allCategoriesBySlugAndLanguage = Object.fromEntries(
    allCategories.map((category) => [
      category.slug + category.language,
      category,
    ])
  )

  return Object.values(allCategoriesBySlugAndLanguage)
}
