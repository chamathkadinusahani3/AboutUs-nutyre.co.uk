import heroImage from "../../assets/about-hero.jpeg";

export function Hero() {
  return (
    <section className="relative w-full bg-white overflow-hidden">
      <div className="relative z-10 flex flex-col items-center justify-center min-h-[600px] px-4">
        {/* Image Wrapper */}
        <div className="relative w-full max-w-[1800px] h-[500px] rounded-xl overflow-hidden shadow-lg">
          {/* Hero Image */}
          <img
            src={heroImage}
            alt="About Us"
            className="w-full h-full object-cover"
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/50" />

          {/* Text On Image */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
            <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight">
              ABOUT&nbsp;US
            </h1>

            <h3 className="mt-4 text-white text-xl md:text-2xl max-w-xl">
              "Committed to quality, customer satisfaction, and innovation in every service we offer."
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}