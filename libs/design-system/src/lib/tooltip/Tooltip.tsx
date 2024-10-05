import React from 'react';
import {
  Tooltip as TooltipRoot,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from './TooltipRoot';

export type TooltipProps = {
  trigger: React.ReactNode;
  content: React.ReactNode;
};

export const Tooltip = (props: TooltipProps) => {
  const { trigger, content } = props;
  return (
    <TooltipProvider>
      <TooltipRoot>
        <TooltipTrigger>{trigger}</TooltipTrigger>
        <TooltipContent>{content}</TooltipContent>
      </TooltipRoot>
    </TooltipProvider>
  );
};
