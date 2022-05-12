import * as React from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid';

import { Link } from '@/components/link';

import { usePrevNext } from '@/hooks/use-prev-next';

export const Footer = () => {
  const { prev, next } = usePrevNext();

  return (
    <footer className="fixed inset-x-0 bottom-0 z-40">
      <div className="container relative">
        <div className="flex h-16 w-full items-center justify-center md:justify-between">
          <div className="flex items-center space-x-2">
            {(prev || next) && (
              <>
                {prev && (
                  <Link
                    href={prev.href}
                    className="inline-flex items-center rounded-md border border-slate-400/30 bg-white py-2 pl-3 pr-4 text-xs font-semibold text-slate-700 hover:bg-slate-100"
                  >
                    <ChevronLeftIcon className="h-4 w-4" />
                    <span>{prev.title}</span>
                  </Link>
                )}
                {next && (
                  <Link
                    href={next.href}
                    className="inline-flex items-center rounded-md border border-slate-400/30 bg-white py-2 pl-4 pr-3 text-xs font-semibold text-slate-700 hover:bg-slate-100"
                  >
                    <span>{next.title}</span>
                    <ChevronRightIcon className="h-4 w-4" />
                  </Link>
                )}
              </>
            )}
          </div>
          <div className="hidden md:flex md:items-center">
            <p className="flex items-center justify-center space-x-4 text-xs font-semibold">
              © {new Date().getFullYear()} -{' '}
              <Link
                href="https://www.fahmiidris.dev"
                className="animated-underline ml-1 text-slate-700"
              >
                Fahmi Idris
              </Link>
              . All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
