import { Banner, Typography } from '@kritb-blog/design-system';
import Image from 'next/image';
import { NavigationMenuDemo } from './components/Navbar';

export default function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.tailwind file.
   */
  return (
    <div>
      <NavigationMenuDemo />

      <div className="p-4">
        <Typography size="xl" weight="semibold">
          Krit Bannachaisirisuk
        </Typography>
      </div>
      <Banner className="gap-4">
        <a target="_blank" href="https://github.com/zestzero">
          <Image
            src="/images/github.svg"
            alt="github repository"
            width={28}
            height={28}
          />
        </a>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/krit-bannachaisirisuk/"
        >
          <Image
            src="/images/linkedin.svg"
            alt="linkedin profile"
            width={28}
            height={28}
          />
        </a>
      </Banner>
    </div>
  );
}
