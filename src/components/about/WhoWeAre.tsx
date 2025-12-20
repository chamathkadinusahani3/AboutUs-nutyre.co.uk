import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
export function WhoWeAre() {
  return <section className="py-20 bg-yellow-100 text-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div initial={{
          opacity: 0,
          x: -80
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.8,
          ease: [0.22, 1, 0.36, 1]
        }}>
            <motion.div className="inline-block px-4 py-1 mb-6 border-2 border-[#FDB913] rounded-full text-[#FDB913] text-sm font-bold uppercase tracking-wider" initial={{
            scale: 0
          }} whileInView={{
            scale: 1
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.5,
            delay: 0.2
          }}>
              Who We Are
            </motion.div>
            <motion.h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight text-black" initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6,
            delay: 0.3
          }}>
              UK's Premier Tyre <br />
              <span className="text-[#000000]">Importer & Distributor</span>
            </motion.h2>
            <motion.div className="space-y-6 text-black-300 text-lg leading-relaxed" initial={{
            opacity: 0
          }} whileInView={{
            opacity: 1
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6,
            delay: 0.5
          }}>
              <p>
                <strong className="text-black">Nutyre UK Ltd</strong> is a
                UK-based tyre importer, distributor, wholesaler, and automotive
                service provider. We supply quality tyres to retailers, garages,
                fleets, and individual motorists.
              </p>
              <p>
                Beyond distribution, we pride ourselves on offering
                comprehensive{' '}
                <span className="text-[#000000] font-semibold">
                  mobile and workshop tyre fitting services
                </span>{' '}
                across the UK, ensuring that our customers stay safe on the road
                with minimal downtime.
              </p>
            </motion.div>

            <motion.div className="mt-8" initial={{
            opacity: 0,
            x: -20
          }} whileInView={{
            opacity: 1,
            x: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6,
            delay: 0.7
          }}>
              
            </motion.div>
          </motion.div>

        

          
        </div>
      </div>
    </section>;
}