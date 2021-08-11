import { GetStaticProps } from 'next'
import Head from 'next/head'
import prism from 'prismjs'

// @ts-ignore
import 'prismjs/components/prism-elm.min'

import {
  getAllPostIds,
  getPostData,
  getSortedPostsData,
  Post as PostType,
} from '../../lib/posts'
import { MDXRemote } from 'next-mdx-remote'
import { useEffect } from 'react'
import PostLayout from '../../components/PostLayout/PostLayout'
import { getAllCategories } from '../../lib/categories'
import { getAllSeries } from '../../lib/series'

type Props = {
  post: PostType
  language: string
}

const Post: React.FC<Props> = ({ post }) => {
  useEffect(() => {
    prism.highlightAll()
  }, [])

  return (
    <PostLayout>
      <Head>
        <title>{post.title}</title>
        <meta name="description" content={post.description} />
      </Head>

      <article className="prose dark:prose-light prose-lg prose-indigo">
        <div className="relative mb-24">
          {post.episode && (
            <div
              aria-hidden="true"
              className="text-[10rem] top-0 leading-none mt-[-60px] font-bold w-full absolute left-0 text-center opacity-10 dark:text-gray-100"
            >
              {post.episode.toString().padStart(2, '0')}
            </div>
          )}

          <h1 className="relative text-center">{post.title}</h1>
        </div>

        <MDXRemote {...post.source} />
      </article>
    </PostLayout>
  )
}

export const getStaticPaths = async () => {
  const paths = getAllPostIds()

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps<Partial<Props>> = async ({
  params,
}) => {
  const slug = params.id

  /* When the slug is of length 1, it means that there is no language code present
   * in the url, so we use english as default.
   */
  const language = slug.length > 1 ? slug[0] : 'en'
  const id = slug[1]

  const post = await getPostData(language, id)

  return {
    props: {
      post,
      language,
      posts: getSortedPostsData(),
      categories: getAllCategories(),
      series: getAllSeries(),
    },
  }
}

export default Post
