'use client'
import { SparklesIcon } from '@heroicons/react/24/outline'
import { useLanguage } from '../context/LanguageContext'
import { translations } from '../translations/content'

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
  const { language } = useLanguage();
  const t = translations[language].pricing;

  return (
    <div id="packages" className="relative isolate bg-[#0F1B26] px-6 py-8 sm:py-10 lg:px-8">
      <div className="mx-auto max-w-7xl text-center">
        <h2 className="text-base font-semibold text-yellow-600">{t.title}</h2>
        <p className="mt-2 text-4xl text-white font-bold tracking-tight sm:text-5xl">
          {t.subtitle}
        </p>
        <p className="mt-6 text-white text-lg leading-8">
          {t.description}
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
              className="mt-10 group w-1/2 rounded-lg w-full relative grid overflow-hidden rounded-full px-4 py-1 shadow-[0_1000px_0_0_hsl(0_0%_20%)_inset] transition-colors duration-200 hover:opacity-90 transition"
              href="mailto:oialq.15@gmail.com" 
            >
              <span>
                <span className="spark mask-gradient absolute inset-0 h-[100%] w-[100%] animate-flip overflow-hidden rounded-full [mask:linear-gradient(white,_transparent_50%)] before:absolute before:aspect-square before:w-[200%] before:rotate-[-90deg] before:animate-rotate before:bg-[conic-gradient(from_0deg,transparent_0_340deg,white_360deg)] before:content-[''] before:[inset:0_auto_auto_50%] before:[translate:-50%_-15%]" />
              </span>
              <span className="backdrop absolute inset-[1px] rounded-full bg-neutral-950 transition-colors duration-200 group-hover:bg-neutral-800 w-full bg-gradient-to-r from-[#AE8625] to-[#D2AC47] py-3 text-center rounded-lg hover:opacity-90 transition" />
              <span className="z-10 py-2 text-center text-sm font-semibold">{t.getStarted}</span>
            </a>

          </div>
        ))}
      </div>

      <p className="mt-10 text-center text-lg">{t.contact}</p>

      {/* Subtle Divider to Improve Section Break */}
      <div className="border-t border-white/10 my-16 mx-auto w-3/4"></div>

    </div>
  )
}
