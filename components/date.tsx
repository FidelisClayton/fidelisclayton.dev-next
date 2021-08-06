import { parseISO, format } from 'date-fns'

type Props = {
  dateString: string
  className?: string
}

const Date: React.FC<Props> = ({ className, dateString }) => {
  const date = parseISO(dateString)

  return (
    <time className={className} dateTime={dateString}>
      {format(date, 'LLLL d, yyyy')}
    </time>
  )
}

export default Date
