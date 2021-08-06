const SideNavTitle: React.FC = ({ children }) => {
  return (
    <h2 className="mt-8 mb-4 text-2xl text-transparent bg-clip-text bg-gradient-to-br dark:from-blue-400 dark:to-purple-800 from-blue-600 to-purple-900">
      {children}
    </h2>
  )
}

export default SideNavTitle
