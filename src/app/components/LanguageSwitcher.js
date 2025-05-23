"use client";

import { useState, useRef, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { usePathname, useRouter } from "next/navigation";

export default function LanguageSwitcher({ isScrolled = false }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const { lang, setLang } = useLanguage();
  const pathname = usePathname(); // /en/about, /ru/news, etc.
  const router = useRouter();

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const buttonColorClass = isScrolled ? "text-[var(--customtext)]" : "text-white";

  const handleLanguageChange = (newLang) => {
    setLang(newLang);
    document.documentElement.lang = newLang;
    setIsOpen(false);

    // Изменение пути: /ru/about → /kz/about
    const pathParts = pathname.split("/").filter(Boolean);
    if (["en", "ru", "kz"].includes(pathParts[0])) {
      pathParts[0] = newLang;
    } else {
      pathParts.unshift(newLang);
    }
    const newPath = "/" + pathParts.join("/");
    router.replace(newPath, { scroll: false });
  };

  return (
    <div ref={dropdownRef} className="relative">
      <button
        onClick={toggleDropdown}
        className={`text-[18px] bg-transparent border-none focus:outline-none ${buttonColorClass}`}
      >
        {lang === "en" && "English"}
        {lang === "ru" && "Русский"}
        {lang === "kz" && "Қазақша"}
      </button>

      {isOpen && (
        <ul className="absolute bg-white shadow-lg rounded-md mt-2 w-[200px] z-10">
          <li>
            <button onClick={() => handleLanguageChange("en")} className="block px-4 py-2 text-black hover:bg-gray-200 w-full text-left">
              English
            </button>
          </li>
          <li>
            <button onClick={() => handleLanguageChange("ru")} className="block px-4 py-2 text-black hover:bg-gray-200 w-full text-left">
              Русский
            </button>
          </li>
          <li>
            <button onClick={() => handleLanguageChange("kz")} className="block px-4 py-2 text-black hover:bg-gray-200 w-full text-left">
              Қазақша
            </button>
          </li>
        </ul>
      )}
    </div>
  );
}
