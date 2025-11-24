import React from 'react';
import clsx from 'clsx';

interface ImagePlaceholderProps extends React.HTMLAttributes<HTMLDivElement> {
  accent?: 'warm' | 'cool';
  aspectClass?: string;
  label?: string;
}

export function ImagePlaceholder({
  accent = 'warm',
  aspectClass = 'aspect-[4/3]',
  label,
  className,
  children,
  ...props
}: ImagePlaceholderProps) {
  const gradient =
    accent === 'cool'
      ? 'bg-gradient-to-br from-[#e5edf5] via-[#cddae8] to-[#b8c7d9]'
      : 'bg-gradient-to-br from-[#f3e6dc] via-[#e9d8c9] to-[#d8c2b1]';

  return (
    <div
      className={clsx(
        'relative overflow-hidden rounded-2xl border border-border/60 shadow-[0_10px_32px_rgba(17,24,39,0.08)]',
        aspectClass,
        gradient,
        className
      )}
      {...props}
    >
      <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.4),transparent_35%),radial-gradient(circle_at_80%_0%,rgba(255,255,255,0.35),transparent_30%),radial-gradient(circle_at_50%_80%,rgba(255,255,255,0.25),transparent_35%)]" />
      <div className="absolute inset-0 flex items-center justify-center text-center px-6">
        <span className="text-sm text-text-secondary/70 font-medium">
          {label || children || 'Image coming soon'}
        </span>
      </div>
    </div>
  );
}
