"use client";
import { useState, useEffect } from 'react';

import translations from '@/translations/translations';
import Link from 'next/link';

export default function Registration() {
    const [showModal, setShowModal] = useState(false);
      const [lang, setLang] = useState("en");
        useEffect(() => {
            setLang(document.documentElement.lang || "en");
        }, []); 

    const [formData, setFormData] = useState({
        name: '',
        surname: '',
        patronymic: '',
        organization: '',
        position: '',
        country: '',
        email: '',
        phone: '',
        session: '',
        consent: false
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formData.consent) {
            alert('You must consent to the use of your data.');
            return;
        }

        try {
            const response = await fetch('http://192.168.41.154:8000/api/registration/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error('Something went wrong with the registration.');
            }
            
            const data = await response.json();
            // alert('Registration successful!');
            setShowModal(true);
            // Reset form after submission
            setFormData({
                name: '',
                surname: '',
                patronymic: '',
                organization: '',
                position: '',
                country: '',
                email: '',
                phone: '',
                session: '',
                consent: false
            });
        } catch (error) {
            alert(error.message);
        }
    };

    return (
        <main className="pb-[100px]">
            <div className="relative h-[750px] bg-[url('/academy.jpg')] bg-cover bg-center flex items-center justify-center">
                <div className="z-9 text-white flex flex-col items-center justify-center text-center">
                    <h2 className="text-[40px] uppercase">{translations.Registration.title[lang]}</h2>
                    <p className="text-[25px] uppercase">{translations.Registration.description[lang]}</p>
                </div>
                <img
                    src="/overlaymain.svg"
                    alt="Logo"
                    className="z-[2] absolute absolute top-0 left-0 w-full h-full object-cover"
                />
            </div>
            <div className="container flex flex-col gap-[10px] max-w-4xl mx-auto mt-[100px]">
                <form onSubmit={handleSubmit} className="flex flex-col gap-[10px]">
                    <div className="flex gap-[10px]">
                        <label htmlFor="name">{translations.Registration.name[lang]}:
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </label>
                        <label htmlFor="surname">{translations.Registration.surname[lang]}:
                            <input
                                type="text"
                                id="surname"
                                name="surname"
                                value={formData.surname}
                                onChange={handleChange}
                                required
                            />
                        </label>
                        <label htmlFor="patronymic">{translations.Registration.patronymic[lang]}:
                            <input
                                type="text"
                                id="patronymic"
                                name="patronymic"
                                value={formData.patronymic}
                                onChange={handleChange}
                                required
                            />
                        </label>
                    </div>

                    <div className="flex gap-[10px]">
                        <label htmlFor="organization">{translations.Registration.organiztion[lang]}:
                            <input
                                type="text"
                                id="organization"
                                name="organization"
                                value={formData.organization}
                                onChange={handleChange}
                                required
                            />
                        </label>
                        <label htmlFor="position">{translations.Registration.position[lang]}:
                            <input
                                type="text"
                                id="position"
                                name="position"
                                value={formData.position}
                                onChange={handleChange}
                                required
                            />
                        </label>
                    </div>

                    <label htmlFor="country">{translations.Registration.country[lang]}:
                        <input
                            type="text"
                            id="country"
                            name="country"
                            value={formData.country}
                            onChange={handleChange}
                            required
                        />
                    </label>
                    <label htmlFor="email">{translations.Registration.email[lang]}:
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </label>
                    <label htmlFor="phone">{translations.Registration.phone[lang]}:
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        onInput={(e) => {
                        e.target.value = e.target.value.replace(/\D/g, ''); // Удаляет всё, кроме цифр
                        }}
                        inputMode="numeric"
                        required
                    />
                    </label>


                    <label>{translations.Registration.section[lang]}</label>

                    <div className="items-center space-x-4">
                        <label htmlFor="aiIntegration" className="flex items-center">
                            <input
                                type="radio"
                                id="aiIntegration"
                                name="session"
                                value="aiIntegration"
                                checked={formData.session === 'aiIntegration'}
                                onChange={handleChange}
                                className="mr-2"
                            />
                            {translations.Registration.s1[lang]}
                        </label>

                        <label htmlFor="fishbowlSession" className="flex items-center">
                            <input
                                type="radio"
                                id="fishbowlSession"
                                name="session"
                                value="fishbowlSession"
                                checked={formData.session === 'fishbowlSession'}
                                onChange={handleChange}
                                className="mr-2"
                            />
                            {translations.Registration.s2[lang]}
                        </label>

                        <label htmlFor="foresightSession" className="flex items-center">
                            <input
                                type="radio"
                                id="foresightSession"
                                name="session"
                                value="foresightSession"
                                checked={formData.session === 'foresightSession'}
                                onChange={handleChange}
                                className="mr-2"
                            />
                            {translations.Registration.s3[lang]}
                        </label>

                        <details className="border border-gray-300 rounded-md p-4 my-5">
                        <summary className="cursor-pointer text-lg font-semibold">
                            {translations.ForesightTopics.title[lang] || translations.ForesightTopics.title["en"]}
                        </summary>
                        <ul className="mt-2 list-disc pl-5 text-base">
                            {translations.ForesightTopics.topics.map((topic) => (
                            <li key={topic.id} className="mb-2">
                                <strong>{topic[lang]?.title || topic.en.title}</strong>{" "}
                                {topic[lang]?.text || topic.en.text}
                            </li>
                            ))}
                        </ul>
                        </details>


                        <label htmlFor="trainingDevelopment" className="flex items-center">
                            <input
                                type="radio"
                                id="trainingDevelopment"
                                name="session"
                                value="trainingDevelopment"
                                checked={formData.session === 'trainingDevelopment'}
                                onChange={handleChange}
                                className="mr-2"
                            />
                            {translations.Registration.s4[lang]}
                        </label>
                    </div>

                    <div className="mt-6 flex items-center gap-2">
                        <input
                            type="checkbox"
                            id="consent"
                            name="consent"
                            checked={formData.consent}
                            onChange={handleChange}
                            required
                            className="mt-1 w-5 h-5 accent-[var(--customaccent)]"
                        />
                        <label htmlFor="consent" className="text-sm text-gray-700 leading-snug">
                            {translations.Registration.confirm[lang]}
                        </label>
                    </div>

                    <button
                        type="submit"
                        className="mt-[50px] px-[30px] h-[50px] flex text-white text-[20px] items-center rounded-[360px] bg-[var(--customaccent)] w-fit"
                    >
                        {translations.Registration.button[lang]}
                    </button>
                </form>
            </div>
            {showModal && (
                <div className="fixed inset-0 bg-[rgba(0,0,0,0.7)] flex items-center justify-center z-50">
                    <div className="bg-white p-6 rounded-md shadow-lg max-w-md w-full text-center">
                        <h2 className="text-xl font-bold mb-4">{lang === 'ru' ? 'Регистрация прошла успешно!' : lang === 'kz' ? 'Тіркеу сәтті өтті!' : 'Registration Successful!'}</h2>
                        <p className="mb-4">
                            {lang === 'ru'
                                ? 'Спасибо за регистрацию. Мы свяжемся с вами при необходимости.'
                                : lang === 'kz'
                                ? 'Тіркелгеніңіз үшін рахмет. Қажет болған жағдайда сізбен хабарласамыз.'
                                : 'Thank you for registering. We will contact you if necessary.'}
                        </p>
                        <Link
                            href="/"
                            onClick={() => setShowModal(false)}
                            className="px-4 py-2 mt-4 bg-[var(--customaccent)] text-white rounded"
                        >
                            OK
                        </Link>
                    </div>
                </div>
            )}

        </main>
    );
}
