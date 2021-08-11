import { GetStaticProps } from 'next'
import Head from 'next/head'
import ArticleItem from '../../components/ArticleItem'
import PostLayout from '../../components/PostLayout'
import { getSortedPostsData, PostMeta } from '../../lib/posts'

type Props = {
  posts: PostMeta[]
}

const LatestPosts: React.FC<Props> = ({ posts = [] }) => {
  return (
    <PostLayout>
      <Head>
        <title>Latest posts | Clayton Fidelis</title>
        <meta
          name="description"
          content="Latest posts about React, Elm, JavaScript, Front-end, NodeJS, Tailwind, CSS, Styled Components."
        />
      </Head>

      <h1 className="dark:text-gray-200 text-4xl mb-8 font-semibold">
        Latest posts
      </h1>

      {posts.map((post) => (
        <ArticleItem key={post.id} post={post} />
      ))}
    </PostLayout>
  )
}

export const getStaticProps: GetStaticProps<Partial<Props>> = async ({}) => {
  const posts = getSortedPostsData()

  return {
    props: {
      posts,
    },
  }
}

export default LatestPosts
