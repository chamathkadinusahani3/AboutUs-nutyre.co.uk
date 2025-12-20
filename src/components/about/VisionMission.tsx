import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye } from 'lucide-react';
export function VisionMission() {
  return <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Vision Card */}
          <motion.div initial={{
          opacity: 0,
          x: -50,
          rotateY: -15
        }} whileInView={{
          opacity: 1,
          x: 0,
          rotateY: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.7,
          ease: [0.22, 1, 0.36, 1]
        }} whileHover={{
          scale: 1.02,
          transition: {
            duration: 0.3
          }
        }} className="bg-white p-8 md:p-12 rounded-2xl border-l-4 border-[#FDB913] hover:shadow-xl transition-shadow">
            <div className="flex items-center gap-4 mb-6">
              <motion.div className="p-3 bg-gray-50 rounded-lg" whileHover={{
              rotate: 360
            }} transition={{
              duration: 0.6
            }}>
                <Eye className="w-8 h-8 text-[#FDB913]" />
              </motion.div>
              <h3 className="text-2xl font-bold text-black">Our Vision</h3>
            </div>
            <p className="text-gray-700 text-lg leading-relaxed">
              To become a trusted leader in tyre import, wholesale distribution,
              and automotive services across the UK, setting new standards for
              reliability and innovation in the industry.
            </p>
          </motion.div>

          {/* Mission Card */}
          <motion.div initial={{
          opacity: 0,
          x: 50,
          rotateY: 15
        }} whileInView={{
          opacity: 1,
          x: 0,
          rotateY: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.7,
          ease: [0.22, 1, 0.36, 1],
          delay: 0.2
        }} whileHover={{
          scale: 1.02,
          transition: {
            duration: 0.3
          }
        }} className="bg-white p-8 md:p-12 rounded-2xl border-l-4 border-[#FDB913] hover:shadow-xl transition-shadow">
            <div className="flex items-center gap-4 mb-6">
              <motion.div className="p-3 bg-gray-50 rounded-lg" whileHover={{
              rotate: 360
            }} transition={{
              duration: 0.6
            }}>
                <Target className="w-8 h-8 text-[#FDB913]" />
              </motion.div>
              <h3 className="text-2xl font-bold text-black">Our Mission</h3>
            </div>
            <p className="text-gray-700 text-lg leading-relaxed">
              To import and distribute high-quality tyres, support wholesale and
              retail partners, and deliver professional tyre fitting services
              with reliability, transparency, and an unwavering customer focus.
            </p>
          </motion.div>
        </div>
      </div>
    </section>;
}