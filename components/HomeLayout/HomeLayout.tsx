import DesktopNav from '../DesktopNav'
import PersonalInformation from '../PersonalInformation'
import TopNav from '../TopNav'

const HomeLayout: React.FC = ({ children }) => {
  return (
    <div className="container flex flex-col mx-auto md:flex-row max-w-7xl">
      <TopNav className="md:hidden" />

      <aside className="top-0 hidden flex-1 md:max-w-xl px-8 py-2 md:block md:h-full md:py-8">
        <PersonalInformation />

        <DesktopNav />
      </aside>

      <main className="flex-1 p-4 border-pink-500 md:p-8">{children}</main>
    </div>
  )
}

export default HomeLayout
