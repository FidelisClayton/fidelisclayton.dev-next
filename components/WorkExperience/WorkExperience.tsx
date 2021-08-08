import { ReactNode } from 'react'

const WorkExperienceTitle: React.FC<{ company: string; location: string }> = ({
  company,
  location,
}) => (
  <div className="flex items-center justify-between">
    <h4 className="text-lg font-semibold">{company}</h4>
    <p className="text-gray-700">{location}</p>
  </div>
)

type Role = {
  title: string
  start: string | Date
  end: string | Date | null
  bulletPoints: string[] | ReactNode[]
}

type RoleDetailsProps = {
  role: Role
}

const RoleDetails: React.FC<RoleDetailsProps> = ({ role }) => (
  <div className="pl-6 relative">
    <div className="absolute w-2 h-2 bg-gray-200 rounded-full left-1 top-1" />
    <div className="absolute w-[2px] h-7 bg-gray-200 left-[7px] top-4" />

    <h5 className="font-semibold leading-none text-md">{role.title}</h5>

    <p className="text-sm text-gray-700">
      {role.start} - {role.end ?? 'Present'}
    </p>

    {role.bulletPoints && (
      <ul className="ml-5 list-disc">
        {role.bulletPoints.map((item: string | ReactNode) => (
          <li>{item}</li>
        ))}
      </ul>
    )}
  </div>
)

type WorkExperienceProps = {
  company: string
  location: string
  start: Date | string
  end: Date | string | null
  roles: Role[]
}

const WorkExperience: React.FC<WorkExperienceProps> = ({
  company,
  location,
  start,
  end,
  roles,
}) => {
  return (
    <div>
      <WorkExperienceTitle company={company} location={location} />

      <p className="-mt-1 text-gray-700">
        {start} - {end ?? 'Present'}
      </p>

      <div className="relative mt-2 space-y-2">
        {roles.map((role) => (
          <RoleDetails role={role} />
        ))}
      </div>
    </div>
  )
}

export default WorkExperience
