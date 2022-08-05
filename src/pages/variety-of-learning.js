import * as React from 'react';

const VariaetyOfLearningPage = () => {
  return (
    <div className="container flex h-screen flex-col items-center justify-center">
      <h1 className="text-xl font-semibold text-slate-700">
        Ragam Pembelajaran Yang di Dapatkan Selama Magang
      </h1>

      <div className="pt-8">
        <p>Dapat ikan apa aja dari eFishery? Banyak!!!</p>

        <ol className="grid grid-cols-4 gap-8 pt-4">
          {[
            'Pengetahuan Teknologi Baru',
            'Mengasah Skill Baca Kode Orang',
            'Ngepraktekin Agile',
            'Dapet Banyak Motivasi',
            'Deployment Flow Yang Bagus',
            'Mengasah Skill Komuniasi',
            'Tau Istilah Baru kaya PDR, RFC, dll',
            'Lain - lain',
          ].map((item, index) => (
            <li
              key={index}
              className="flex items-center justify-center rounded-md border border-slate-400/20 py-6 px-4 text-center"
            >
              {item}
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default VariaetyOfLearningPage;
