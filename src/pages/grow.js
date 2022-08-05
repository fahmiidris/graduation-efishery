import { ArrowRightIcon } from '@heroicons/react/solid';
import * as React from 'react';

const GrowPage = () => {
  return (
    <div className="container flex h-screen flex-col items-center justify-center">
      <h1 className="text-xl font-semibold text-slate-700">Grow!!!</h1>

      <div className="flex w-full items-center justify-around pt-8">
        <div className="text-semibold flex w-1/3 items-center justify-center text-2xl">
          Diam Tulah Toleh, Bergerak Salah Kabeh!
        </div>
        <div className="flex w-1/3 items-center justify-center">
          <ArrowRightIcon className="h-5 w-5" />
        </div>
        <div className="text-semibold flex w-1/3 items-center justify-center text-2xl">
          Berkurang!
        </div>
      </div>
    </div>
  );
};

export default GrowPage;
