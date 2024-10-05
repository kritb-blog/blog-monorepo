'use client';

import Link from 'next/link';
import { Tooltip, Typography } from '@kritb-blog/design-system';
import React from 'react';
import Image from 'next/image';

export const Navbar = () => {
  return (
    <nav className="px-8 py-4 w-screen flex items-center gap-4 justify-between shadow-md">
      <Typography size="xl" weight="semibold">
        <Link className="flex" href="/">
          <Image
            className="bg-primary rounded-full"
            src="/ms-icon-70x70.png"
            alt="logo"
            width={48}
            height={48}
          />
        </Link>
      </Typography>
      <div className="flex gap-4">
        <Link
          className="flex"
          target="_blank"
          href="https://github.com/zestzero"
        >
          <Tooltip
            trigger={
              <Image
                src="/images/github.svg"
                alt="github repository"
                width={28}
                height={28}
              />
            }
            content="Github profile"
          />
        </Link>
        <Link
          className="flex"
          target="_blank"
          href="https://www.linkedin.com/in/krit-bannachaisirisuk/"
        >
          <Tooltip
            trigger={
              <Image
                src="/images/linkedin.svg"
                alt="linkedin profile"
                width={28}
                height={28}
              />
            }
            content="LinkedIn profile"
          />
        </Link>
      </div>
    </nav>
  );
};
