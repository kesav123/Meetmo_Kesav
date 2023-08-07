import React, { useEffect, useState } from "react";
import countries from "./Language.json"
import SettingComponent from "./SettingsLayout";

export default function HomeLayout() {
    const [currentIndex, setCurrentIndex] = useState(3);
    const [selectedCountry, setSelectedCountry] = useState(countries[3]);
    const [showSettings, setShowSettings] = useState(false);
    const handleCountryClick = (index, country) => {
        setSelectedCountry(country)
        if (index === currentIndex) return;
        let adjustedIndex = currentIndex + (index - currentIndex);
        if (adjustedIndex < 0) adjustedIndex = countries.length - 1;
        if (adjustedIndex >= countries.length) adjustedIndex = 0;
        setCurrentIndex(adjustedIndex);
    };

    const handleToggleSettings = () => {
        setShowSettings(!showSettings);
    };
    const getTransformValue = (index) => {
        const offset = index - currentIndex;
        if (offset === 0) return 'scale(1)';
        const scaleFactor = 0.8 ** Math.abs(offset);
        return `scale(${scaleFactor})`;
    };

    return (
        <>
            <div className="meetmo">
                <div className="meetmo__wrapper" >
                    <div className="meetmo__wrapper__body">
                        <div className="meetmo__wrapper__body__heading">
                            <h1>Welcome</h1>
                        </div>
                        <div className="meetmo__wrapper__body__language">
                            <h2>{selectedCountry.promp}</h2>
                        </div>
                        <div className="meetmo__wrapper__body__slider-container">
                            <div className="meetmo__wrapper__body__slider-container__slider">
                                {countries.map((country, index) => (
                                    <div
                                        key={country.id}
                                        className={`meetmo__wrapper__body__slider-container__slider__slider-item ${index === currentIndex ? '__selected' : ''}`}
                                        onClick={() => handleCountryClick(index, country)}
                                        style={{ transform: getTransformValue(index) }}
                                    >
                                        <img src={country.image} alt={country.name} />

                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="meetmo__wrapper__body__country-name">
                            <h2>{selectedCountry.language}</h2>
                        </div>
                    </div>

                    {!showSettings
                        ?
                        <div className="meetmo__wrapper__footer">

                            <span onClick={(e) => handleToggleSettings(e)}>Settings</span>
                        </div>
                        :
                        <div className="meetmo__wrapper__settings-container">
                            <div className="meetmo__wrapper__settings-modal">
                                <div className="meetmo__wrapper__settings-modal__icon" onClick={(e) => handleToggleSettings(e)}>
                                    <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g opacity="0.9">
                                            <path d="M32.5834 21.2084L25 28.7917L17.4167 21.2084" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        </g>
                                    </svg>
                                </div>
                                <SettingComponent />
                            </div>
                            {showSettings && <div className="blur-overlay" onClick={handleToggleSettings} />}
                        </div>
                    }
                </div>
            </div>
        </>
    )
}