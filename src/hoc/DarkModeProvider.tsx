import React, { createContext, useContext, useState, Dispatch, SetStateAction } from "react";

interface DarkModeContextProps {
    darkMode: boolean;
    setDarkMode: Dispatch<SetStateAction<boolean>>;
    toggleDarkMode: () => void; // додаємо функцію для зміни режиму
}

export const DarkModeContext = createContext<DarkModeContextProps | undefined>(undefined);

export const useDarkMode = () => {
    const context = useContext(DarkModeContext);
    if (!context) {
        throw new Error("useDarkMode must be used within a DarkModeProvider");
    }
    return context;
};

interface DarkModeProviderProps {
    children: React.ReactNode; // додаємо тип для children
}

export const DarkModeProvider: React.FC<DarkModeProviderProps> = ({ children }) => { // додаємо тип DarkModeProviderProps
    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => { // визначаємо функцію toggleDarkMode
        setDarkMode((prevMode) => !prevMode);
    };

    const value = {
        darkMode,
        setDarkMode,
        toggleDarkMode
    };

    return (
        <DarkModeContext.Provider value={value}>
            {children}
        </DarkModeContext.Provider>
    );
};