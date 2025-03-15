"use client";
import { motion } from "framer-motion";
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations/content';
import { SparklesCore } from "./ui/sparkle"; 

export default function FounderMessage() {
  const { language } = useLanguage();
  const t = translations[language].message;

  return (
    <section className="relative px-6 lg:px-24 bg-[#0F1B26] overflow-hidden">
      {/* Core component */}
              <SparklesCore
              background="transparent"
              minSize={0.4}
              maxSize={1}
              particleDensity={50}
              className="absolute inset-0 w-full h-full pointer-events-none z-0"
              particleColor="#C9A0FF" />
           

      {/* Smooth Transition Divider */}
      <div className="h-16 bg-gradient-to-b from-transparent to-[#0F1B26]"></div>

      <div className="max-w-6xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-12">
        
        {/* Text Section */}
        <motion.div 
          initial={{ opacity: 0, x: 60 }}  
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="w-full lg:w-3/4 text-center lg:text-left lg:pl-6"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-200 mb-6">
            {t.title}
          </h2>

          <p className="text-lg lg:text-xl font-semibold bg-gradient-to-r from-[#FFD700] via-[#D4AF37] to-[#AE8625] bg-clip-text text-transparent italic mb-5">
            {t.quote}
          </p>

          <p className="text-gray-300 text-base lg:text-lg leading-relaxed mb-5">
            {t.paragraph1}
          </p>

          <p className="text-gray-300 text-base lg:text-lg leading-relaxed mb-5">
            {t.paragraph2}
          </p>

          <p className="text-gray-300 text-base lg:text-lg leading-relaxed mb-6">
            {t.paragraph3}
          </p>

          <h4 className="text-lg font-bold bg-gradient-to-r from-[#AE8625] to-[#D2AC47] bg-clip-text text-transparent italic">
            {t.signature}
          </h4>

          <h4 className="text-lg font-bold bg-gradient-to-r from-[#AE8625] to-[#D2AC47] bg-clip-text text-transparent italic">
            {t.quote2}
          </h4>
        </motion.div>

        {/* Image Section */}
        <motion.div 
          initial={{ opacity: 0, x: -40 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex justify-center lg:justify-end w-full lg:w-1/2 relative"
        >
          {/* Gradient container */}
          <div className="relative">
            {/* Subtle gradient behind the image */}
            <div className="absolute -inset-4 rounded-lg bg-gradient-to-r from-[#F28DC4] to-[#7C53A6] opacity-25 blur-lg"></div>
            {/* Image */}
            <div className="relative z-10">
              <img
                src="https://onceinalifetime.s3.us-west-1.amazonaws.com/laz3.png" 
                alt="Founder" 
                className="rounded-xl shadow-lg w-full max-h-[500px] object-cover aspect-[3/4]" 
              />
            </div>
          </div>
        </motion.div>

      </div>

      {/* Subtle Divider to Improve Section Break */}
      <div className="border-t border-white/10 w-3/4 mx-auto my-16"></div>
    </section>
  );
}
