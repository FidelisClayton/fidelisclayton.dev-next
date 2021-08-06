import Link from 'next/link'
import Avatar from '../Avatar'
import ThemeSwitcher from '../ThemeSwitcher/ThemeSwitcher'

const PersonalInformation = () => {
  return (
    <div>
      <Avatar />

      <div className="flex items-center justify-between text-gray-900 dark:text-gray-200">
        <div className="relative inline-block mt-4 mb-6">
          <div className="absolute top-0 mt-3 w-full h-4 dark:bg-gray-700 bg-indigo-100 blur-xl rounded transform rotate-[-1deg]" />

          <h1 className="relative inline-block text-3xl font-semibold">
            Clayton Fidelis
          </h1>
        </div>

        <ThemeSwitcher />
      </div>

      <div className="hidden mb-2 space-x-2 md:block">
        <Link href="https://www.linkedin.com/in/fidelisclayton/">
          <a
            target="_blank"
            className="dark:text-white hover:text-indigo-500 dark:hover:text-indigo-500 transition-all"
          >
            <span className="inline-block w-8 p-[5px] pb-[6px] pt-[1px]">
              <svg
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 50 50"
                width="auto"
                height="auto"
              >
                <path d="M 8 3.0097656 C 4.53 3.0097656 2.0097656 5.0892187 2.0097656 7.9492188 C 2.0097656 10.819219 4.59 12.990234 8 12.990234 C 11.47 12.990234 13.990234 10.870625 13.990234 7.890625 C 13.830234 5.020625 11.36 3.0097656 8 3.0097656 z M 3 15 C 2.45 15 2 15.45 2 16 L 2 45 C 2 45.55 2.45 46 3 46 L 13 46 C 13.55 46 14 45.55 14 45 L 14 16 C 14 15.45 13.55 15 13 15 L 3 15 z M 18 15 C 17.45 15 17 15.45 17 16 L 17 45 C 17 45.55 17.45 46 18 46 L 27 46 C 27.552 46 28 45.552 28 45 L 28 30 L 28 29.75 L 28 29.5 C 28 27.13 29.820625 25.199531 32.140625 25.019531 C 32.260625 24.999531 32.38 25 32.5 25 C 32.62 25 32.739375 24.999531 32.859375 25.019531 C 35.179375 25.199531 37 27.13 37 29.5 L 37 45 C 37 45.552 37.448 46 38 46 L 47 46 C 47.55 46 48 45.55 48 45 L 48 28 C 48 21.53 44.529063 15 36.789062 15 C 33.269062 15 30.61 16.360234 29 17.490234 L 29 16 C 29 15.45 28.55 15 28 15 L 18 15 z" />
              </svg>
            </span>
          </a>
        </Link>

        <Link href="https://twitter.com/fidelisclayton">
          <a target="_blank">
            <span className="inline-block w-8 p-1 text-gray-900 dark:text-white hover:text-indigo-500 dark:hover:text-indigo-500 transition-all">
              <svg
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 30 30"
                width="auto"
                height="auto"
              >
                <path d="M28,6.937c-0.957,0.425-1.985,0.711-3.064,0.84c1.102-0.66,1.947-1.705,2.345-2.951c-1.03,0.611-2.172,1.055-3.388,1.295 c-0.973-1.037-2.359-1.685-3.893-1.685c-2.946,0-5.334,2.389-5.334,5.334c0,0.418,0.048,0.826,0.138,1.215 c-4.433-0.222-8.363-2.346-10.995-5.574C3.351,6.199,3.088,7.115,3.088,8.094c0,1.85,0.941,3.483,2.372,4.439 c-0.874-0.028-1.697-0.268-2.416-0.667c0,0.023,0,0.044,0,0.067c0,2.585,1.838,4.741,4.279,5.23 c-0.447,0.122-0.919,0.187-1.406,0.187c-0.343,0-0.678-0.034-1.003-0.095c0.679,2.119,2.649,3.662,4.983,3.705 c-1.825,1.431-4.125,2.284-6.625,2.284c-0.43,0-0.855-0.025-1.273-0.075c2.361,1.513,5.164,2.396,8.177,2.396 c9.812,0,15.176-8.128,15.176-15.177c0-0.231-0.005-0.461-0.015-0.69C26.38,8.945,27.285,8.006,28,6.937z" />
              </svg>
            </span>
          </a>
        </Link>
      </div>

      <p className="hidden text-lg leading-relaxed text-gray-800 dark:text-gray-400 md:block">
        Desenvolvedor front-end, entusiasta Elm, apaixonado por JavaScript e um
        amante do open source. Gosto de compartilhar o que sei, então escrevo
        tutoriais sobre desenvolvimento de software com foco em front-end,
        principalmente Elm e React.
      </p>
    </div>
  )
}

export default PersonalInformation
