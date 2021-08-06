import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { serialize } from 'next-mdx-remote/serialize'
import remark from 'remark'
import html from 'remark-html'
import { MDXRemoteSerializeResult } from 'next-mdx-remote'

const postsDirectory = path.join(process.cwd(), 'posts')

export type PostMeta = {
  id: string
  date: string
  title: string
  category?: string
  description: string
  episode?: number
  keywords?: string
  serie?: string
}

export type Post = PostMeta & {
  contentHtml?: string
  source: MDXRemoteSerializeResult
}

export const getSortedPostsData = (): PostMeta[] => {
  const fileNames = fs.readdirSync(postsDirectory)

  const allPostsData: PostMeta[] = fileNames.map((fileName) => {
    const id = fileName.replace(/\.mdx$/, '')

    const fullPath = path.join(postsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    const matterResult = matter(fileContents)

    return {
      id,
      ...matterResult.data,
    } as PostMeta
  })

  return allPostsData.sort(({ date: a }, { date: b }) => {
    if (a < b) {
      return 1
    } else if (a > b) {
      return -1
    } else {
      return 0
    }
  })
}

export function getAllPostIds() {
  const fileNames = fs.readdirSync(postsDirectory)

  return fileNames.map((fileName) => ({
    params: {
      id: fileName.replace(/\.mdx$/, ''),
    },
  }))
}

export const getPostData = async (id: string): Promise<Post> => {
  const fullPath = path.join(postsDirectory, `${id}.mdx`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  const matterResult = matter(fileContents)
  const source = await serialize(matterResult.content)

  const processedContent = await remark()
    .use(html)
    .process(matterResult.content)

  const contentHtml = processedContent.toString()

  return {
    id,
    contentHtml,
    ...matterResult.data,
    source,
  } as Post
}
