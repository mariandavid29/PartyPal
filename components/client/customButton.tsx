'use client';

// SHADCN
import { Button, ButtonProps } from '../ui/button';

//REACT
import { ReactNode } from 'react';

interface ICustomButton extends ButtonProps {
  children: ReactNode;
  onClickAction(): Promise<void>;
}

export default function CustomButton({
  children,
  onClickAction,
  variant = 'default',
  size = 'default',
  className,
}: ICustomButton) {
  return (
    <Button
      variant={variant}
      size={size}
      onClick={onClickAction}
      className={className}
    >
      {children}
    </Button>
  );
}
