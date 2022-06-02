const Company = () => {
  return (
    <main className="flex flex-col items-center">
      <section className="min-h-[80vh] w-full py-20 px-10 flex flex-col items-center justify-center gap-4 bg-green-50">
        <h2 className="text-center font-extrabold text-transparent sm:text-6xl text-4xl bg-clip-text bg-gradient-to-r from-green-500 to-green-700">
          FIDELIS DESENVOLVIMENTO DE APLICACOES{" "}
        </h2>
        <h1 className="text-lg uppercase opacity-70">About the company</h1>
      </section>

      <section className="py-20 px-10">
        <div className="gap-10 container mx-auto max-w-4xl flex flex-col items-center justify-center">
          <h2 className="text-3xl font-bold">What we do</h2>
          <p className="text-xl text-center">
            We develop and improve software. Our speciality is web development,
            particularly using Javascript-centric technologies.
          </p>

          <div className="flex gap-20">
            <div>
              <h3 className="text-2xl mb-4">Services</h3>

              <ul>
                <li className="text-lg">Front-end development</li>
                <li className="text-lg">Back-end development</li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl mb-4">Technologies</h3>

              <ul>
                <li className="flex flex-row gap-2 text-lg text-lg">
                  <img
                    width="20px"
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                  />{" "}
                  JavaScript
                </li>

                <li className="flex flex-row gap-2 text-lg text-lg">
                  <img
                    width="20px"
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
                  />{" "}
                  TypeScript
                </li>

                <li className="flex flex-row gap-2 text-lg">
                  <img
                    width="20px"
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/elm/elm-original.svg"
                  />{" "}
                  Elm
                </li>

                <li className="flex flex-row gap-2 text-lg">
                  <img
                    width="20px"
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                  />{" "}
                  React
                </li>

                <li className="flex flex-row gap-2 text-lg">
                  <img
                    width="20px"
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"
                  />{" "}
                  Next.js
                </li>

                <li className="flex flex-row gap-2 text-lg">
                  <img
                    width="20px"
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
                  />{" "}
                  Node.js
                </li>

                <li className="flex flex-row gap-2 text-lg">
                  <img
                    width="20px"
                    src="https://github.com/cypress-io/cypress-icons/blob/master/src/icons/icon_128x128.png?raw=true"
                  />{" "}
                  Cypress
                </li>

                <li className="flex flex-row gap-2 text-lg">
                  <img
                    width="20px"
                    src="https://testing-library.com/img/octopus-64x64.png"
                  />{" "}
                  React Testing Library
                </li>

                <li className="flex flex-row gap-2 text-lg">
                  <img
                    width="20px"
                    src="https://styled-components.com/icon.png"
                  />{" "}
                  styled components
                </li>

                <li className="flex flex-row gap-2 text-lg">
                  <img
                    width="20px"
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg"
                  />{" "}
                  GraphQL
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-20 px-10 bg-indigo-50/40">
        <div className="gap-10 container mx-auto max-w-4xl flex flex-col items-center justify-center">
          <h2 className="text-3xl font-bold">About the founder</h2>
          <img
            className="rounded-full w-60"
            src="https://avatars.githubusercontent.com/u/9627967?v=4"
            alt="Clayton Fidelis"
          />

          <p className="text-center text-lg">
            <strong>Clayton Fidelis</strong> is a software engineer with over 7
            years of professional experience. Throughout his career, he worked
            for startups in the fintech, health tech, and gaming industries. He
            started his career in Brazil and then moved to Germany, nowadays he
            is back in Brazil mainly working remotely.
          </p>
        </div>
      </section>

      <footer className="pt-20 px-10 w-full">
        <div className="gap-10 container mx-auto max-w-4xl flex flex-col items-center justify-center">
          <h2 className="text-3xl font-bold">Contact</h2>

          <p className="text-center text-lg mb-20">
            Reach us via our e-mail:{" "}
            <a
              className="text-blue-600"
              href="mailto:claytonfidelis1+company@gmail.com"
            >
              claytonfidelis1@gmail.com
            </a>
          </p>

          <div className="py-2">
            FIDELIS DESENVOLVIMENTO DE APLICACOES LTDA - 45.966.847/0001-63
          </div>
        </div>
      </footer>
    </main>
  );
};

export default Company;
