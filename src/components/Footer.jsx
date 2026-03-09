function Footer() {
  return (
    <footer className="w-full bg-[#f4eaea] px-6 py-16 lg:px-20">
      <div className="mx-auto grid max-w-[1440px] gap-12 lg:grid-cols-[1.5fr_2fr_1.2fr]">
        <div className="max-w-[360px]">
          <h2 className="text-[34px] font-bold leading-none">
            <span className="text-[#7C6ACF]">Bu</span>
            <span className="text-[#FF7A63]">cheen</span>
          </h2>

          <p className="mt-5 text-[16px] leading-[1.9] text-[#7a7a7a]">
            The most accurate and simplest time tracking for all of you. and we
            have been serving for more than 4 years and have made you happy
          </p>
        </div>

        <div className="grid grid-cols-2 gap-10">
          <div>
            <h3 className="text-[20px] font-semibold text-[#FF7A63]">About Us</h3>

            <ul className="mt-6 space-y-4 text-[16px] text-[#6f6f6f]">
              <li>Our people</li>
              <li>Our categories</li>
              <li>Contact us</li>
              <li>Testimonial</li>
            </ul>
          </div>

          <div>
            <h3 className="text-[20px] font-semibold text-[#FF7A63]">Product</h3>

            <ul className="mt-6 space-y-4 text-[16px] text-[#6f6f6f]">
              <li>Task Mangement</li>
              <li>Service</li>
              <li>Task Schedule</li>
            </ul>
          </div>
        </div>

        <div>
          <h3 className="text-[20px] font-semibold text-[#FF7A63]">
            Contact us
          </h3>

          <ul className="mt-6 space-y-4 text-[16px] text-[#6f6f6f]">
            <li className="flex items-start gap-3">
              <span className="mt-[2px]">◔</span>
              <span>(021) 3258 4930</span>
            </li>

            <li className="flex items-start gap-3">
              <span className="mt-[2px]">◔</span>
              <span>Pokan@Hola.com</span>
            </li>

            <li className="flex items-start gap-3">
              <span className="mt-[2px]">◔</span>
              <span>
                Sukabumi, Jawa Barat
                <br />
                Indonesia, IDN
              </span>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;