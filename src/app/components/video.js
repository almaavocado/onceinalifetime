export default function VideoPage() {
  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center p-4 text-white">
      {/* Title */}
      <h1 className="text-xl md:text-2xl font-semibold mb-8 text-center">
        Celebrate Your Quinceañera with Stunning Choreography
      </h1>

      {/* Video Container */}
      <div className="w-full max-w-4xl">
        <video 
          className="w-full h-auto max-h-[80vh] rounded-lg shadow-lg aspect-video" 
          controls
        >
          <source src="assets/OIALQ_video2.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      
    {/* Subtle Divider to Improve Section Break */}
    <div className="border-t border-white/10 my-16 mx-auto w-3/4"></div>
    </div>
  );
}
