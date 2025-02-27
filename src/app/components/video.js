'use client'
import { useLanguage } from '../context/LanguageContext'
import { translations } from '../translations/content'

export default function VideoPage() {
    const { language } = useLanguage();
    const t = translations[language].video;

    return (
        <div className="relative w-full min-h-screen flex flex-col justify-center items-center p-6 text-white mt-8 overflow-hidden bg-[#0F1B26]">
            {/* Gradient Spots 
            <div className="absolute top-0 left-0 w-48 h-40 bg-pink-500 opacity-50 rounded-full mix-blend-screen filter blur-3xl animate-blob"></div>
            <div className="absolute top-0 right-0 w-48 h-40 bg-purple-500 opacity-50 rounded-full mix-blend-screen filter blur-3xl animate-blob animation-delay-2000"></div>
            <div className="absolute bottom-0 left-0 w-48 h-40 bg-pink-500 opacity-50 rounded-full mix-blend-screen filter blur-3xl animate-blob animation-delay-4000"></div>
            <div className="absolute bottom-0 right-0 w-48 h-40 bg-purple-500 opacity-50 rounded-full mix-blend-screen filter blur-3xl animate-blob animation-delay-6000"></div>

            */}
            
            <h1 className="text-xl md:text-2xl font-bold mb-4 text-center">
                {t.title}
            </h1>
            <p className="text-sm md:text-lg italic text-gray-300 text-center max-w-2xl">
                {t.subtitle}
            </p>

            {/* Video Container */}
            <div className="w-full max-w-4xl mt-8">
                <video 
                    className="w-full h-auto max-h-[80vh] rounded-lg shadow-lg aspect-video border-2 border-white/10" 
                    controls
                    poster="https://onceinalifetime.s3.us-west-1.amazonaws.com/oialq_thumbnail.png"
                >
                    <source src="https://onceinalifetime.s3.us-west-1.amazonaws.com/OIALQ_Video2.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>

            <a href="mailto:laztrinidad87@gmail.com" className="mt-6 px-6 py-3">
                <button className="rounded-md bg-gradient-to-r from-[#AE8625] to-[#D2AC47] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gradient-to-r hover:from-[#4C0F30] hover:to-[#7F1D2A]">
                    {t.cta}
                </button>
            </a>

            <div className="border-t border-white/10 my-12 mx-auto w-3/4"></div>
            <p className="text-center text-gray-400 italic max-w-lg">
                {t.testimonial}
            </p>
        </div>
    );
}