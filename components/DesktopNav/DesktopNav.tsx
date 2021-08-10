import { useCategories } from '../../providers/CategoriesProvider'
import { useSeries } from '../../providers/SeriesProvider'
import SideNavList from '../SideNavList'
import SideNavTitle from '../SideNavTitle'

const DesktopNav: React.FC = () => {
  const categories = useCategories()
  const series = useSeries()

  return (
    <nav className="hidden md:block">
      <SideNavTitle>Categorias</SideNavTitle>

      <SideNavList
        items={categories.map((category) => ({
          link: `/categories/${category.slug}`,
          label: category.title,
        }))}
      />

      <SideNavTitle>Séries</SideNavTitle>

      <SideNavList
        items={series.map((serie) => ({
          link: `/series/${serie.slug}`,
          label: serie.title,
        }))}
      />
    </nav>
  )
}

export default DesktopNav
