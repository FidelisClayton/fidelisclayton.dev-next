import TopNav from '../TopNav'

const PostLayout: React.FC = ({ children }) => {
  return (
    <div className="mb-20">
      <TopNav />

      <main className="container max-w-4xl px-4 md:px-8 mx-auto mt-12">
        {children}
      </main>
    </div>
  )
}

export default PostLayout
