import * as React from 'react';
import { ArrowRightIcon } from '@heroicons/react/solid';

import { Image } from '@/components/image';

import easy from '@/images/easy.png';
import hard from '@/images/hard.png';
import inisiatif from '@/images/inisiatif.png';

const VariousChallengesPage = () => {
  return (
    <div className="container flex h-screen flex-col items-center justify-center">
      <h1 className="text-xl font-semibold text-slate-700">Ragam Tantangan Selama Magang</h1>

      <div className="grid grid-cols-6 gap-2 pt-8">
        <div className="col-span-2">
          <div className="flex flex-col items-center justify-center space-y-2">
            <h2>Yang di kasih tau:</h2>
            <Image.Wrapper className="relative aspect-video h-24 pt-2">
              <Image src={easy} alt="Easy Part 1" />
            </Image.Wrapper>
          </div>
        </div>
        <div className="col-span-2 flex flex-col items-center justify-center">
          <ArrowRightIcon className="h-5 w-5" />
        </div>
        <div className="col-span-2">
          <div className="flex flex-col items-center justify-center space-y-2">
            <h2>Yang sebenarnya dilakukan:</h2>
            <Image.Wrapper className="relative aspect-video h-24 pt-2">
              <Image src={hard} alt="Hard Part 1" />
            </Image.Wrapper>
          </div>
        </div>
        <div className="col-span-2">
          <div className="flex flex-col items-center justify-center space-y-2">
            <h2>Yang di kasih tau:</h2>
            <Image.Wrapper className="relative aspect-video h-24 pt-2">
              <Image src={hard} alt="Hard Part 1" />
            </Image.Wrapper>
          </div>
        </div>
        <div className="col-span-2 flex flex-col items-center justify-center">
          <ArrowRightIcon className="h-5 w-5" />
        </div>
        <div className="col-span-2">
          <div className="flex flex-col items-center justify-center space-y-2">
            <h2>Yang sebenarnya dilakukan:</h2>
            <Image.Wrapper className="relative aspect-video h-24 pt-2">
              <Image src={easy} alt="Easy Part 1" />
            </Image.Wrapper>
          </div>
        </div>
        <div className="col-span-6 flex flex-col items-center justify-center space-y-2">
          <h2>Ketika mencoba inisiatif:</h2>
          <Image.Wrapper className="relative aspect-video h-24 pt-2">
            <Image src={inisiatif} alt="Easy Part 1" />
          </Image.Wrapper>
        </div>
      </div>
    </div>
  );
};

export default VariousChallengesPage;
