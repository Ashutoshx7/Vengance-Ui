'use client';
import { ChevronsRight, MoveRight } from 'lucide-react';
import { Button } from '@/components/website/ui/button';
import React, { useEffect, useMemo, useState } from 'react';

function HeroSec() {
  const [blocks, setBlocks] = useState([]);

  const activeDivs = useMemo(
    () => ({
      0: new Set([4, 1]),
      2: new Set([3]),
      4: new Set([2, 5, 8]),
      5: new Set([4]),
      10: new Set([3]),
      12: new Set([7]),
      15: new Set([6]),
      14: new Set([5]),
      13: new Set([4]),
    }),
    []
  );

  useEffect(() => {
    const updateBlocks = () => {
      const { innerWidth, innerHeight } = window;
      const blockSize = innerWidth * 0.06; // Using 6vw for the block size
      const amountOfBlocks = Math.ceil(innerHeight / blockSize);

      const newBlocks = Array.from({ length: 17 }, (_, columnIndex) => (
        <div key={columnIndex} className='w-[6vw] h-full'>
          {Array.from({ length: amountOfBlocks }, (_, rowIndex) => (
            <div
              key={rowIndex}
              className={`h-[6vw] w-full border-[1px] dark:border-[rgba(255,255,255,0.015)] border-gray-50 ${
                // @ts-ignore
                activeDivs[columnIndex]?.has(rowIndex)
                  ? 'dark:bg-[rgba(255,255,255,0.03)] bg-gray-50'
                  : ''
              }`}
              style={{ height: `${blockSize}px` }}
            ></div>
          ))}
        </div>
      ));
      // @ts-ignore
      setBlocks(newBlocks);
    };

    updateBlocks();
    window.addEventListener('resize', updateBlocks);

    return () => window.removeEventListener('resize', updateBlocks);
  }, [activeDivs]);
  return (
    <>
      <section className='min-h-screen py-24 overflow-hidden  relative  '>
        <div className='absolute inset-0 top-0 left-0  h-screen w-full items-center px-5 py-24 dark:[background:radial-gradient(87.03%_87.03%_at_50.05%_12.97%,rgba(217,217,217,0)_40%,#010716_100%)] [background:radial-gradient(87.03%_87.03%_at_50.05%_12.97%,rgba(217,217,217,0)_40%,#ffffff_100%)]'></div>
        <article className='grid gap-4 py-20 relative z-10 sm:px-0 px-4'>
          <a
            href={'/components/blur-vignette'}
            className='inline-flex w-fit mx-auto items-center gap-1 rounded-full  bg-[#334cec] border-4  shadow-[#6175f8]  py-0.5 pl-0.5 pr-3 text-xs '
          >
            <div className='rounded-full bg-[#fcfdff] px-2 py-1 text-xs text-black '>
              Update
            </div>
            <p className='text-white sm:text-base text-xs inline-block'>
              ✨ Introducing
              <span className='px-1 font-semibold'>Blur Vignette</span>
            </p>

            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              fill='currentColor'
              aria-hidden='true'
              data-slot='icon'
              className='h-3 w-3 text-white'
            >
              <path
                fillRule='evenodd'
                d='M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z'
                clipRule='evenodd'
              ></path>
            </svg>
          </a>
          <h1 className='  xl:text-7xl md:text-6xl sm:text-5xl text-3xl text-center font-semibold leading-[110%]'>
            Design That Really <br />
            Need In{' '}
            <span className='bg-gradient-to-t sm:w-ful w-4/5 from-[#a2b6fa] to-[#334cec] bg-clip-text text-transparent'>
              Your Website
            </span>
          </h1>
          <p className='mx-auto lg:w-[500px] sm:w-[80%] text-center sm:text-lg text-sm'>
            10+ Free beautifull interactive react/nextjs component based on
            tailwindcss, framer-motion, etc
          </p>
          <div className='flex gap-2 justify-center items-center'>
            <a
              href='https://www.ui-layout.com/'
              className='flex items-center gap-2 w-fit  text-white bg-gradient-to-l from-[#6175f8]  to-[#334cec] border sm:px-4 px-2 rounded-sm py-2 '
            >
              Visit UILayout
              <MoveRight />
            </a>
            <a href='/get-started' className='sm:inline-block hidden'>
              <Button className=' rounded-full px-4'>
                Get Started
                <ChevronsRight />
              </Button>
            </a>
          </div>
        </article>

        <div className='flex h-screen overflow-hidden top-0 left-0  inset-0  -z-10 absolute'>
          {blocks}
        </div>
      </section>
    </>
  );
}

export default HeroSec;
