import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from 'react'
import { Category } from '../lib/categories'

type CategoriesContextValue = Category[]

const CategoriesContext = createContext<CategoriesContextValue>([])
const SetCategoriesContext = createContext<
  Dispatch<SetStateAction<CategoriesContextValue>>
>(() => {})

const CategoriesProvider: React.FC = ({ children }) => {
  const [categories, setCategories] = useState<CategoriesContextValue>([])

  return (
    <SetCategoriesContext.Provider value={setCategories}>
      <CategoriesContext.Provider value={categories}>
        {children}
      </CategoriesContext.Provider>
    </SetCategoriesContext.Provider>
  )
}

export const useCategories = () => {
  const context = useContext(CategoriesContext)

  if (context === undefined)
    throw new Error('useCategories must be used within CategoriesProvider')

  return context
}

export const useSetCategories = () => {
  const context = useContext(SetCategoriesContext)

  if (context === undefined)
    throw new Error(
      'useSetCategories must be used within SetCategoriesProvider'
    )

  return context
}

export default CategoriesProvider
