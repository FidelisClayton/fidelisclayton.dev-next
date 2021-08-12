import { GetStaticProps } from 'next'
import Head from 'next/head'

import ArticleItem from '../components/ArticleItem'

import HomeLayout from '../components/HomeLayout'
import { getAllSeries, Serie } from '../lib/series'

import { getSortedPostsData, PostMeta } from '../lib/posts'
import { Category, getAllCategories } from '../lib/categories'
import { useSetCategories } from '../providers/CategoriesProvider'
import { useEffect } from 'react'
import { useSetSeries } from '../providers/SeriesProvider'
import meta from '../config/meta'

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
        <title>Blog | Clayton Fidelis</title>
        <meta name="description" content={meta.description} />
        <meta name="og:url" content={meta.url} />
        <meta name="og:title" content={meta.siteTitle} />
        <meta name="og:description" content={meta.description} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content={meta.twitterHandle} />
        <meta name="twitter:title" content={meta.siteTitle} />
        <meta name="twitter:description" content={meta.description} />
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
