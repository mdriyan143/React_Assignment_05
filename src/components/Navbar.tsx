import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import Logo from "./Logo";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Technologies", href: "#technologies" },
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="border-b border-slate-200 bg-white">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Logo />

        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href}
                className="text-sm font-medium text-slate-600 hover:text-pink-500">
                {link.label} </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-4 md:flex">
          <button className="cursor-pointer text-sm font-medium text-slate-700 hover:text-pink-500">
            Sign In
          </button>

          <button className="cursor-pointer brand-gradient rounded-lg px-5 py-2 text-sm font-medium text-white">
            Get Started </button>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="cursor-pointer text-2xl text-slate-700 md:hidden">
          {isOpen ? <HiX /> : <HiMenu />}
        </button>
      </nav>

      {isOpen && (
        <div className="border-t border-slate-200 px-4 py-4 md:hidden">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href}
                  className="text-sm font-medium text-slate-600 hover:text-pink-500"
                  onClick={() => setIsOpen(false)}>
                  {link.label}
                </a>
              </li>
            ))}

            <li>
              <button className="cursor-pointer text-sm font-medium text-slate-700">
                Sign In
              </button>
            </li>

            <li>
              <button className="cursor-pointer brand-gradient rounded-lg px-5 py-2 text-sm font-medium text-white">
                Get Started
              </button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

export default Navbar;