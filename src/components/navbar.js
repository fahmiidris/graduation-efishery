import * as React from 'react';

import { Logo, LogoEFishery } from '@/components/logo';
import { Link } from '@/components/link';

export const Navbar = () => {
  return (
    <nav className="fixed inset-x-0 top-0 z-40">
      <div className="container relative">
        <div className="flex h-16 w-full items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="outline-none">
              <span className="sr-only">Fahmi Idris home page</span>
              <Logo className="h-[24px] w-auto" />
            </Link>
          </div>
          <div className="flex items-center">
            <Link href="https://www.efishery.com" openNewTab={true} className="outline-none">
              <span className="sr-only">eFishery</span>
              <LogoEFishery className="h-[24px] w-auto" />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};
