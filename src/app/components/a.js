import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'

export default function About() {
  return (
    <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <svg
          aria-hidden="true"
          className="absolute top-0 left-[max(50%,25rem)] h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
        >
          <defs>
            <pattern
              x="50%"
              y={-1}
              id="e813992c-7d03-4cc4-a2bd-151760b470a0"
              width={200}
              height={200}
              patternUnits="userSpaceOnUse"
            >
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
            <path
              d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" width="100%" height="100%" strokeWidth={0} />
        </svg>
      </div>
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <p className="text-base/7 font-semibold text-indigo-600">Our Story</p>
              <h1 className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
              Our Story
              </h1>
              <p className="text-lg font-bold bg-gradient-to-r from-[#AE8625] to-[#D2AC47] bg-clip-text text-transparent italic">
              "Empowering one Quinceañera at a time with dance, confidence, self-love, and teamwork."
              </p>
            </div>
          </div>
        </div>
        <div className="-mt-12 -ml-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <img
            alt=""
            src="https://tailwindcss.com/plus-assets/img/component-images/dark-project-app-screenshot.png"
            className="w-[48rem] max-w-none rounded-xl bg-gray-900 ring-1 shadow-xl ring-gray-400/10 sm:w-[57rem]"
          />
        </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base/7 text-gray-700 lg:max-w-lg">
              <p>
                <strong>Once in a Lifetime Quinceanera (OIALQ)</strong> is a company
                owned by <strong>Lazaro Trinidad</strong>, which has been providing
                families with beautiful choreographies and event coordinating for
                the past 19 years. Working from beginning to end to create a magical
                experience and memories. All while empowering one Quinceañera at a
                time with dance, confidence, self-love, and teamwork; helping her
                celebrate becoming a young, strong woman.
              </p>
              <ul role="list" className="mt-8 space-y-8 text-gray-600">
                <li className="flex gap-x-3">
                  <CloudArrowUpIcon aria-hidden="true" className="mt-1 size-5 flex-none text-indigo-600" />
                  <span>
                    <strong className="font-semibold text-gray-900">Push to deploy.</strong> Lorem ipsum, dolor sit amet
                    consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate
                    blanditiis ratione.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <LockClosedIcon aria-hidden="true" className="mt-1 size-5 flex-none text-indigo-600" />
                  <span>
                    <strong className="font-semibold text-gray-900">SSL certificates.</strong> Anim aute id magna aliqua
                    ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <ServerIcon aria-hidden="true" className="mt-1 size-5 flex-none text-indigo-600" />
                  <span>
                    <strong className="font-semibold text-gray-900">Database backups.</strong> Ac tincidunt sapien
                    vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.
                  </span>
                </li>
              </ul>
              <p className="mt-8">
              Lazaro Trinidad is a strong believer in responsibility, honesty,
              hard work, and kindness. He has a true passion for our Latino
              culture and the meaning of Quinceañera. While we celebrate the
              dress, make-up, heels, and dance; we also focus on empowering the
              Quinceañera to take ownership of her womanhood. Giving her a space
              to be the best version of herself with her true beliefs in her Once
              in a Lifetime Quinceañera.
              </p>
              <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">No server? No problem.</h2>
              <p className="mt-6">
              OIALQ is designed to introduce and provide the court of honor with
              the fundamental skills needed for the waltz and surprise dance.
              Depending on their surprise dance, they will have the opportunity to
              taste the different music genres such as cumbia, huapangos,
              merengue, hip-hop, rock n roll, and more. All while highlighting the
              essential balance between style and comfort in the dress, crinolina,
              and shoes, ensuring the Quinceañera can move gracefully and dance
              with effortless elegance throughout her special celebration.
              </p>
              <p className="mt-6">
              Furthermore, we also provide public speaking skills to help the
              Quinceañera sound and look her best during her “Brindis” in front of
              her guests. Creating a safe space where dance will bring them into a
              team of unity, respect, inclusiveness, and fun.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
