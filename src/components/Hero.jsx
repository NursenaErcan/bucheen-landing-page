function Hero() {
  //  Arka plandaki telefon
  const PhoneScreen1 = () => (
    <div className="w-[280px] h-[560px] bg-[#FF7675]/10 border-[8px] border-white rounded-[3rem] relative shadow-2xl overflow-hidden flex flex-col justify-end p-5">
      <div className="absolute inset-0 bg-gradient-to-b from-[#FFB7B2] to-[#FF7675] opacity-90" />

      <div className="relative z-10 bg-white rounded-3xl p-8 shadow-2xl flex flex-col items-center text-center">
        <h3 className="text-[#FF7675] font-extrabold text-lg leading-tight mb-2">
          Find Your Dream <br /> Partner Now
        </h3>
        <p className="text-gray-400 text-xs mb-4">Find your partner now, all easy with us.</p>
        <div className="flex gap-1.5 mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-gray-200" />
          <span className="w-1.5 h-1.5 rounded-full bg-gray-200" />
          <span className="w-4 h-1.5 rounded-full bg-[#FF7675]" />
        </div>
        <button className="w-full bg-[#FF7675] text-white py-3 rounded-2xl font-bold shadow-lg shadow-red-100 transition-transform hover:scale-[1.02]">
          Get Started
        </button>
      </div>
    </div>
  );

  //  Ön plandaki telefon
  const PhoneScreen2 = () => (
    <div className="flex h-[560px] w-[280px] flex-col gap-4 overflow-hidden rounded-[2.5rem] bg-white p-5 shadow-2xl border-[6px] border-gray-50 text-left">
      <div className="flex items-center gap-3">
        <div className="h-10 w-10 overflow-hidden rounded-full bg-[#FFB7B2] flex items-center justify-center text-xs font-bold text-white">N</div>
        <div>
          <p className="text-sm font-extrabold text-gray-900">Hello Naida</p>
          <p className="text-[11px] font-medium text-gray-400">Find Your Love Now</p>
        </div>
      </div>
      <div className="rounded-2xl bg-gray-50 p-1 border border-gray-100">
        <div className="flex items-center py-1">
          <select className="flex-1 bg-transparent px-2 text-xs text-gray-600 outline-none appearance-none">
            <option>Male</option>
          </select>
          <div className="h-4 w-px bg-gray-200" />
          <select className="flex-1 bg-transparent px-2 text-xs text-gray-600 outline-none appearance-none">
            <option>Female</option>
          </select>
        </div>
        <button className="w-full rounded-xl bg-[#FF7675] py-2 text-xs font-bold text-white mt-1">Find Now</button>
      </div>
      <div>
        <p className="mb-2 text-sm font-bold text-gray-800">Event Datting</p>
        <div className="flex gap-2">
          <div className="h-20 flex-1 rounded-2xl bg-[#FFB7B2] p-2 flex flex-col justify-end text-[10px] font-bold text-white">Wedding party</div>
          <div className="h-20 flex-1 rounded-2xl bg-[#B2A4FF] p-2 flex flex-col justify-end text-[10px] font-bold text-white">Birthday party</div>
        </div>
      </div>
      <div>
        <p className="mb-2 text-sm font-bold text-gray-800">Most Popular</p>
        <div className="flex -space-x-2">
          {['#74b9ff', '#ffeaa7', '#55efc4', '#a29bfe'].map((c, i) => (
            <div key={i} className="h-9 w-9 rounded-full border-2 border-white" style={{ background: c }} />
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <section className="w-full bg-[#F4B2A9]">
      <div className="mx-auto grid min-h-[790px] max-w-[1440px] grid-cols-1 items-center gap-10 px-8 py-16 lg:grid-cols-2 lg:px-20">
        {/* SOL Taraf */}
        <div className="max-w-[620px] text-left">
          <h1 className="text-[64px] font-bold leading-[1.1] text-[#1F1F1F]">
            Find <span className="text-[#FF7A63]">Match Now</span><br />
            and Grow Your<br />
            Feelings
          </h1>
          <p className="mt-10 text-[18px] leading-[1.8] text-[#6D6D6D]">
            There are so many platforms from this Pokan to make a task
            manager manage all your time, the data needed is very useful.
            and we have it all to get you to be successful
          </p>
          {/* Arama Barı */}
          <div className="mt-12 flex w-full max-w-[520px] items-center rounded-[18px] bg-white px-6 py-3 shadow-xl">
            <div className="flex-1 flex items-center justify-between text-[18px] text-[#6D6D6D]">
              <span>Male ⌄</span>
              <div className="h-10 w-px bg-gray-200" />
              <span>Female ⌄</span>
            </div>
            <button className="ml-6 rounded-[12px] bg-[#FF7A63] px-9 py-4 text-[18px] font-medium text-white">
              Find Now
            </button>
          </div>
        </div>

        {/* SAĞ Taraf */}
        <div className="relative flex min-h-[620px] items-center justify-center lg:justify-end">
   
          {/* Arka plandaki telefon */}
          <div className="absolute z-10 transform -translate-x-20 -translate-y-10">
            <PhoneScreen1 />
          </div>

          {/* Ön plandaki telefon */}
          <div className="absolute z-20 transform translate-x-45 translate-y-0 rotate-[8deg]">
            <PhoneScreen2 />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;