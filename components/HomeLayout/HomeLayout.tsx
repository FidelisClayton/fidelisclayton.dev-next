import DesktopNav from '../DesktopNav'
import PersonalInformation from '../PersonalInformation'

const HomeLayout: React.FC = ({ children }) => {
  return (
    <div className="container flex flex-col mx-auto md:flex-row max-w-7xl">
      <aside className="top-0 flex-1 md:max-w-xl px-8 py-2 md:sticky md:h-full md:py-8">
        <PersonalInformation />

        <DesktopNav />
      </aside>

      <main className="flex-1 p-8 border-pink-500">{children}</main>
    </div>
  )
}

export default HomeLayout
