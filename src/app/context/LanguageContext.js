"use client"
import { experience } from '@/data/experience';
import { languages } from '@/data/languages';
import { projects } from '@/data/works';
import React, { createContext, useState, useContext, useEffect } from 'react';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState('es');
    const [worksState, setWorksState] = useState(language);
    const [experiences, setExperiences] = useState(language);

    const switchLanguage = (lang) => {
        setLanguage(lang);
    };

    useEffect(() => {
        document.documentElement.lang = language;
    }, [language]);

    return (
        <LanguageContext.Provider
            value={{
                language,
                switchLanguage,
                texts: languages[language],
                experiences: experience[language],
                projectsGlobal: projects[language],
            }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => useContext(LanguageContext);
