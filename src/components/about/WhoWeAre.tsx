export function WhoWeAre() {
  return (
    <section className="py-20 bg-yellow-400 text-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div>
            <div className="inline-block px-4 py-1 mb-6 text-[#000000] text-6xl font-bold uppercase tracking-wider">
              Who We Are
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 ml-5 leading-tight text-black">
              UK's Premier Tyre <br />
              <span className="text-[#000000]">Mobile & Workshop Tyre Service</span>
            </h2>
            <div className="space-y-6 text-black-300 ml-5 text-lg leading-relaxed">
              <p>
                Founded in 2023, <strong className="text-black">Nutyre UK Ltd</strong> is dedicated to keeping drivers safe on every journey. Our professional mobile and workshop tyre fitting services across the UK provide fast, convenient, and reliable solutions for individual motorists, fleets, and businesses, ensuring peace of mind on the road.
              </p>
              <p>
                Built on a foundation of trust, quality, and safety, we are also a trusted tyre importer, distributor, and wholesaler, supplying premium tyres to garages, retailers, and automotive professionals nationwide.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}