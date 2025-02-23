import { SparklesIcon } from '@heroicons/react/24/outline'

const packages = [
  {
    name: 'The Elegance Package',
    practices: '7 practices, dress rehearsal, and day of',
    choreography: ['Vals con su corte'],
    coordination: [
      'Presentación',
      'Coronación',
      'Último Juguete',
      'Vals con Papá/Mamá e Hija',
      'Pastel',
      'Brindis',
      'Vals de Padrinos',
    ],
  },
  {
    name: 'The Radiance Package',
    practices: '13 practices, dress rehearsal, and day of',
    choreography: ['Vals con su corte', 'Baile Sorpresa'],
    coordination: [
      'Presentación',
      'Coronación',
      'Último Juguete',
      'Vals con Papá/Mamá e Hija',
      'Pastel',
      'Brindis',
      'Vals de Padrinos',
    ],
  },
  {
    name: 'The Grandeur Package',
    practices: '18 practices, dress rehearsal, and day of',
    choreography: ['Vals con su corte', 'Baile Sorpresa', 'Vals con Papá'],
    coordination: [
      'Presentación',
      'Coronación',
      'Último Juguete',
      'Pastel',
      'Brindis',
      'Vals de Padrinos',
    ],
  },
  {
    name: 'The Forever Package',
    practices: '23 practices, dress rehearsal, and day of',
    choreography: [
      'Vals con su corte',
      'Baile Sorpresa',
      'Vals con Papá',
      'Último Vals',
    ],
    coordination: [
      'Presentación',
      'Coronación',
      'Último Juguete',
      'Pastel',
      'Brindis',
      'Vals de Padrinos',
    ],
  },
]

export default function Pricing() {
  return (
    <div id="pricing" className="relative isolate bg-[#0F1B26] px-6 py-8 sm:py-10 lg:px-8">
      <div className="mx-auto max-w-7xl text-center">
       <h2 className="text-base font-semibold text-yellow-600">Pricing</h2>
        <p className="mt-2 text-4xl font-bold tracking-tight sm:text-5xl">
          Once in a Lifetime Quinceañera Packages
        </p>
        <p className="mt-6 text-lg leading-8">
          Choose the perfect package to make your event unforgettable.
        </p>
      </div>

      <div className="mx-auto mt-16 grid max-w-7xl grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-y-16">
        {packages.map((pkg) => (
          <div
            key={pkg.name}
            className="flex flex-col justify-between rounded-lg border border-[#243746] bg-gray-800 p-6 shadow-sm hover:shadow-lg transition min-h-full"
          >
            <div>
              <h3 className="text-lg font-semibold leading-6 text-[#FFFFFF]">{pkg.name}</h3>
              <p className="mt-4 text-2xl font-bold tracking-tight text-gray-900">{pkg.price}</p>
              <p className="mt-2 text-sm text-[#E0E0E0]">{pkg.practices}</p>

              <div className="mt-6 text-sm text-white">
                <h4 className="font-bold text-white">Choreography</h4>
                <ul className="mt-2 space-y-2">
                  {pkg.choreography.map((item) => (
                    <li key={item} className="flex items-start">
                      <SparklesIcon className="h-5 w-5 flex-none text-[#FFC107]" aria-hidden="true" />
                      <span className="ml-3">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-4 text-sm text-white">
                <h4 className="font-bold text-white">Coordination</h4>
                <ul className="mt-2 space-y-2">
                  {pkg.coordination.map((item) => (
                    <li key={item} className="flex items-start">
                      <SparklesIcon className="h-5 w-5 flex-none text-[#FFC107]" aria-hidden="true" />
                      <span className="ml-3">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <a
              href="#"
              className="mt-10 block w-full rounded-md bg-gradient-to-r from-[#AE8625] to-[#D2AC47] py-2 text-center text-sm font-semibold text-white hover:bg-[#4FC3F7]"
            >
              Get Started
            </a>
          </div>
        ))}
      </div>

      <p className="mt-10 text-center text-lg">Contact us today for your free consultation and more details!</p>

      {/* Subtle Divider to Improve Section Break */}
      <div className="border-t border-white/10 my-16 mx-auto w-3/4"></div>

    </div>
  )
}
