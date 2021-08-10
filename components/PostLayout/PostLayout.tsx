import Link from 'next/link'

import Avatar from '../Avatar'
import ThemeSwitcher from '../ThemeSwitcher'

const PostLayout: React.FC = ({ children }) => {
  return (
    <div className="mb-20">
      <nav className="flex dark:bg-black dark:border-gray-800 bg-white sticky top-0 z-50 border-b-[1px] justify-between items-center container mx-auto max-w-4xl px-8 py-4 dark:text-gray-100">
        <Link href="/">
          <a>
            <div className="flex flex-row items-center space-x-4">
              <Avatar className="w-12 h-12" width={48} height={48} />

              <p className="text-xl">Clayton Fidelis</p>
            </div>
          </a>
        </Link>

        <div className="flex items-center">
          <ul className="items-center hidden text-lg font-light md:flex space-x-1">
            <li>
              <a className="px-4 py-2" href="/latest-posts">
                Posts
              </a>
            </li>

            <li>
              <a className="px-4 py-2" href="/categories">
                Categories
              </a>
            </li>

            <li>
              <a className="px-4 py-2" href="/series">
                Series
              </a>
            </li>
          </ul>
          <ThemeSwitcher />
        </div>
      </nav>

      <main className="container max-w-4xl px-8 mx-auto mt-12">{children}</main>
    </div>
  )
}

export default PostLayout
