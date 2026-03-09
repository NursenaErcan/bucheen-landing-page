import React from 'react';

function Features() {
  const steps = [
    {
      icon: "⌕",
      text: "Find your dating relationship in app and waiting until you get a notification. have a good relationship its started",
    },
    {
      icon: "♡",
      text: "Dating with benefits and you redefine the expectations of a perfect relationship with your partner",
    },
    {
      icon: "👤",
      text: "Ideal relationship makes your online dating relationship run more smoothly using this app",
    },
  ];

  const profiles = [
    {
      name: "Javar Saripun",
      desc: "A man who is ideal for all women. Javar is very handsome and attractive with a very friendly and kind nature. Javar is also a person who excels in the field of music.",
      bg: "bg-[#f3d4cc]",
    },
    {
      name: "Fausiah Fera",
      desc: "Fera is a student from one of the famous universities in Tokyo and she is a very famous and very beautiful woman.",
      bg: "bg-[#b2a4f4]",
    },
    {
      name: "Shreryl Olap",
      desc: "Olap is a very sweet woman with curly and blonde hair which makes her very beautiful and sweet. He works in the field of music, which is famous in Indonesia.",
      bg: "bg-[#edd9b6]",
    },
  ];

  return (
    // Tüm sayfanın arka planını tek bir yerden kontrol ediyoruz 
    <section className="w-full bg-[#fdfdfd] font-sans">
      <div className="mx-auto max-w-7xl">

        <div className="mt-12 flex max-w-[750px] flex-col gap-10"></div>
        
        {/* --- SECTION 1: HERO / INTRO --- */}
        <div className="grid min-h-[500px] grid-cols-1 items-center px-6 py-20 lg:grid-cols-2 lg:px-16">
          {/* Sol taraf: Dekoratif Halkalar */}
          <div className="relative hidden h-[320px] lg:block">
            <div className="absolute left-[-120px] top-[-20px] h-[380px] w-[380px] rounded-full border-[2px] border-[#f1e5d9]" />
            <div className="absolute left-[-50px] top-[15px] h-[310px] w-[310px] rounded-full border-[2px] border-[#f1e5d9]" />
            <div className="absolute left-[15px] top-[75px] h-[220px] w-[220px] rounded-full border-[2px] border-[#f1e5d9]" />
          </div>

          {/* Sağ taraf: Metin İçeriği */}
          <div className="max-w-[620px] lg:ml-auto">
            <h2 className="text-[36px] font-bold leading-[1.2] text-[#202020] md:text-[44px] xl:text-[52px]">
              Find Match Now and <br />
              Develop Your Feelings
            </h2>
            <p className="mt-6 max-w-[500px] text-[16px] leading-[1.8] text-[#7a7a7a]">
              There are so many platforms from this Pokan to make a task
              manager manage all your time, the data needed is very useful.
              and we have it all to get you to be successful.
            </p>
            <button className="mt-8 rounded-[12px] bg-[#ff7a63] px-8 py-4 text-[15px] font-semibold text-white shadow-lg shadow-[#ff7a63]/20 transition hover:bg-[#ef6b55]">
              Read More
            </button>
          </div>
        </div>

        <div className="mt-12 flex max-w-[750px] flex-col gap-10"></div>

        {/* --- SECTION 2: HOW IT WORKS --- */}
        <div className="px-6 py-24 lg:px-16">
          <div className="max-w-[800px]">
            <h2 className="text-[36px] font-bold leading-[1.2] text-[#202020] md:text-[48px]">
              How It Works To Find <br />
              Your Relationship
            </h2>
          </div>

          <div className="mt-12 flex max-w-[750px] flex-col gap-10">
            {steps.map((step, index) => (
              <div key={index} className="group flex items-start gap-6">
                <div className="flex h-[64px] w-[64px] shrink-0 items-center justify-center rounded-full bg-[#ffede8] text-[24px] text-[#ff7a63] transition group-hover:bg-[#ff7a63] group-hover:text-white">
                  {step.icon}
                </div>
                <div className="pt-2">
                  <p className="max-w-[500px] text-[16px] leading-[1.7] text-[#6b6b6b]">
                    {step.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* --- SECTION 3: POPULAR PROFILES --- */}
        <div className="px-6 py-24 lg:px-16">
          <div className="mb-16 text-center">
            <h2 className="text-[34px] font-bold text-[#0d1038] md:text-[48px]">
              Most Popular In This Week
            </h2>
            <p className="mx-auto mt-6 max-w-[700px] text-[16px] leading-[1.8] text-[#7a7a7a]">
              There are so many platforms from this Pokan to make a task manager
              manage all your time, the data needed is very useful. and we have
              it all to get you to be successful.
            </p>
          </div>

          {/* Yatay Kaydırılabilir Kartlar */}
          <div className="overflow-x-auto pb-10 scrollbar-hide">
            <div className="flex w-max gap-8 px-2 lg:w-full lg:justify-center">
              {profiles.map((profile, index) => (
                <div
                  key={index}
                  className="w-[340px] shrink-0 overflow-hidden rounded-[32px] bg-white shadow-[0_15px_40px_rgba(0,0,0,0.04)] transition-transform hover:-translate-y-2"
                >
                  {/* Profil Görsel Alanı */}
                  <div className={`h-[300px] w-full ${profile.bg} relative`}>
                   
                  </div>

                  {/* Profil Bilgisi */}
                  <div className="p-10">
                    <h3 className="text-[28px] font-bold text-[#202020]">
                      {profile.name}
                    </h3>
                    <p className="mt-4 text-[16px] leading-[1.8] text-[#757575]">
                      {profile.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Features;