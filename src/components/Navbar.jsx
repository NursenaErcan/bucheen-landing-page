import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = ["Home", "Service", "About", "Pricing", "Support"];

  return (
    <header className="sticky top-0 z-50 w-full bg-[#f6f6f6] backdrop-blur-md">
      <div className="mx-auto flex max-w-[1440px] items-center justify-between px-6 py-6 lg:px-20">
       {/* Logo */}
        <a href="#" className="text-[34px] font-bold leading-none">
          <span className="text-[#7C6ACF]">Bu</span>
          <span className="text-[#FF7A63]">cheen</span>
        </a>
       {/* Large screen navigation */}
        <nav className="hidden items-center gap-12 lg:flex">
          {navItems.map((item, index) => (
            <a
              key={item}
              href="#"
              className={`text-[16px] font-medium transition ${
                index === 0
                  ? "text-[#FF7A63]"
                  : "text-[#8D8D8D] hover:text-[#FF7A63]"
              }`}
            >
              {item}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <button className="rounded-[18px] border border-[#FF7A63] px-9 py-4 text-[16px] font-semibold text-[#FF7A63]">
            Sign In
          </button>

          <button className="rounded-[18px] bg-[#FF7A63] px-9 py-4 text-[16px] font-semibold text-white">
            Sign Up
          </button>
        </div>
        
          {/* Mobile menu button */}
        <button
          type="button"
          className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#e4d9d5] bg-white lg:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          <div className="flex flex-col gap-1.5">
            <span className="h-[2px] w-5 bg-[#202020]" />
            <span className="h-[2px] w-5 bg-[#202020]" />
            <span className="h-[2px] w-5 bg-[#202020]" />
          </div>
        </button>
      </div>

      {isOpen && (
        <div className="border-t border-[#e8deda] bg-[#f6f6f6] lg:hidden">
          <div className="mx-auto flex max-w-[1440px] flex-col gap-4 px-6 py-6">
            {navItems.map((item, index) => (
              <a
                key={item}
                href="#"
                className={`text-[16px] font-medium ${
                  index === 0 ? "text-[#FF7A63]" : "text-[#707070]"
                }`}
              >
                {item}
              </a>
            ))}

            <div className="mt-2 flex flex-col gap-3">
              <button className="rounded-[16px] border border-[#FF7A63] px-6 py-3 text-[15px] font-semibold text-[#FF7A63]">
                Sign In
              </button>
              <button className="rounded-[16px] bg-[#FF7A63] px-6 py-3 text-[15px] font-semibold text-white">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;