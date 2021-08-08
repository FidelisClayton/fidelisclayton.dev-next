import Link from 'next/link'

export type SideNavListItem = {
  link: string
  label: string
}

export type SideNavListProps = {
  className?: string
  items: SideNavListItem[]
}

const SideNavList: React.FC<SideNavListProps> = ({ className, items }) => {
  return (
    <ul className={`space-y-2 ${className}`}>
      {items.map(({ link, label }) => (
        <li key={link} className="text-xl font-semibold dark:text-gray-300">
          <Link href={link}>
            <a className="border-b-2 border-indigo-200 hover:border-indigo-500 dark:border-indigo-900 dark:hover:border-indigo-200 transition-all duration-200">
              {label}
            </a>
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default SideNavList
