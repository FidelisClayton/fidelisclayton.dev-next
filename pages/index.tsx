import { GetStaticProps } from 'next'
import Head from 'next/head'

import ArticleItem from '../components/ArticleItem'

import HomeLayout from '../components/HomeLayout'

const siteTitle = 'My Blog'

import { getSortedPostsData, PostMeta } from '../lib/posts'
import { useEffect } from 'react'

type Props = {
  posts: PostMeta[]
}

const Home: React.FC<Props> = ({ posts = [] }) => {
  useEffect(() => {
    document.documentElement.classList.add('dark')
    // document.body.classList.add('dark:bg-black')
    document.body.style.backgroundColor = '#070a0e'
  }, [])

  return (
    <HomeLayout>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      {posts.map((post) => (
        <ArticleItem post={post} key={post.id} />
      ))}
    </HomeLayout>
  )
}

export const getStaticProps: GetStaticProps<Partial<Props>> = async () => {
  const posts = getSortedPostsData()

  return {
    props: {
      posts,
    },
  }
}

export default Home