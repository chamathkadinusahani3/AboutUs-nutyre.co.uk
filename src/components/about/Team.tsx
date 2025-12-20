import React, { Children } from 'react';
import { motion } from 'framer-motion';
import { Users, Wrench, Truck, Headset } from 'lucide-react';
const teams = [{
  role: 'member',
  icon: Users,
  desc: 'Director'
}, {
  role: 'member',
  icon: Users,
 
}, {
  role: 'member',
  icon: Users,
 
}, {
  role: 'member',
  icon: Users,
  
}];
const containerVariants = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
};
const cardVariants = {
  hidden: {
    opacity: 0,
    y: 30,
    scale: 0.8
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};
export function Team() {
  return <section className="py-20 bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div className="text-center mb-16" initial={{
        opacity: 0,
        y: 30
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.6
      }}>
          <h2 className="text-3xl md:text-5xl font-bold text-black mb-4">
            Our Team
          </h2>
          <p className="text-gray-600">The experts driving Nutyre forward.</p>
        </motion.div>

        <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{
        once: true,
        margin: '-50px'
      }}>
          {teams.map((item, index) => <motion.div key={index} variants={cardVariants} whileHover={{
          y: -5,
          transition: {
            duration: 0.3
          }
        }} className="bg-white p-8 rounded-xl text-center border-2 border-gray-200 hover:border-[#FDB913] transition-colors group">
              <motion.div className="mx-auto mb-6 w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center" whileHover={{
            scale: 1.1,
            rotate: 360,
            transition: {
              duration: 0.6
            }
          }}>
                <item.icon className="w-10 h-10 text-[#FDB913]" />
              </motion.div>
              <h3 className="text-lg font-bold text-black mb-2">{item.role}</h3>
              <p className="text-sm text-gray-600">{item.desc}</p>
            </motion.div>)}
        </motion.div>
      </div>
    </section>;
}