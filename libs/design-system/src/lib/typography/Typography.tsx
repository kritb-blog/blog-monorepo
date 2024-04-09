import { PropsWithChildren } from 'react';
import {
  TypographyVariantProps,
  typographyVariants,
} from './Typography.styles';

export type TypographyProps = TypographyVariantProps &
  PropsWithChildren &
  React.ParamHTMLAttributes<HTMLParagraphElement>;

const Typography = (props: TypographyProps) => {
  const { size, className } = props;

  return (
    <p className={typographyVariants({ size, className })}>
      {props.children}
    </p>
  );
};

export { Typography };
