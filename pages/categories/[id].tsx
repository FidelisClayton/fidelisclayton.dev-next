import { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'
import ArticleItem from '../../components/ArticleItem'
import PostLayout from '../../components/PostLayout'
import { Category, getAllCategoryIds } from '../../lib/categories'
import { getSortedPostsData, PostMeta } from '../../lib/posts'

type Props = {
  category: Category
  posts: PostMeta[]
}

const CategoryPage: React.FC<Props> = ({ category, posts = [] }) => {
  return (
    <PostLayout>
      <Head>
        <title>{category.title} | Clayton Fidelis</title>
      </Head>

      <h2 className="text-5xl font-semibold dark:text-gray-200 mb-8">
        {category.title}
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
  const paths = getAllCategoryIds()

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps<Partial<Props>> = async ({
  params,
}) => {
  const id = params.id

  const postsForCategory = getSortedPostsData().filter(
    (post) => post.categorySlug === id
  )

  const category: Category | null =
    postsForCategory.length > 0
      ? {
          title: postsForCategory[0].category,
          slug: postsForCategory[0].categorySlug,
          language: postsForCategory[0].language,
        }
      : null

  return {
    props: {
      category,
      posts: postsForCategory,
    },
    notFound: !category,
  }
}

export default CategoryPage
