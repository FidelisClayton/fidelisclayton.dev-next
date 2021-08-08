import WorkExperience from '../../components/WorkExperience/WorkExperience'
import cv from '../../config/cv'

type Props = {
  className?: string
}

const CV: React.FC<Props> = () => {
  return (
    <main className="container max-w-4xl px-12 mx-auto space-y-4">
      <header className="flex justify-between py-8">
        <div>
          <h1 className="text-2xl font-semibold">Clayton Fidelis</h1>
          <h2 className="text-xl text-gray-600">Senior Front-end Engineer</h2>
          <div className="flex items-center text-gray-600 space-x-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>

            <h2>Berlin, Germany</h2>
          </div>
        </div>

        <div className="flex flex-col items-end justify-end text-gray-700">
          <div className="flex items-center space-x-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>

            <a href="mailto:clayton.fidelis@live.com">
              clayton.fidelis@live.com
            </a>
          </div>

          <div className="flex items-center text-gray-700 space-x-1">
            <svg
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 30 30"
              className="w-5 h-5"
            >
              <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z" />
            </svg>

            <a href="https://github.com/FidelisClayton">FidelisClayton</a>
          </div>
        </div>
      </header>

      <main className="space-y-8">
        <div className="flex">
          <div className="w-1/4">
            <h3>Bio</h3>
          </div>

          <div className="w-3/4">
            <p>
              I'm a frontend engineer with extensive experience on building web
              applications with rich interactions and maintainable code. I
              specialized in React and Typescript, but I also have working
              experience with Elm and Angular.
            </p>
          </div>
        </div>

        <div className="flex">
          <div className="w-1/4">
            <h3>Languages</h3>
          </div>

          <div className="w-3/4">
            JavaScript, TypeScript, Elm, HTML, CSS/SCSS, GraphQL
          </div>
        </div>

        <div className="flex">
          <div className="w-1/4">
            <h3>Technologies</h3>
          </div>

          <div className="w-3/4">
            React, Jest, React Testing Library, Cypress, Material UI, Tailwind,
            Styled Components
          </div>
        </div>

        <div className="flex">
          <div className="w-1/4">
            <h3>Experience</h3>
          </div>

          <div className="w-3/4">
            {cv.workExperiences.map((workExperience) => (
              <WorkExperience {...workExperience} />
            ))}
          </div>
        </div>
      </main>
    </main>
  )
}

export default CV
