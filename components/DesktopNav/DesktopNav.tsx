import Link from 'next/link'
import { useCategories } from '../../providers/CategoriesProvider'
import { useSeries } from '../../providers/SeriesProvider'
import SideNavList from '../SideNavList'
import SideNavTitle from '../SideNavTitle'

const DesktopNav: React.FC = () => {
  const categories = useCategories()
  const series = useSeries()

  return (
    <nav className="hidden md:block">
      {categories.length > 0 && (
        <>
          <Link href="/categories">
            <a>
              <SideNavTitle>Categories</SideNavTitle>
            </a>
          </Link>

          <SideNavList
            items={categories.map((category) => ({
              link: `/categories/${category.slug}`,
              label: category.title,
            }))}
          />
        </>
      )}

      {series.length > 0 && (
        <>
          <Link href="/series">
            <a>
              <SideNavTitle>Series</SideNavTitle>
            </a>
          </Link>

          <SideNavList
            items={series.map((serie) => ({
              link: `/series/${serie.slug}`,
              label: serie.title,
            }))}
          />
        </>
      )}
    </nav>
  )
}

export default DesktopNav
