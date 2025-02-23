const Portfolio = () => (
    <section className="py-16 px-6">
      <h2 className="text-3xl font-bold text-center">Our Portfolio</h2>
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Example image grid, replace with real portfolio images */}
        <div className="relative overflow-hidden">
          <video src="./assets/aboutVideo.mp4" alt="Quinceañera Event" width={500} height={500} className="w-full h-full object-cover" />
        </div>

  
        <div className="relative overflow-hidden">
          <video className="absolute inset-0 w-full h-full object-cover" autoPlay loop muted>
            <source src="assets/aboutVideo.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="relative overflow-hidden">
          <img src="https://tailwindui.com/plus/img/ecommerce-images/product-quick-preview-02-detail.jpg" alt="Family Celebration" width={500} height={500} className="w-full h-full object-cover" />
        </div>
      </div>
      <p className="mt-6 text-center text-lg">Discover more about our past events and hear what families have to say!</p>
    </section>
  );
  
  export default Portfolio