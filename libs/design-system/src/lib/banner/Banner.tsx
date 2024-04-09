import { PropsWithChildren } from 'react';
import { BannerVariantProps, bannerVariants } from './Banner.styles';

export type BannerProps = BannerVariantProps & PropsWithChildren;

const Banner = (props: BannerProps) => {
  const { children, position } = props;
  return <div className={bannerVariants({ position })}>{children}</div>;
};

export { Banner };
