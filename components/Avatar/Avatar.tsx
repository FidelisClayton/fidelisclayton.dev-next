import clsx from 'clsx'
import Image from 'next/image'

export type AvatarProps = {
  className?: string
  width: number
  height: number
}

const profileImagePlaceholder =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAMAAAC67D+PAAAA5FBMVEXZ293W1NOqpKJ7Sjve3d++wMStsLetqqqFiYttb3NZSEtNPEE2MkCGUT5UNDJLLi1GKSoiGicPEiUAAhfr7PDV1tna09DFyc3KyMvQysbBwMPMxsLIxcKyucG6vL7Avr2xs7elrbXFurC2sq+wrK+kqa6coaeuqKWSm6W4qaSan6Swo6OUm5+am5yFjpaSiYuok4l2e4Zye4B7eXqkhHmZd3JgZHFbYGiGZ2BlVlx7WVuBWFp2TlJpT0l0UEVHPUOCTz0/NDxHNjtrQjgxKzZhPDU/LjRQMjFDKi5TLyszIyouGiG8/LJjAAAAbklEQVQI1wXBAwLEMAAEwE1SG2fbtlHj///pDGiTK7VRHvMcpnWy1y5VgQcGla72UISetMCRtu6vsygdJrgSbJ+n4Wozw5rMv//gvev0IStG5Lof/VaDrOaZY5u+NYKoWokTMmZSNLzYsJn+S5cFWL4L5yBrpRMAAAAASUVORK5CYII='

const Avatar: React.FC<AvatarProps> = ({ className, width, height }) => {
  return (
    <div className={clsx('relative', className)}>
      <Image
        className="relative hidden w-full rounded-full md:block"
        src="/images/profile.png"
        alt="Clayton Fidelis"
        placeholder="blur"
        blurDataURL={profileImagePlaceholder}
        width={width}
        height={height}
      />
    </div>
  )
}

export default Avatar
