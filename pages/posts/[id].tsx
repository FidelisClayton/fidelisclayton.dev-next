import { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'
import prism from 'prismjs'

// @ts-ignore
import 'prismjs/components/prism-elm.min'

import Date from '../../components/date'
import { getAllPostIds, getPostData, Post as PostType } from '../../lib/posts'
import { MDXRemote } from 'next-mdx-remote'
import { useEffect } from 'react'
import PostLayout from '../../components/PostLayout/PostLayout'

type Props = {
  post: PostType
}

const Post: React.FC<Props> = ({ post }) => {
  useEffect(() => {
    prism.highlightAll()
  }, [])

  return (
    <PostLayout>
      <Head>
        <title>{post.title}</title>
      </Head>

      <article className="prose prose-lg prose-indigo">
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

export const getStaticPaths: GetStaticPaths<{ id: string }> = async () => {
  const paths = getAllPostIds()

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps<Partial<Props>> = async ({
  params,
}) => {
  const post = await getPostData(params.id as string)

  return {
    props: {
      post,
    },
  }
}

export default Post
