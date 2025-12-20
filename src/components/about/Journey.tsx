import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Calendar, Truck, Users, Briefcase } from 'lucide-react';
const stats = [{
  id: 1,
  label: 'Years Experience',
  value: 15,
  suffix: '+',
  icon: Calendar
}, {
  id: 2,
  label: 'Tyres Supplied',
  value: 500,
  suffix: 'k+',
  icon: Truck
}, {
  id: 3,
  label: 'Trade Partners',
  value: 250,
  suffix: '+',
  icon: Briefcase
}, {
  id: 4,
  label: 'Customers Served',
  value: 10,
  suffix: 'k+',
  icon: Users
}];
function AnimatedCounter({
  value,
  suffix
}: {
  value: number;
  suffix: string;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true
  });
  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const duration = 2000;
      const increment = end / (duration / 16);
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
      return () => clearInterval(timer);
    }
  }, [isInView, value]);
  return <span ref={ref}>
      {count}
      {suffix}
    </span>;
}
export function Journey() {
  return <section className="py-16 bg-white text-black border-y border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => <motion.div key={stat.id} initial={{
          opacity: 0,
          y: 50,
          scale: 0.8
        }} whileInView={{
          opacity: 1,
          y: 0,
          scale: 1
        }} viewport={{
          once: true,
          margin: '-100px'
        }} transition={{
          duration: 0.6,
          delay: index * 0.15,
          ease: [0.22, 1, 0.36, 1]
        }} className="flex flex-col items-center text-center group">
              <motion.div className="mb-4 p-4 rounded-full bg-gray-50 border-2 border-gray-200 group-hover:border-[#FDB913] transition-colors duration-300" whileHover={{
            scale: 1.1,
            rotate: 5
          }} transition={{
            type: 'spring',
            stiffness: 400,
            damping: 10
          }}>
                <stat.icon className="w-8 h-8 text-[#FDB913]" />
              </motion.div>
              <div className="text-3xl md:text-4xl font-bold text-black mb-2">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-sm md:text-base text-gray-600 font-medium uppercase tracking-wide">
                {stat.label}
              </div>
            </motion.div>)}
        </div>
      </div>
    </section>;
}