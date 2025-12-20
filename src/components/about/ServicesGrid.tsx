import React, { Children } from 'react';
import { motion } from 'framer-motion';
import { Ship, Package, Truck, ShoppingBag, Wrench, Gauge } from 'lucide-react';
const services = [{
  icon: Ship,
  title: 'Tyre Import',
  description: 'Sourcing premium tyres directly from global manufacturers.'
}, {
  icon: Package,
  title: 'Wholesale Supply',
  description: 'Bulk distribution to garages and retailers across the UK.'
}, {
  icon: Truck,
  title: 'Mobile Fitting',
  description: 'Professional tyre fitting at your home or workplace.'
}, {
  icon: ShoppingBag,
  title: 'Retail Sales',
  description: 'Direct-to-consumer sales with competitive pricing.'
}, {
  icon: Wrench,
  title: 'Vehicle Servicing',
  description: 'Comprehensive maintenance and repair services.'
}, {
  icon: Gauge,
  title: 'Performance Tyres',
  description: 'Specialist tyres for high-performance vehicles.'
}];
const containerVariants = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};
const cardVariants = {
  hidden: {
    opacity: 0,
    y: 50,
    scale: 0.9
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
export function ServicesGrid() {
  return <section className="py-20 bg-gray-100 text-white">
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
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-black">
            What We Do
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Comprehensive tyre solutions for businesses and individuals.
          </p>
        </motion.div>

        <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{
        once: true,
        margin: '-100px'
      }}>
          {services.map((service, index) => <motion.div key={index} variants={cardVariants} whileHover={{
          y: -8,
          transition: {
            duration: 0.3,
            ease: 'easeOut'
          }
        }} className="group relative bg-[#1a1a1a] p-8 rounded-xl overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-[#FDB913]/20 transition-shadow duration-300">
              <div className="absolute top-0 left-0 w-full h-1 bg-[#FDB913] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

              <motion.div className="mb-6 inline-block p-4 bg-black rounded-lg group-hover:bg-[#FDB913] transition-colors duration-300 border border-[#333] group-hover:border-[#FDB913]" whileHover={{
            rotate: [0, -10, 10, -10, 0]
          }} transition={{
            duration: 0.5
          }}>
                <service.icon className="w-8 h-8 text-[#FDB913] group-hover:text-black transition-colors duration-300" />
              </motion.div>

              <h3 className="text-xl font-bold mb-3 text-white group-hover:text-[#FDB913] transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                {service.description}
              </p>
            </motion.div>)}
        </motion.div>
      </div>
    </section>;
}