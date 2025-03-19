'use client'

import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations/content';
import { SparklesCore } from "./ui/sparkle";
import emailjs from 'emailjs-com';

export default function ContactMe() {
  const { language } = useLanguage();
  const cont = translations[language].contact;

  const [successMessage, setSuccessMessage] = useState(''); // State to manage success message

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID, 
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID, 
        e.target,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY 
      )
      .then(
        (result) => {
          console.log('Email sent successfully:', result.text);
          setSuccessMessage('Your message has been sent successfully!'); // Set success message
          e.target.reset(); 
        },
        (error) => {
          console.error('Error sending email:', error.text);
          setSuccessMessage('Failed to send your message. Please try again.'); // Set error message
        }
      );
  };

  return (
    <div id="contact" className="relative bg-[#0F1B26] text-white py-16 px-6 overflow-hidden">
      {/* Core component */}
      <SparklesCore
        background="transparent"
        minSize={0.4}
        maxSize={1}
        particleDensity={50}
        className="absolute inset-0 w-full h-full pointer-events-none z-0"
        particleColor="#C9A0FF"
      />

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
        {/* Contact Form */}
        <div className="flex flex-col">
          <h2 className="text-3xl font-bold text-yellow-600">{cont.title}</h2>
          <p className="mt-3 text-gray-300">{cont.subtitle}</p>

          <form className="mt-6 space-y-4" onSubmit={sendEmail}>
            <input
              type="text"
              name="name"
              placeholder={cont.form.name}
              className="w-full p-3 bg-gray-800 rounded-lg border border-gray-600 focus:ring-[#FFC107] focus:border-[#FFC107]"
              required
            />
            <input
              type="email"
              name="email"
              placeholder={cont.form.email}
              className="w-full p-3 bg-gray-800 rounded-lg border border-gray-600 focus:ring-[#FFC107] focus:border-[#FFC107]"
              required
            />
            <textarea
              name="message"
              placeholder={cont.form.message}
              rows="4"
              className="w-full p-3 bg-gray-800 rounded-lg border border-gray-600 focus:ring-[#FFC107] focus:border-[#FFC107]"
              required
            ></textarea>

            <button
              type="submit"
              className="group w-1/2 rounded-lg relative grid overflow-hidden rounded-full px-4 py-1 shadow-[0_1000px_0_0_hsl(0_0%_20%)_inset] transition-colors duration-200 hover:opacity-90 transition"
            >
              <span>
                <span className="spark mask-gradient absolute inset-0 h-[100%] w-[100%] animate-flip overflow-hidden rounded-full [mask:linear-gradient(white,_transparent_50%)] before:absolute before:aspect-square before:w-[200%] before:rotate-[-90deg] before:animate-rotate before:bg-[conic-gradient(from_0deg,transparent_0_340deg,white_360deg)] before:content-[''] before:[inset:0_auto_auto_50%] before:[translate:-50%_-15%]" />
              </span>
              <span className="backdrop absolute inset-[1px] rounded-full bg-neutral-950 transition-colors duration-200 group-hover:bg-neutral-800 w-full bg-gradient-to-r from-[#AE8625] to-[#D2AC47] py-3 text-center rounded-lg hover:opacity-90 transition" />
              <span className="z-10 py-2 text-md font-semibold">{cont.submit}</span>
            </button>
          </form>

          {/* Success Message */}
          {successMessage && (
            <p className="mt-4 text-center text-[#926AA5]font-semibold">
              {successMessage}
            </p>
          )}
        </div>

        {/* Map Section */}
        <div className="relative mt-8 w-full h-80 rounded-lg overflow-hidden flex justify-center">
          <div className="absolute inset-0 flex items-center justify-center bg-gray-800">
            <span className="text-white">Loading map...</span>
          </div>
          <iframe
            title="OIALQ Location"
            width="100%"
            height="100%"
            loading="lazy"
            className="relative rounded-lg z-10"
            src="https://maps.google.com/maps?q=Los+Angeles,CA&z=13&output=embed"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}