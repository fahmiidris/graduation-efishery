import * as React from 'react';
import NextImage from 'next/image';

export const Image = ({ src, className, ...props }) => {
  return <NextImage {...props} src={src} />;
};

const Wrapper = ({ className, children }) => {
  return <figure className={className}>{children}</figure>;
};

Image.Wrapper = Wrapper;
