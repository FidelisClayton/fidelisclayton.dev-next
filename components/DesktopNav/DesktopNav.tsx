import SideNavList from '../SideNavList'
import SideNavTitle from '../SideNavTitle'

const DesktopNav: React.FC = () => {
  return (
    <nav className="hidden md:block">
      <SideNavTitle>Categorias</SideNavTitle>

      <SideNavList
        items={[
          {
            link: '/categories/react',
            label: 'React',
          },
          {
            link: '/categories/elm',
            label: 'Elm',
          },
        ]}
      />

      <SideNavTitle>Séries</SideNavTitle>

      <SideNavList
        items={[
          {
            link: '/series/elm-na-pratica',
            label: 'Elm na prática',
          },
        ]}
      />
    </nav>
  )
}

export default DesktopNav
