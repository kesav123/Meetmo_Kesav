import React, { createContext, useState, useContext } from 'react';

const SettingsContext = createContext();

export const useSettings = () => useContext(SettingsContext);

const SettingsProvider = ({ children }) => {
    const [settings, setSettings] = useState({
        fontSize: "X-large",
        color: 'White',
        theme: 'Dark',
    });

    const handleFontSizeChange = (size) => {
        setSettings({ ...settings, fontSize: size });
    };

    const handleColorChange = (color) => {
        setSettings({ ...settings, color: color });
    };

    const handleThemeChange = (theme) => {
        setSettings({ ...settings, theme: theme });
    };

    return (
        <SettingsContext.Provider value={{ settings, handleFontSizeChange, handleColorChange, handleThemeChange }}>
            {children}
        </SettingsContext.Provider>
    );
};

export default SettingsProvider;
