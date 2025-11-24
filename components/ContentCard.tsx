import React from 'react';
import clsx from 'clsx';

interface ContentCardProps extends React.HTMLAttributes<HTMLDivElement> {
  padding?: 'md' | 'lg';
}

export function ContentCard({ padding = 'lg', className, children, ...props }: ContentCardProps) {
  return (
    <div
      className={clsx(
        'bg-white border border-border/60 rounded-2xl shadow-[0_12px_40px_rgba(17,24,39,0.06)]',
        padding === 'lg' ? 'p-8 lg:p-10' : 'p-6 lg:p-7',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
