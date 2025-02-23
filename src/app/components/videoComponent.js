export default function VideoHero() {
    return (
      <div id="about" className="relative h-[600px] w-full">
        {/* Video */}
        <video className="absolute inset-0 w-full h-full object-cover blur-sm" autoPlay loop muted>
          <source src="assets/aboutVideo.mp4" type="video/mp4" />
        </video>

  
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/70 flex flex-col items-center justify-center text-white text-center p-6">
          <p className="text-base font-semibold text-yellow-600">About Us</p>
          <h1 className="mt-2 text-2xl font-bold tracking-tight text-gray-200 sm:text-4xl drop-shadow-lg">
            Your Creative Partners
          </h1>
          <p className="mt-6 text-lg leading-7 sm:text-xl max-w-2xl mx-auto px-4 py-2 rounded-md drop-shadow-md">
            (OIALQ) provides families with beautiful choreographies and event coordinating for their once-in-a-lifetime celebration. Working from beginning to end to create a magical experience and memories. All while empowering one Quinceañera at a time with dance, confidence, self-love, and teamwork helping her celebrate becoming a young, strong woman.
          </p>
        </div>
      </div>
    );
  }
  