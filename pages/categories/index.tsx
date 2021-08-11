import { GetStaticProps } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import ArticleItem from '../../components/ArticleItem'
import PostLayout from '../../components/PostLayout'
import { Category, getAllCategories } from '../../lib/categories'
import { getSortedPostsData, PostMeta } from '../../lib/posts'

type Props = {
  categories: Category[]
  postsByCategory: Record<string, PostMeta[]>
}

const Categories: React.FC<Props> = ({
  categories = [],
  postsByCategory = {},
}) => {
  return (
    <PostLayout>
      <Head>
        <title>Categories | Clayton Fidelis</title>
      </Head>

      {categories.map((category) => {
        const posts = postsByCategory[category.slug] || []

        return (
          <>
            <div className="flex items-end justify-between space-x-4 mb-8">
              <h2 className="text-5xl font-semibold dark:text-gray-200">
                {category.title}
              </h2>

              <div className="flex items-center space-x-4">
                <span className="text-lg text-gray-500 dark:text-gray-400">
                  {posts.length} posts
                </span>

                {posts.length > 3 && (
                  <Link href={`/categories/${category.slug}`}>
                    <a className="font-semibold border-b-2 border-indigo-200 hover:border-indigo-500 dark:border-indigo-900 dark:hover:border-indigo-200 transition-all duration-200 dark:text-gray-300">
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
                  title: 'mb-0 group-hover:text-indigo-600',
                  description: 'mb-0',
                }}
                hideCTA
              />
            ))}
          </>
        )
      })}
    </PostLayout>
  )
}

export const getStaticProps: GetStaticProps<Partial<Props>> = async () => {
  const categories = getAllCategories()
  const posts = getSortedPostsData()

  const postsByCategory = posts.reduce((acc, post) => {
    if (!post.categorySlug) return acc

    const postsForCategory = acc[post.categorySlug] || []

    return {
      ...acc,
      [post.categorySlug]: [...postsForCategory, post],
    }
  }, {})

  return {
    props: {
      categories,
      postsByCategory,
    },
  }
}

export default Categories
