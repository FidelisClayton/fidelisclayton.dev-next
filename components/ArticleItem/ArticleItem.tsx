import Link from 'next/link'
import { PostMeta } from '../../lib/posts'

type Props = { post: PostMeta }

const ArticleItem: React.FC<Props> = ({ post }) => {
  return (
    <div className="py-4 px-0 group">
      <Link href={`/posts/${post.id}`}>
        <a>
          <div>
            {post.serie && (
              <p className="mr-2 text-sm text-gray-600 uppercase dark:text-gray-300">
                {post.serie} #{post.episode}
              </p>
            )}

            <header>
              <h4 className="inline-block mb-2 -mt-1 text-xl font-semibold leading-normal text-gray-800 transition-all dark:text-gray-300">
                {post.title}
              </h4>
            </header>

            <section>
              <p className="mb-2 leading-normal text-gray-800 text-normal dark:text-gray-400">
                {post.description}
              </p>
            </section>

            <div className="flex items-center font-semibold text-gray-800 font-sm dark:text-gray-200 group-hover:text-indigo-500 transition-all">
              Saiba mais
              <div className="flex ml-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 -ml-2 opacity-0 group-hover:opacity-75 duration-50 transition-opacity delay-100"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 -ml-3 opacity-0 group-hover:opacity-50 transition-opacity duration-50 delay-200"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 -ml-3 opacity-0 group-hover:opacity-25 transition-opacity duration-50 delay-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </div>
          </div>
        </a>
      </Link>
    </div>
  )
}

export default ArticleItem
