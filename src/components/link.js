import * as React from 'react';
import clsx from 'clsx';
import NextLink from 'next/link';

export const Link = ({ children, href, openNewTab, className, ...props }) => {
  const isNewTab =
    openNewTab !== undefined ? openNewTab : href && !href.startsWith('/') && !href.startsWith('#');

  if (!isNewTab) {
    return (
      <NextLink href={href}>
        <a {...props} className={className}>
          {children}
        </a>
      </NextLink>
    );
  }

  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      href={href}
      {...props}
      className={clsx(className, 'cursor-newtab')}
    >
      {children}
    </a>
  );
};
