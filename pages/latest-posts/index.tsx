import { GetStaticProps } from 'next'
import ArticleItem from '../../components/ArticleItem'
import PostLayout from '../../components/PostLayout'
import { getSortedPostsData, PostMeta } from '../../lib/posts'

type Props = {
  posts: PostMeta[]
}

const LatestPosts: React.FC<Props> = ({ posts = [] }) => {
  return (
    <PostLayout>
      {posts.map((post) => (
        <ArticleItem post={post} />
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
