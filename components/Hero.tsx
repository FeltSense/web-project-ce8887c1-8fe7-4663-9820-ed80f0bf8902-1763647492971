const Hero = () => {
  return (
    <section 
      className="relative h-[70vh] md:h-[80vh] bg-cover bg-center flex items-center justify-center text-center"
      style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <div className="relative z-10 container mx-auto px-4">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-4 drop-shadow-lg">
          Elevate Your Style
        </h1>
        <p className="text-lg md:text-xl text-white max-w-2xl mx-auto mb-8 opacity-90 drop-shadow-md">
          Discover the latest trends and timeless classics that define elegance and sophistication.
        </p>
        <button className="bg-white text-gray-900 font-bold py-3 px-8 rounded-full shadow-lg hover:bg-gray-100 transition duration-300 transform hover:scale-105">
          Shop New Arrivals
        </button>
      </div>
    </section>
  );
};

export default Hero;