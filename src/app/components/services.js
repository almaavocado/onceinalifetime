'use client'
import { useLanguage } from '../context/LanguageContext'
import { translations } from '../translations/content'

const services = [
    {
        id: 1,
        key: 'choreography',
        imageSrc: 'https://onceinalifetime.s3.us-west-1.amazonaws.com/groupPhoto.png',
        imageAlt: 'Choreography service example.',
    },
    {
        id: 2,
        key: 'coordination',
        imageSrc: 'https://onceinalifetime.s3.us-west-1.amazonaws.com/coordination2.png',
        imageAlt: 'Coordination service example.',
    },
    {
        id: 3,
        key: 'additional',
        imageSrc: 'https://onceinalifetime.s3.us-west-1.amazonaws.com/musicMix.jpg',
        imageAlt: 'Additional services example.',
    },
];

export default function Services() {
    const { language } = useLanguage();
    const t = translations[language].services;

    return (
        <div id="services" className="relative bg-[#0F1B26] py-16 overflow-hidden">
            {/* Core component */}
            
     
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold tracking-tight text-white">{t.title}</h2>
                <p className="mt-4 text-lg text-gray-300">{t.subtitle}</p>

                <div className="mt-10 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
                    {services.map((service) => (
                        <div key={service.id} className="group relative">
                            {/* Gradient container */}
                            <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-[#F28DC4] via-[#113059] to-[#7C53A6] opacity-25 blur-lg"></div>
                            {/* Card */}
                            <div className="relative z-10 flex flex-col h-full rounded-lg border border-gray-700 bg-gray-800 p-6 shadow-md hover:shadow-lg">
                                <img
                                    alt={service.imageAlt}
                                    src={service.imageSrc}
                                    className="h-56 w-full rounded-md object-cover group-hover:opacity-90"
                                />
                                <div className="mt-4 flex flex-col flex-grow">
                                    <h3 className="text-xl font-semibold text-white">
                                        {t.items[service.key].name}
                                    </h3>
                                    <p className="mt-2 text-gray-400 flex-grow">
                                        {t.items[service.key].description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}