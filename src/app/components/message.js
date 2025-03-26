'use client';
import { useRef } from 'react';
import { motion } from 'framer-motion';
import { ScrollProgress } from '../../../components/motion-primitives/scroll-progress';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations/content';

export default function FounderMessage() {
  const { language } = useLanguage();
  const t = translations[language].message;
  const containerRef = useRef(null);

  return (
    <section className="relative px-6 lg:px-16 bg-[#0F1B26] overflow-hidden">
      {/* Smooth Transition Divider */}
      <div className="h-16 bg-gradient-to-b from-transparent to-[#0F1B26]"></div>

      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-start gap-12">
        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex justify-center w-full lg:w-1/2 relative order-1 lg:order-none"
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

        {/* Scrollable Text Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="w-full lg:w-1/2 text-center lg:text-left lg:pl-6 order-2"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-200">
            {t.title}
          </h2>

          <p className="text-lg lg:text-xl font-semibold bg-gradient-to-r from-[#FFD700] via-[#D4AF37] to-[#AE8625] bg-clip-text text-transparent italic">
            {t.quote}
          </p>

          {/* Scrollable Content Box */}
          <div
            className="relative mt-6 h-[350px] overflow-auto px-6 py-4  bg-[#0F1B26] rounded-lg shadow-lg backdrop-blur-md"
            ref={containerRef}
          >
            {/* Scroll Progress Bar */}
            <div className="absolute left-0 top-0 w-full">
              <div className="absolute left-0 top-0 h-1 w-full bg-[#E6F4FE] dark:bg-[#111927]" />
              <ScrollProgress
                containerRef={containerRef}
                className="absolute top-0 bg-yellow-700"
              />
            </div>

            <div className="space-y-6 text-gray-300 text-base lg:text-lg leading-relaxed">
              <p>{t.paragraph1}</p>
              <p>{t.paragraph2}</p>
              <p>{t.paragraph3}</p>
              <p>{t.paragraph4}</p>
              <p>{t.paragraph5}</p>
            </div>
          </div>

          {/* Signature and Quote */}
          <div className="mt-8">
            <h4 className="text-lg font-bold bg-gradient-to-r from-[#AE8625] to-[#D2AC47] bg-clip-text text-transparent italic">
              {t.signature}
            </h4>
            <h4 className="text-lg font-bold bg-gradient-to-r from-[#AE8625] to-[#D2AC47] bg-clip-text text-transparent italic">
              {t.quote2}
            </h4>
          </div>
        </motion.div>
      </div>

      {/* Subtle Divider to Improve Section Break */}
      <div className="border-t border-white/10 w-3/4 mx-auto my-16 mb-10"></div>
    </section>
  );
}