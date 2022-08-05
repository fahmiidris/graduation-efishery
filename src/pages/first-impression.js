import * as React from 'react';

const FirstImpression = () => {
  return (
    <div className="container flex h-screen flex-col items-center justify-center">
      <h1 className="text-xl font-semibold text-slate-700">Kesan Pertama Kali</h1>

      <ol className="pt-8 text-lg">
        {[
          'Jujuly kaget karena user di efishery dari berbagai daerah di indonesia.',
          'Kaget dengan budaya kerjanya. Karena baru pertama kali terlibat di dunia kerja.',
          'Senang dan bingung, bingung gimana ngungkapin seneng nya.',
          'Ternyata bisa sampai sebesar ini!',
          '"Jangan pernah menyerah, temukan malasah dan pecahkan masalah itu!"',
        ].map((item, index) => (
          <li key={index} className="leading-loose">
            {index + 1}. {item}
          </li>
        ))}
      </ol>
    </div>
  );
};

export default FirstImpression;
