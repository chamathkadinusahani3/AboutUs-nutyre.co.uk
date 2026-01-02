import { CheckCircle2 } from 'lucide-react';
import tyreMechanic from "../../assets/whychooseus.jpeg";

const benefits = [
  'Trusted UK Supplier',
  'Competitive Wholesale Pricing',
  'Fast & Reliable Mobile Services',
  'Quality Tyres from Global Brands',
  'Customer-First Approach',
  'Comprehensive Warranty Support'
];

export function WhyChoose() {
  return (
    <section className="py-20 bg-yellow-50 relative overflow-hidden">
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#FDB913_1px,transparent_1px)] [background-size:20px_20px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-white rounded-2xl p-8 md:p-16 border border-[#ffffff]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold text-black mb-6">
                Why Choose <span className="text-yellow-500">Nutyre?</span>
              </h2>
              <p className="text-black text-lg mb-8">
                We combine industry expertise with a commitment to service
                excellence. Whether you're a wholesale partner or a retail
                customer, we deliver quality you can trust.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="w-6 h-6 text-[#FDB913] flex-shrink-0" />
                    <span className="text-black font-medium">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative h-full min-h-[300px] rounded-xl overflow-hidden shadow-2xl border-2 border-[#FDB913]/20">
              <img
                src={tyreMechanic}
                alt="Mechanic working on tyre"
                className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}