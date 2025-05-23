"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import translations from "@/translations/translations";

export default function Partners() {
  const [lang, setLang] = useState("en"); // Состояние для языка

  // Получаем язык из <html lang="en"> при монтировании компонента
  useEffect(() => {
    setLang(document.documentElement.lang || "en"); // Устанавливаем язык из атрибута lang в <html>
  }, []); // Эффект будет выполнен только при монтировании компонента

  const { title, items } = translations.Partners;

  return (
    <div className="container mx-auto mt-[100px]">
      {/* <div className="text-[64px] font-bold text-[var(--customaccent)] mb-[40px]">
        {title[lang] || title.en}
      </div> */}

      <div className="flex flex-col md:flex-row justify-between gap-[25px] items-center">
        {items.map(({ id, url, image }) => (
          <Link
            key={id}
            href={url[lang] || url.en} // Локализованный URL для каждого языка
            target="_blank"
            rel="noopener noreferrer"
            className="w-full h-full py-[50px] flex items-center justify-center bg-white rounded-[8px] hover:shadow-lg transition-shadow"
          >
            <img
              src={image}
              alt={`Partner ${id}`}
              className="max-h-[150px] object-cover"
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
