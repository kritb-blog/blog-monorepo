'use client'

import { Tooltip, Typography } from '@kritb-blog/design-system'
import Image from 'next/image'
import Link from 'next/link'

export const Navbar = () => {
  return (
    <nav className="px-8 py-4 w-screen flex items-center gap-4 justify-between">
      <Typography size="lg" weight="semibold" className="flex gap-4 items-center">
        <Link className="flex" href="/">
          <Image className="bg-primary rounded-full" src="/ms-icon-70x70.png" alt="logo" width={48} height={48} />
        </Link>
      </Typography>
      <div className="flex gap-4">
        <Link className="flex" target="_blank" href="https://github.com/zestzero">
          <Tooltip
            trigger={
              <Image
                className="dark:bg-primary dark:rounded-sm dark:p-1"
                src="/images/github.svg"
                alt="github repository"
                width={28}
                height={28}
              />
            }
            content="Github profile"
          />
        </Link>
        <Link className="flex" target="_blank" href="https://www.linkedin.com/in/krit-bannachaisirisuk/">
          <Tooltip
            trigger={
              <Image
                className="dark:bg-primary dark:rounded-sm dark:p-1"
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
  )
}
