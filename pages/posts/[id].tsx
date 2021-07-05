import { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'
import prism from 'prismjs'

// @ts-ignore
import 'prismjs/components/prism-elm'

import Layout from '../../components/layout'
import Date from '../../components/date'
import { getAllPostIds, getPostData, Post as PostType } from '../../lib/posts'
import utilStyles from '../../styles/utils.module.css'
import { MDXRemote } from 'next-mdx-remote'
import { useEffect } from 'react'

type Props = {
  post: PostType
}

const Post: React.FC<Props> = ({ post }) => {
  useEffect(() => {
    prism.highlightAll()
  }, [])

  return (
    <Layout>
      <Head>
        <title>{post.title}</title>
      </Head>

      <article>
        <h1 className={utilStyles.headingXl}>{post.title}</h1>

        <div className={utilStyles.lightText}>
          <Date dateString={post.date} />
        </div>

        <MDXRemote {...post.source} />
      </article>
    </Layout>
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
