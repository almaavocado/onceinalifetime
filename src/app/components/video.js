'use client'
import { useLanguage } from '../context/LanguageContext'
import { translations } from '../translations/content'
import { SparklesCore } from "./ui/sparkle"; 

export default function VideoPage() {
    const { language } = useLanguage();
    const t = translations[language].video;

    return (
        <div className="relative w-full min-h-screen flex flex-col justify-center items-center p-6 text-white mt-8 overflow-hidden bg-[#0F1B26]">
             <SparklesCore
                    background="transparent"
                    minSize={0.4}
                    maxSize={1}
                    particleDensity={10}
                    className="absolute inset-0 w-full h-full pointer-events-none z-0"
                    particleColor="#C9A0FF"
                />
            
            <h1 className="text-xl md:text-2xl font-bold mb-4 text-center">
                {t.title}
            </h1>
            <p className="text-sm md:text-lg italic text-gray-300 text-center max-w-2xl">
                {t.subtitle}
            </p>

            {/* Video Container */}
            <div className="w-full max-w-4xl mt-8">
                <video 
                    className="w-full h-auto max-h-[70vh] object-fill rounded-lg shadow-lg aspect-video border-2 border-white/10" 
                    controls
                    poster="https://onceinalifetime.s3.us-west-1.amazonaws.com/video-oialq.png"
                >
                    <source src="https://onceinalifetime.s3.us-west-1.amazonaws.com/OIALQ_Video2.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>

            <a href="mailto:laztrinidad87@gmail.com" className="mt-6 px-6 py-3">
                <button
                type="submit"
                className="group w-full rounded-lg relative grid overflow-hidden rounded-full px-3.5 py-2.5 text-sm font-semibold shadow-[0_1000px_0_0_hsl(0_0%_20%)_inset] transition-colors duration-200 hover:opacity-90 transition"
                >
                    <span>
                        <span className="spark mask-gradient absolute inset-0 h-[100%] w-[100%] animate-flip overflow-hidden rounded-full [mask:linear-gradient(white,_transparent_50%)] before:absolute before:aspect-square before:w-[200%] before:rotate-[-90deg] before:animate-rotate before:bg-[conic-gradient(from_0deg,transparent_0_340deg,white_360deg)] before:content-[''] before:[inset:0_auto_auto_50%] before:[translate:-50%_-15%]" />
                    </span>
                    <span className="backdrop absolute inset-[1px] rounded-full bg-neutral-950 transition-colors duration-200 group-hover:bg-neutral-800 w-full bg-gradient-to-r from-[#AE8625] to-[#D2AC47] py-3 text-center rounded-lg hover:opacity-90 transition" />
                    <span className="z-10 text-sm font-semibold">{t.cta}</span>
                </button>
            </a>

            <div className="border-t border-white/10 my-12 mx-auto w-3/4"></div>
            <p className="text-center text-gray-400 italic max-w-lg">
                {t.testimonial}
            </p>
        </div>
    );
}