function Testimonials() {
  const testimonials = [
    {
      name: "Tasha Wijayanti",
      location: "Curug",
      text: "This Bucheen is so cool, I found the partner I wanted. and it's very easy to use and steady for bcheen. cheers and hopefully many other people can find their partner here",
      featured: false,
    },
    {
      name: "Sizuka engkol",
      location: "Indonesia",
      text: "Very interesting services are provided to customers, access is very fast and we can also see the development of our partners. and the information provided is accurate and genuine.",
      featured: true,
    },
    {
      name: "Gundam gandim",
      location: "Bulgarian",
      text: "It's crazy that this application can make me find my soul mate very easily and quickly. the information contained in this buceen is very accurate and really real, not a hoax",
      featured: false,
    },
  ];

  return (
    <section className="w-full bg-[#f6f6f6] px-6 py-28 lg:px-20">
      <div className="mx-auto max-w-[1440px]">
        <div className="text-center">
          <h2 className="text-[42px] font-bold leading-[1.25] text-[#202020] md:text-[64px]">
            What Our Customers
            <br />
            Have To Say
          </h2>

          <p className="mx-auto mt-8 max-w-[700px] text-[18px] leading-[1.8] text-[#7a7a7a]">
            Here's what our customers say with Bucheen
          </p>
        </div>

        <div className="mt-20 overflow-x-auto pb-4">
          <div className="flex w-max gap-8 xl:w-full xl:justify-center">
            {testimonials.map((item, index) => (
              <div
                key={index}
                className={`w-[360px] shrink-0 rounded-[28px] border border-[#d9d9d9] p-8 ${
                  item.featured
                    ? "bg-white shadow-[0_24px_60px_rgba(0,0,0,0.08)]"
                    : "bg-transparent"
                }`}
              >
                <div className="flex items-center gap-5">
                  <div className="h-[54px] w-[54px] rounded-full bg-[#a9a9a9]" />

                  <div>
                    <h3 className="text-[20px] font-semibold text-[#202020]">
                      {item.name}
                    </h3>
                    <p className="mt-1 text-[16px] text-[#9a9a9a]">
                      {item.location}
                    </p>
                  </div>
                </div>

                <p className="mt-8 text-[18px] leading-[1.75] text-[#6f6f6f]">
                  {item.text}
                </p>

                <div className="mt-10 flex items-center gap-2 text-[26px] text-[#f2b544]">
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;