import { cva, type VariantProps } from 'class-variance-authority';

export type BannerVariantProps = VariantProps<typeof bannerVariants>;
export const bannerVariants = cva(
  'flex w-screen justify-center p-4 bg-accent',
  {
    variants: {
      position: { bottom: 'fixed bottom-0 border border-t-1' },
    },
    defaultVariants: {
      position: 'bottom',
    },
  }
);
