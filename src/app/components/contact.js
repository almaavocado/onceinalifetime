'use client'
export default function ContactMe() {
  return (
    <div id="contact" className="relative bg-[#0F1B26] text-white py-16 px-6 overflow-hidden">
      {/* Gradient Spots */}
      <div className="absolute top-0 left-0 w-16 h-96 bg-pink-500 opacity-50 rounded-full mix-blend-screen filter blur-3xl animate-blob"></div>
      <div className="absolute top-0 right-0 w-16 h-96 bg-purple-500 opacity-50 rounded-full mix-blend-screen filter blur-3xl animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-0 left-0 w-16 h-96 bg-pink-500 opacity-50 rounded-full mix-blend-screen filter blur-3xl animate-blob animation-delay-4000"></div>
      <div className="absolute bottom-0 right-0 w-16 h-96 bg-purple-500 opacity-50 rounded-full mix-blend-screen filter blur-3xl animate-blob animation-delay-6000"></div>
      <div className="inset-x-0 -top-40 -z-10 h-8 bg-pink-500 opacity-50 rounded-full mix-blend-screen filter blur-3xl animate-blob animation-delay-4000"></div>
      <div className="inset-x-0 -bottom-40 -z-10 h-6 bg-purple-500 opacity-50 rounded-full mix-blend-screen filter blur-3xl animate-blob animation-delay-6000"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Contact Form */}
        <div className="flex flex-col">
          <h2 className="text-3xl font-bold text-yellow-600">Get in Touch</h2>
          <p className="mt-3 text-gray-300">
            Have questions or ready to plan your dream Quinceañera? Send us a message!
          </p>

          <form className="mt-6 space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 bg-gray-800 rounded-lg border border-gray-600 focus:ring-[#FFC107] focus:border-[#FFC107]"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 bg-gray-800 rounded-lg border border-gray-600 focus:ring-[#FFC107] focus:border-[#FFC107]"
              required
            />
            <textarea
              placeholder="Your Message"
              rows="4"
              className="w-full p-3 bg-gray-800 rounded-lg border border-gray-600 focus:ring-[#FFC107] focus:border-[#FFC107]"
              required
            ></textarea>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-[#AE8625] to-[#D2AC47] py-3 text-center text-lg font-semibold rounded-lg hover:opacity-90 transition"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Map Section */}
        <div className="mt-8 w-full h-80 rounded-lg overflow-hidden flex justify-center">
          <iframe
            title="OIALQ Location"
            width="100%"
            height="100%"
            loading="lazy"
            className="rounded-sm"
            src="https://maps.google.com/maps?q=Los+Angeles,CA&z=13&output=embed"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}