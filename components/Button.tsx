import React from 'react';
import clsx from 'clsx';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'link';
  children: React.ReactNode;
  href?: string;
}

export function Button({
  variant = 'primary',
  children,
  className,
  href,
  ...props
}: ButtonProps) {
  const baseClasses = clsx(
    'inline-block text-center transition-all duration-300 cursor-pointer',
    {
      'btn-primary': variant === 'primary',
      'btn-secondary': variant === 'secondary',
      'btn-link': variant === 'link',
    },
    className
  );

  if (href) {
    return (
      <a href={href} className={baseClasses}>
        {children}
      </a>
    );
  }

  return (
    <button className={baseClasses} {...props}>
      {children}
    </button>
  );
}
