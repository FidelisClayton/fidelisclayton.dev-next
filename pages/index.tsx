import { GetStaticProps } from 'next'
import Head from 'next/head'

import ArticleItem from '../components/ArticleItem'

import HomeLayout from '../components/HomeLayout'
import { getAllSeries, Serie } from '../lib/series'

const siteTitle = 'My Blog'

import { getSortedPostsData, PostMeta } from '../lib/posts'
import { Category, getAllCategories } from '../lib/categories'
import { useSetCategories } from '../providers/CategoriesProvider'
import { useEffect } from 'react'
import { useSetSeries } from '../providers/SeriesProvider'

type Props = {
  posts: PostMeta[]
  categories: Category[]
  series: Serie[]
}

const Home: React.FC<Props> = ({ posts = [], categories, series }) => {
  const setCategories = useSetCategories()
  const setSeries = useSetSeries()

  useEffect(() => {
    setCategories(categories)
    setSeries(series)
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
  return {
    props: {
      posts: getSortedPostsData(),
      categories: getAllCategories(),
      series: getAllSeries(),
    },
  }
}

export default Home
