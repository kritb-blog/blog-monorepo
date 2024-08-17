import { PropsWithChildren } from 'react';
import {
  type TypographyVariantProps,
  typographyVariants,
} from './Typography.styles';

export type TypographyProps = TypographyVariantProps &
  PropsWithChildren &
  React.ParamHTMLAttributes<HTMLParagraphElement>;

const Typography = (props: TypographyProps) => {
  const { size, weight, className } = props;

  return (
    <p className={typographyVariants({ size, weight, className })}>
      {props.children}
    </p>
  );
};

export { Typography };
