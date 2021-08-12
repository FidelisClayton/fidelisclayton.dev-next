import { GetStaticProps } from 'next'
import Head from 'next/head'
import prism from 'prismjs'
import slugify from 'slugify'

// @ts-ignore
import 'prismjs/components/prism-elm.min'

import {
  getAllPostIds,
  getPostData,
  getSortedPostsData,
  Post as PostType,
} from '../../lib/posts'
import { MDXRemote } from 'next-mdx-remote'
import { createElement, useEffect } from 'react'
import PostLayout from '../../components/PostLayout/PostLayout'
import { getAllCategories } from '../../lib/categories'
import { getAllSeries } from '../../lib/series'

type Props = {
  post: PostType
  language: string
}

const createHeading = (level: 1 | 2 | 3 | 4 | 5 | 6) => (props: {
  children: string
}) => {
  const slug =
    typeof props.children === 'string'
      ? slugify(props.children.toLowerCase())
      : null

  if (!slug) return createElement(`h${level}`, props)

  const link = (
    <a
      href={`#${slug}`}
      className="!no-underline !text-current inline-flex items-center group"
    >
      <span className="dark:group-hover:border-green-800 group-hover:border-green-100 border-dotted border-b-2 border-transparent">
        {props.children}
      </span>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-4 h-4 ml-2 text-green-500 opacity-0 group-hover:opacity-100"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
        />
      </svg>
    </a>
  )

  return createElement(
    `h${level}`,
    { ...props, id: slug, className: '!mt-[-2em] !pt-[3.6em]' },
    link
  )
}

const mdxComponents = {
  h1: createHeading(1),
  h2: createHeading(2),
  h3: createHeading(3),
  h4: createHeading(4),
  h5: createHeading(5),
  h6: createHeading(6),
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

      <article className="prose dark:prose-light prose-md md:prose-lg prose-indigo">
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

        <MDXRemote {...post.source} components={mdxComponents} />
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
