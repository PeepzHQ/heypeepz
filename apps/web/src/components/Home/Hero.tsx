import type { FC } from 'react';

import { APP_NAME } from '@hey/data/constants';
import Link from 'next/link';

const Hero: FC = () => {
  return (
    <div className="divider py-12">
      <div className="mx-auto flex w-full max-w-screen-xl items-center px-5 py-8 sm:py-12">
        <img
          alt="Hey Logo"
          className="mr-5 size-24 sm:mr-8 sm:size-36"
          src="/logo.png"
        />
        <div className="flex-1 space-y-1 tracking-tight sm:max-w-lg">
          <div className="text-2xl font-extrabold sm:text-5xl">
            Welcome to {APP_NAME},
          </div>
          <div className="ld-text-gray-500 text-xl font-bold sm:text-3xl">
            the forefront of{' '}
            <Link
              href="https://plisio.net/blog/decentralized-social-media-deso-new-horizons"
              rel="noopener noreferrer"
              target="_blank"
            >
              DeSo
            </Link>{' '}
            innovation on Lens Protocol
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
