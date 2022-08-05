import * as React from 'react';

import { Image } from '@/components/image';

import goodthings from '@/images/good-things.png';

const GoodThingsPage = () => {
  return (
    <div className="container flex h-screen flex-col items-center justify-center">
      <h1 className="text-xl font-semibold text-slate-700">
        Hal Baik Yang Akan Selalu Di Ingat Dari eFishery
      </h1>

      <div className="flex flex-col  items-center justify-center space-y-8 pt-8 text-center">
        <Image.Wrapper className="relative aspect-video h-64 overflow-hidden rounded-sm">
          <Image src={goodthings} alt="Good Things" placeholder="blur" />
        </Image.Wrapper>

        <p>
          Selain dari segi pekerjaan, tim, orang - orang didalam efishery yang luar biasa membuat
          saya menjadi lebih baik, ada satu hal yang selalu saya ingat dari video perkenalan yang di
          sampai kan oleh CEO nya eFishery. Tujuan eFishery ini jelas, jelas banget, dan eFishery
          ini tuh bener bener menyelesaikan masalah para petani ikan dan ingin ikut serta
          menyelesaikan masalah kelaparan dunia, ngga cuma ningkatin valuasi bisnis. Saya jadi
          selalu termotivasi, dan semoga di masa depan saya bisa membuat satu perusahaan yang
          membuat saya dan eFishery bekerja sama untuk menyelesaikan masalah - masalah yang ada di
          dunia.
        </p>
      </div>
    </div>
  );
};

export default GoodThingsPage;
