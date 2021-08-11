import { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'
import ArticleItem from '../../components/ArticleItem'
import PostLayout from '../../components/PostLayout'
import { getSortedPostsData, PostMeta } from '../../lib/posts'
import { getAllSeriesIds, Serie } from '../../lib/series'

type Props = {
  serie: Serie
  posts: PostMeta[]
}

const SeriePage: React.FC<Props> = ({ serie, posts = [] }) => {
  return (
    <PostLayout>
      <Head>
        <title>{serie.title} | Clayton Fidelis</title>
      </Head>

      <h2 className="text-5xl font-semibold dark:text-gray-200 mb-8">
        {serie.title}
      </h2>

      {[...posts].reverse().map((post) => (
        <ArticleItem
          post={post}
          classes={{
            title: 'mb-0 group-hover:text-indigo-600',
            description: 'mb-0',
          }}
          hideCTA
        />
      ))}
    </PostLayout>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllSeriesIds()

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps<Partial<Props>> = async ({
  params,
}) => {
  const id = params.id

  const postsForSerie = getSortedPostsData().filter(
    (post) => post.serieSlug === id
  )

  const serie: Serie | null =
    postsForSerie.length > 0
      ? {
          title: postsForSerie[0].serie,
          slug: postsForSerie[0].serieSlug,
          language: postsForSerie[0].language,
        }
      : null

  return {
    props: {
      serie,
      posts: postsForSerie,
    },
    notFound: !serie,
  }
}

export default SeriePage
