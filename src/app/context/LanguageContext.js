'use client'

import { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
    const [language, setLanguage] = useState('en');

    useEffect(() => {
        // Check browser language preference
        const browserLang = navigator.language.split('-')[0];
        const savedLang = localStorage.getItem('preferredLanguage');
        setLanguage(savedLang || (browserLang === 'es' ? 'es' : 'en'));
    }, []);

    const toggleLanguage = () => {
        const newLang = language === 'en' ? 'es' : 'en';
        setLanguage(newLang);
        localStorage.setItem('preferredLanguage', newLang);
    };

    return (
        <LanguageContext.Provider value={{ language, toggleLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
}

export const useLanguage = () => useContext(LanguageContext);
