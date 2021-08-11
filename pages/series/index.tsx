import { GetStaticProps } from 'next'
import Link from 'next/link'
import ArticleItem from '../../components/ArticleItem'
import PostLayout from '../../components/PostLayout'
import { getSortedPostsData, PostMeta } from '../../lib/posts'
import { getAllSeries, Serie } from '../../lib/series'

type Props = {
  series: Serie[]
  postsBySerie: Record<string, PostMeta[]>
}

const Series: React.FC<Props> = ({ series = [], postsBySerie = {} }) => {
  return (
    <PostLayout>
      {series.map((serie) => {
        const posts = postsBySerie[serie.slug] || []

        return (
          <>
            <div className="flex items-end justify-between space-x-4 mb-8">
              <h2 className="text-5xl font-semibold dark:text-gray-200">
                {serie.title}
              </h2>

              <div className="flex items-center space-x-4">
                <span className="text-lg text-gray-500 dark:text-gray-400">
                  {posts.length} posts
                </span>

                {posts.length > 3 && (
                  <Link href={`/series/${serie.slug}`}>
                    <a className="border-b-2 border-indigo-200 hover:border-indigo-500 dark:border-indigo-900 dark:hover:border-indigo-200 transition-all duration-200 dark:text-gray-300">
                      See all
                    </a>
                  </Link>
                )}
              </div>
            </div>

            {posts.slice(0, 3).map((post) => (
              <ArticleItem
                post={post}
                classes={{
                  title: '-mb-1 group-hover:text-indigo-600',
                  description: 'mb-0',
                }}
                hideCTA
                hideSerie
              />
            ))}
          </>
        )
      })}
    </PostLayout>
  )
}

export const getStaticProps: GetStaticProps<Partial<Props>> = async () => {
  const series = getAllSeries()
  const posts = getSortedPostsData()

  const postsBySerie = posts.reduce((acc, post) => {
    if (!post.categorySlug) return acc

    const postsForSerie = acc[post.serieSlug] || []

    return {
      ...acc,
      [post.serieSlug]: [...postsForSerie, post],
    }
  }, {})

  return {
    props: {
      series,
      postsBySerie,
    },
  }
}

export default Series
