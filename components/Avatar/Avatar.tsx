import clsx from 'clsx'

export type AvatarProps = {
  className?: string
}

const Avatar: React.FC<AvatarProps> = ({ className }) => {
  return (
    <div className={clsx('relative', className)}>
      <div className="bg-gradient-to-b from-indigo-500 to-indigo-700 absolute w-24 h-24 top-[3px] left-[3px] bg-indigo-500 rounded-full"></div>

      <img
        className="relative hidden w-24 rounded-full md:block"
        src="https://i.pravatar.cc/300?img=7"
        alt="Clayton Fidelis"
      />
    </div>
  )
}

export default Avatar
