import * as React from 'react';

import { ArrowRightIcon } from '@heroicons/react/solid';

const GrowPage = () => {
  return (
    <div className="container flex h-screen flex-col items-center justify-center">
      <h1 className="text-xl font-semibold text-slate-700">Perkembangan</h1>

      <div className="flex items-center space-x-8 pt-8">
        <p className="rounded-sm border border-slate-400/20 px-4 py-2">
          Diam Tulah Toleh, Bergerak Salah Kabeh.
        </p>
        <ArrowRightIcon className="h-5 w-5" />
        <p className="rounded-sm border border-slate-400/20 px-4 py-2">Berkurang</p>
      </div>

      <div className="pt-8 text-center">
        Dengan ada nya pengalaman magang di eFishery, membuat saya berfikir dulu sebelum bertindak,
        berkumonikasi dulu untuk memastikan tidak ada kesalahpahaman.
      </div>
    </div>
  );
};

export default GrowPage;
