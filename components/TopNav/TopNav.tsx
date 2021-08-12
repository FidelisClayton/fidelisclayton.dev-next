import clsx from 'clsx'
import Link from 'next/link'
import Avatar from '../Avatar'
import ThemeSwitcher from '../ThemeSwitcher'

type TopNavProps = {
  className?: string
}

const TopNav: React.FC<TopNavProps> = ({ className }) => {
  return (
    <nav
      className={clsx(
        className,
        'dark:bg-black dark:border-gray-800 bg-white sticky top-0 z-50 border-b-[1px] dark:text-gray-100 dark:bg-opacity-80 bg-opacity-70 backdrop-saturate-150 backdrop-blur-sm'
      )}
    >
      <div className="flex justify-between items-center container mx-auto max-w-4xl px-4 py-3 md:px-8 md:py-4">
        <Link href="/">
          <a>
            <div className="flex flex-row items-center space-x-2 md:space-x-4">
              <Avatar
                className="w-10 h-10 md:w-12 md:h-12"
                width={48}
                height={48}
              />

              <p className="font-semibold text-gray-800 dark:text-gray-200 text md:text-xl">
                Clayton Fidelis
              </p>
            </div>
          </a>
        </Link>

        <div className="flex items-center">
          <ul className="items-center hidden text-lg font-light md:flex space-x-1">
            <li>
              <Link href="/latest-posts">
                <a className="px-4 py-2">Posts</a>
              </Link>
            </li>

            <li>
              <Link href="/categories">
                <a className="px-4 py-2">Categories</a>
              </Link>
            </li>

            <li>
              <Link href="/series">
                <a className="px-4 py-2">Series</a>
              </Link>
            </li>
          </ul>
          <ThemeSwitcher />
        </div>
      </div>
    </nav>
  )
}

export default TopNav
