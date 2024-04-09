import { Banner, Typography } from '@kritb-blog/design-system';
import Image from 'next/image';

export default function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.tailwind file.
   */
  return (
    <div className="wrapper">
      <Typography size="normal">Hello, World!</Typography>
      <Banner>
        <a
          className="flex gap-2"
          href="https://github.com/kritb-blog/blog-monorepo"
        >
          <Image
            src="/images/github.svg"
            alt="github repository"
            width={24}
            height={24}
          />
          blog-monorepo
        </a>
      </Banner>
    </div>
  );
}
