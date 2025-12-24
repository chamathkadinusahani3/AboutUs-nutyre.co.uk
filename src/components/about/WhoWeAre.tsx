import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export function WhoWeAre() {
  return (
    <section className="py-20 bg-yellow-400 text-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div
              className="inline-block px-4 py-1 mb-6 -ml-2 text-[#000000] text-6xl font-bold uppercase tracking-wider"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Who We Are
            </motion.div>

            <motion.h2
              className="text-3xl md:text-5xl font-bold mb-6 ml-5 leading-tight text-black"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              UK's Premier Tyre <br />
              <span className="text-[#000000]">Mobile & Workshop Tyre Service</span>
            </motion.h2>

            <motion.div
              className="space-y-6 text-black-300 ml-5 text-lg leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <p>
                Founded in 2023, <strong className="text-black">Nutyre UK Ltd</strong> is dedicated to keeping drivers safe on every journey. Our professional mobile and workshop tyre fitting services across the UK provide fast, convenient, and reliable solutions for individual motorists, fleets, and businesses, ensuring peace of mind on the road.
              </p>
              <p>
                Built on a foundation of trust, quality, and safety, we are also a trusted tyre importer, distributor, and wholesaler, supplying premium tyres to garages, retailers, and automotive professionals nationwide.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
