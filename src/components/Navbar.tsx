'use client';

import {
  motion,
  useAnimationControls,
  useMotionValueEvent,
  useScroll,
} from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';

export function Navbar() {
  const { scrollY } = useScroll();
  const controls = useAnimationControls();
  const [hasScrollProgress, setHasScrollProgress] = useState(false);
  useMotionValueEvent(scrollY, 'change', (value: number) => {
    if (value === 0) {
      setHasScrollProgress(false);
      controls.start('hidden');
    } else {
      setHasScrollProgress(true);
      controls.start('visible');
    }
  });
  return (
    <motion.nav
      initial='hidden'
      animate={controls}
      variants={{
        hidden: {
          y: -10,
          opacity: 0,
          transition: { duration: 0.6, delay: 0, ease: 'easeInOut' },
        },
        visible: {
          y: 0,
          opacity: 1,
          transition: { duration: 0.6, delay: 0, ease: 'easeInOut' },
        },
      }}
      className={
        'fixed left-0 right-0 top-0 z-50 w-full border-b border-neutral-900 backdrop-blur backdrop-saturate-150 ' +
        (hasScrollProgress ? 'pointer-events-auto' : 'pointer-events-none')
      }
    >
      <div className='content-container flex items-center justify-between p-4'>
        <div className='text-xl text-white'>drischdaan</div>
        <div className='flex space-x-4 text-sm'>
          <Link href='#landing' className='text-zinc-400'>
            About
          </Link>
          <Link href='#about' className='text-zinc-400'>
            Projects
          </Link>
          <Link href='#contact' className='text-zinc-400'>
            Contact
          </Link>
        </div>
      </div>
    </motion.nav>
  );
}
