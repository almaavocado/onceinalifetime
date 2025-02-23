export default function ContactMe() {
  return (
    <div id="contact" className="bg-[#0F1B26] text-white py-16 px-6">
    
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Contact Form */}
        <div className="flex flex-col">
          <h2 className="text-3xl font-bold text-[#FFC107]">Get in Touch</h2>
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
