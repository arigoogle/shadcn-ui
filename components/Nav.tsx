import Image from 'next/image';
import React from 'react';
import { ModeToggle } from './ui/toggle-mode';

const Nav = () => {
  return (
      <header>
        <nav>
          <ul className='flex items-center justify-between'>
            <li>
              <a
                href='#'
                className='pointer-events-none flex place-items-center gap-2 p-8'
              >
                <Image
                  src='/vercel.svg'
                  alt='Vercel Logo'
                  className='dark:invert'
                  width={100}
                  height={24}
                  priority
                />
              </a>
            </li>
            <li>
                <ModeToggle/>
            </li>
          </ul>
        </nav>
      </header>
  );
};

export default Nav;
