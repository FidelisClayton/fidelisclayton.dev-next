import { GetStaticProps } from 'next'
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
      {categories.map((category) => {
        const posts = postsByCategory[category.slug] || []

        return (
          <>
            <div className="flex items-end space-x-4">
              <h2 className="text-4xl text-transparent bg-clip-text bg-gradient-to-tr dark:from-green-400 dark:to-green-700 from-green-600 to-green-900">
                {category.title}
              </h2>

              <span className="text-xl text-gray-500 dark:text-gray-400">
                {posts.length} posts
              </span>
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

            {posts.length > 3 && (
              <div className="mt-4">
                <Link href={`/categories/${category.slug}`}>
                  <a className="border-b-2 border-indigo-200 hover:border-indigo-500 dark:border-indigo-900 dark:hover:border-indigo-200 transition-all duration-200 dark:text-gray-300">
                    See all
                  </a>
                </Link>
              </div>
            )}
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
