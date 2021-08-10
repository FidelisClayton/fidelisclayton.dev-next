import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from 'react'
import { Category } from '../lib/categories'

type SeriesContextValue = Category[]

const SeriesContext = createContext<SeriesContextValue>([])
const SetSeriesContext = createContext<
  Dispatch<SetStateAction<SeriesContextValue>>
>(() => {})

const SeriesProvider: React.FC = ({ children }) => {
  const [series, setSeries] = useState<SeriesContextValue>([])

  return (
    <SetSeriesContext.Provider value={setSeries}>
      <SeriesContext.Provider value={series}>{children}</SeriesContext.Provider>
    </SetSeriesContext.Provider>
  )
}

export const useSeries = () => {
  const context = useContext(SeriesContext)

  if (context === undefined)
    throw new Error('useSeries must be used within SeriesProvider')

  return context
}

export const useSetSeries = () => {
  const context = useContext(SetSeriesContext)

  if (context === undefined)
    throw new Error('useSetSeries must be used within SetSeriesProvider')

  return context
}

export default SeriesProvider
