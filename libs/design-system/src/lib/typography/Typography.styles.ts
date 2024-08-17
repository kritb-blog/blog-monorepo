import { cva, type VariantProps } from 'class-variance-authority';

export type TypographyVariantProps = VariantProps<typeof typographyVariants>;
export const typographyVariants = cva('span', {
  variants: {
    size: { sm: 'text-sm', md: 'text-md', lg: 'text-lg', xl: 'text-xl' },
    weight: { normal: 'font-normal', semibold: 'font-semibold' },
  },
  defaultVariants: {
    size: 'md',
    weight: 'normal',
  },
});
