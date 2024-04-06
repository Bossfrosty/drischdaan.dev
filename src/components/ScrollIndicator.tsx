'use client';

import {
  motion,
  useAnimationControls,
  useMotionValueEvent,
  useScroll,
} from 'framer-motion';
import { useEffect } from 'react';

export function ScrollIndicator() {
  const { scrollY } = useScroll();
  const controls = useAnimationControls();
  useMotionValueEvent(scrollY, 'change', (value: number) => {
    if (value === 0) controls.start('visible');
    else controls.start('hidden');
  });
  useEffect(() => {
    controls.start('visible', { duration: 0.6, delay: 2 });
  }, [controls]);
  return (
    <div className='pointer-events-none fixed bottom-0 left-0 mb-5 flex w-full items-center justify-center'>
      <motion.p
        animate={controls}
        initial='hidden'
        variants={{
          hidden: {
            y: 10,
            opacity: 0,
            transition: { duration: 0.6, delay: 0 },
          },
          visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.6, delay: 0.4 },
          },
        }}
        className='text-xs text-zinc-400'
      >
        Scroll down to see more
      </motion.p>
    </div>
  );
}
