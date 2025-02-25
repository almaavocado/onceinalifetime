'use client'
import { useLanguage } from '../context/LanguageContext'
import { translations } from '../translations/content'

export default function VideoHero() {
    const { language } = useLanguage();
    const t = translations[language].videoComponent;

    return (
        <div id="about" className="relative h-[600px] w-full">
            <video 
                className="absolute inset-0 w-full h-full object-cover blur-sm" 
                autoPlay 
                loop 
                muted
                playsInline
                controls={false}
                preload="auto"
                webkit-playsinline="true"
            >
                <source src="https://onceinalifetime.s3.us-west-1.amazonaws.com/aboutVideo.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            <div className="absolute inset-0 bg-black/70 flex flex-col items-center justify-center text-white text-center p-6">
                <p className="text-base font-semibold text-yellow-600">{t.title}</p>
                <h1 className="mt-2 text-2xl font-bold tracking-tight text-gray-200 sm:text-4xl drop-shadow-lg">
                    {t.subtitle}
                </h1>
                <p className="mt-6 text-lg leading-7 sm:text-xl max-w-2xl mx-auto px-4 py-2 rounded-md drop-shadow-md">
                    {t.description}
                </p>
            </div>
        </div>
    );
}
