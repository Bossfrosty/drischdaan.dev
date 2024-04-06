'use client';

import { AnimatePresence, motion, useScroll } from 'framer-motion';
import { useEffect, useRef } from 'react';

export function HomeTitle() {
  const text: string = 'drischdaan';
  const textCharArray: string[] = text.split('');
  const middleIndex: number = Math.floor(textCharArray.length / 2);
  const ref = useRef(null);
  const { scrollY } = useScroll();
  useEffect(() => {
    console.log(scrollY.get());
  }, [scrollY]);
  return (
    <div ref={ref} className='flex flex-col items-center justify-center'>
      <h1 className='flex flex-row items-center justify-center overflow-hidden text-5xl text-primary-500 md:text-7xl'>
        {scrollY.get() === 0 && (
          <AnimatePresence>
            {textCharArray.map((char, index) => (
              <motion.p
                key={`${char}-${index}`}
                transition={{
                  duration: 0.6,
                  delay:
                    index < middleIndex
                      ? index * 0.1
                      : (textCharArray.length - index) * 0.1,
                  ease: 'anticipate',
                }}
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 100, opacity: 0 }}
                viewport={{ once: false }}
              >
                {char}
              </motion.p>
            ))}
          </AnimatePresence>
        )}
      </h1>
      <h2 className='flex items-center justify-center overflow-hidden text-base font-bold uppercase tracking-widest md:text-xl'>
        {scrollY.get() === 0 && (
          <AnimatePresence>
            <motion.p
              transition={{ duration: 0.6, delay: 0.5 }}
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 100, opacity: 0 }}
              viewport={{ once: false }}
            >
              Junior Developer
            </motion.p>
          </AnimatePresence>
        )}
      </h2>
    </div>
  );
}
