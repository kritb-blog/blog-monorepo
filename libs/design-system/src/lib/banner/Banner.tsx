import { PropsWithChildren } from 'react';
import { bannerVariants, type BannerVariantProps } from './Banner.styles';
import { type WithClassName } from '../types';

export type BannerProps = PropsWithChildren<BannerVariantProps> & WithClassName;

const Banner = ({ children, position, className }: BannerProps) => {
  return <div className={bannerVariants({ position, className })}>{children}</div>;
};

export { Banner };
