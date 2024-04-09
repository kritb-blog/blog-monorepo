import { cva, type VariantProps } from "class-variance-authority";

export type TypographyVariantProps = VariantProps<typeof typographyVariants>;
export const typographyVariants = cva("span", {
  variants: {
    size: { normal: "font-normal" }
  },
  defaultVariants: {
    size: "normal"
  },
});
