import clsx from 'clsx'
import Image from 'next/image'

export type AvatarProps = {
  className?: string
  width: number
  height: number
}

const Avatar: React.FC<AvatarProps> = ({ className }) => {
  return (
    <div className={clsx('relative', className)}>
      <Image
        className="relative hidden w-full rounded-full md:block"
        src="/images/profile.png"
        alt="Clayton Fidelis"
        layout="fill"
      />
    </div>
  )
}

export default Avatar
