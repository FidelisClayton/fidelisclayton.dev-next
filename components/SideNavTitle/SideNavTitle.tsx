const SideNavTitle: React.FC = ({ children }) => {
  return (
    <h2 className="mt-8 mb-4 text-2xl text-transparent bg-clip-text bg-gradient-to-tr dark:from-green-400 dark:to-green-700 from-green-600 to-green-900">
      {children}
    </h2>
  )
}

export default SideNavTitle
