import clsx from 'clsx'
import { useEffect, useState } from 'react'

export type ThemeSwitcherProps = {
  className?: string
}

const getPrefersDarkMode = () => {
  if (typeof window !== 'undefined')
    return window.matchMedia('(prefers-color-scheme: dark)').matches

  return false
}

const getLocalStorageDarkMode = () => {
  if (typeof window !== 'undefined')
    return window?.localStorage.getItem('isDarkMode') === 'true'

  return false
}

const ThemeSwitcher: React.FC<ThemeSwitcherProps> = ({ className }) => {
  const [isDark, setIsDark] = useState(
    () => getLocalStorageDarkMode() || getPrefersDarkMode() || false
  )

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark')
      document.body.style.backgroundColor = '#070a0e'
    } else {
      document.documentElement.classList.remove('dark')
      document.body.style.backgroundColor = '#fff'
    }
  }, [isDark])

  useEffect(() => {
    document.body.classList.add('transition-all')
    document.body.classList.add('duration-700')
  }, [])

  const handleClick = () => {
    setIsDark(!isDark)

    if (typeof window !== 'undefined') {
      window.localStorage.setItem('isDarkMode', String(!isDark))
    }
  }

  return (
    <button
      className={clsx(
        className,
        'dark:hover:bg-gray-800 hover:bg-gray-200 p-2 rounded-full'
      )}
      onClick={handleClick}
    >
      {isDark ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
            clipRule="evenodd"
          />
        </svg>
      )}
    </button>
  )
}

export default ThemeSwitcher