import React from 'react';
import { motion } from 'framer-motion';

const AnimatedSVG = ({ children, targetLeft, targetTop }) => {
  return (
    <motion.div
      style={{
        position: 'absolute',
        left: targetLeft,
        top: targetTop,
      }}
      initial={{ 
        opacity: 0,
        scale: 0.5,
        x: (Math.random() + .2) * 200, 
        y: (Math.random() - .9) * 200  
      }}
      animate={{ 
        opacity: 1,
        scale: 1,
        x: 0,
        y: 0
      }}
      transition={{
        duration: 1.3,
        delay: .8,
        ease: [0.6, 0.05, 0.01, 0.9],
        scale: {
          type: "spring",
          damping: 10,
          stiffness: 100
        }
      }}
    >
      {children}
    </motion.div>
  );
};

export default function ContactPage() {
  return (
    <section className='relative h-[100vh] overflow-hidden'>
      <AnimatedSVG 
        targetLeft="53vw"  // 762/1440*100 
        targetTop=".2vh"  // 29/900*100
        className="purpleSVG z-50"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="144" height="144" viewBox="0 0 144 144" fill="none">
          <circle cx="72" cy="72" r="72" fill="url(#paint0_radial_147_483)"/>
          <defs>
            <radialGradient id="paint0_radial_147_483" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(144 34) rotate(150.944) scale(153.669 434.882)">
              <stop stopColor="#EA4949"/>
              <stop offset="1" stopColor="#0B64ED"/>
            </radialGradient>
          </defs>
        </svg>
      </AnimatedSVG>

      {/* Orange SVG - Converted (450,182) to vw/vh */}
      <AnimatedSVG
        targetLeft="15.25vw"  // 450/1440*100
        targetTop="-.9vh"    // 182/900*100
        className="orangeSVG z-40"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="144" height="144" viewBox="0 0 144 144" fill="none">
          <circle cx="72" cy="72" r="72" fill="url(#paint0_radial_30_104)"/>
          <defs>
            <radialGradient id="paint0_radial_30_104" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(36 34) rotate(55.1832) scale(133.986 161.71)">
              <stop stopColor="#FFF400"/>
              <stop offset="1" stopColor="#EA4949"/>
            </radialGradient>
          </defs>
        </svg>
      </AnimatedSVG>

      {/* Blue SVG - Converted (1258,211) to vw/vh */}
      <AnimatedSVG
        targetLeft="67.4vw"   // 1258/1440*100
        targetTop="23.4vh"    // 211/900*100
        className="blueSVG"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="144" height="144" viewBox="0 0 144 144" fill="none">
          <circle cx="72" cy="72" r="72" fill="url(#paint0_radial_30_74)"/>
          <defs>
            <radialGradient id="paint0_radial_30_74" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(72 72) rotate(90) scale(72)">
              <stop stopColor="#FFF400"/>
              <stop offset="1" stopColor="#9747FF"/>
            </radialGradient>
          </defs>
        </svg>
      </AnimatedSVG>

      {/* Green SVG - Converted (1182,734) to vw/vh */}
      <AnimatedSVG
        targetLeft="58.1vw"   // 1182/1440*100
        targetTop="71.6vh"    // 734/900*100
        className="greenSVG"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="144" height="145" viewBox="0 0 144 145" fill="none">
          <path d="M144 72.2482C144 112.013 111.765 144.248 72 144.248C32.2355 144.248 0 112.013 0 72.2482C0 32.4837 32.2355 0.248206 72 0.248206C111.765 0.248206 144 32.4837 144 72.2482Z" fill="url(#paint0_radial_30_77)"/>
          <defs>
            <radialGradient id="paint0_radial_30_77" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(121.5 162) rotate(-111.356) scale(155.153 712.629)">
              <stop stopColor="#FFF400"/>
              <stop offset="1" stopColor="#A02F7A"/>
            </radialGradient>
          </defs>
        </svg>
      </AnimatedSVG>
    </section>
  );
}