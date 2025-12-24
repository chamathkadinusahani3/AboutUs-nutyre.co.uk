import React from "react";
import { motion } from "framer-motion";
import { Ship, Package, Truck, ShoppingBag, Wrench, Gauge } from "lucide-react";

import importBg from "../../assets/import.jpeg";
import wholesaleBg from "../../assets/wholesale.jpeg";
import mobileBg from "../../assets/mobile1.jpeg";
import retailBg from "../../assets/retail.jpeg";
import serviceBg from "../../assets/service.jpeg";
import performanceBg from "../../assets/performance.jpeg";

const services = [
  
  {
    icon: Truck,
    title: "Mobile Fitting",
    description: "Professional tyre fitting at your home or workplace.",
    bgImage: mobileBg,
  },
  {
    icon: ShoppingBag,
    title: "Retail Sales",
    description: "Direct-to-consumer sales with competitive pricing.",
    bgImage: retailBg,
  },
  {
    icon: Wrench,
    title: "Vehicle Servicing",
    description: "Comprehensive maintenance and repair services.",
    bgImage: serviceBg,
  },
  {
    icon: Gauge,
    title: "Performance Tyres",
    description: "Specialist tyres for high-performance vehicles.",
    bgImage: performanceBg,
  },
  {
    icon: Ship,
    title: "Tyre Import",
    description: "Sourcing premium tyres directly from global manufacturers.",
    bgImage: importBg,
  },
  {
    icon: Package,
    title: "Wholesale Supply",
    description: "Bulk distribution to garages and retailers across the UK.",
    bgImage: wholesaleBg,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export function ServicesGrid() {
  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-black">
            What We Do
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Comprehensive tyre solutions for businesses and individuals.
          </p>
        </div>

        {/* Services Grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {services.map((service, index) => (
            <div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -8 }}
              className="group relative p-8 rounded-xl overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-[#FDB913]/20 transition-shadow duration-300 text-white"
              style={{
                backgroundImage: `url(${service.bgImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/50 pointer-events-none" />

              {/* Icon */}
              <div className="relative mb-6 inline-flex p-4 bg-black/50 rounded-lg border border-[#333] group-hover:bg-[#FDB913]/80 group-hover:border-[#FDB913] transition-all duration-300">
                <service.icon className="w-8 h-8 text-[#FDB913] group-hover:text-black transition-colors duration-300" />
              </div>

              {/* Content */}
              <h3 className="relative text-xl font-bold mb-3 group-hover:text-[#FDB913] transition-colors">
                {service.title}
              </h3>
              <p className="relative text-gray-200 group-hover:text-gray-100 transition-colors">
                {service.description}
              </p>

              {/* Hover Accent Line */}
              <div className="absolute top-0 left-0 w-full h-1 bg-[#FDB913] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
