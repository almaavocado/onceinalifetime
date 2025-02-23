export default function VideoPage() {
  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center p-6 text-white">
      {/* Title Section */}
      <h1 className="text-xl md:text-2xl font-bold mb-4 text-center">
        Celebrate Your Quinceañera with Stunning Choreography
      </h1>
      <p className="text-sm md:text-lg italic text-gray-300 text-center max-w-2xl">
        Make your big day unforgettable with breathtaking dances tailored just for you.
      </p>

      {/* Video Container */}
      <div className="w-full max-w-4xl mt-8">
        <video 
          className="w-full h-auto max-h-[80vh] rounded-lg shadow-lg aspect-video border-2 border-white/10" 
          controls
        >
          <source src="assets/OIALQ_video2.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Call-to-Action */}
      <button className="mt-6 px-6 py-3 rounded-md bg-gradient-to-r from-[#AE8625] to-[#D2AC47] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gradient-to-r hover:from-[#4C0F30] hover:to-[#7F1D2A]">
        Book a Free Consultation
      </button>



      {/* Testimonial or Divider */}
      <div className="border-t border-white/10 my-12 mx-auto w-3/4"></div>
      <p className="text-center text-gray-400 italic max-w-lg">
        "The choreography made my Quinceañera magical! I felt confident and beautiful."
      </p>
    </div>
  );
}
