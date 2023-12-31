import { useState } from 'react';
import React from "react";
import { useSettings } from './SettingsProvider';
import colors from "./Color.json"

export default function SettingComponent() {

    const [activeAccordion, setActiveAccordion] = useState(null);
    const { settings, handleFontSizeChange, handleColorChange, handleThemeChange } = useSettings();

    const handleAccordionClick = (index) => {
        setActiveAccordion(activeAccordion === index ? null : index);
    };
    console.log("settings---->", settings);

    const TextColorAccordion = () =>
        <div className='TextColorAccordion'>

            {colors.map((item) => (
                <button className='button'
                    style={{ background: item.hex }}
                    key={item.name}
                    onClick={() => handleColorChange(item.name)}
                >

                </button>
            ))}

        </div>;

    const TextSizeAccordion = () =>
        <div>
            Under progress, please check the text color
        </div>;

    const ThemeAccordion = () =>
        <div>  Under progress, please check the text color
        </div>;

    const accordions = [
        { id: 1, title: 'Text Color', settingKey: 'color', content: <TextColorAccordion /> },
        { id: 2, title: 'Text Size', settingKey: 'fontSize', content: <TextSizeAccordion /> },
        { id: 3, title: 'Theme', settingKey: 'theme', content: <ThemeAccordion /> },
    ];

    return (
        <>
            <div className="meetmo__wrapper__settings-modal__header">
                <div className="meetmo__wrapper__settings-modal__header__wrapper">
                    <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M24.4705 3.70292L24.4705 3.7029L24.9254 2.57703C25.1669 1.97933 24.8781 1.29901 24.2804 1.05751L24.4261 0.696756L24.2804 1.05751L22.8374 0.474499C22.2396 0.232998 21.5593 0.521774 21.3178 1.1195L20.8633 2.24443C20.5052 3.13088 19.5742 3.59368 18.6681 3.48304L18.7152 3.09682L18.6681 3.48304C18.1215 3.41631 17.5649 3.38193 16.9999 3.38193C16.2721 3.38193 15.5577 3.43901 14.8612 3.54885C13.9594 3.69107 13.0126 3.26118 12.6236 2.38756L12.1304 1.27987C11.8682 0.690934 11.1782 0.426079 10.5893 0.688281C10.5893 0.688283 10.5893 0.688284 10.5893 0.688285L9.16758 1.3213L9.16757 1.32131C8.57862 1.58351 8.31376 2.2735 8.57594 2.86244L9.07006 3.97214L9.07008 3.97218C9.45887 4.84557 9.1451 5.83685 8.43565 6.41151L8.43562 6.41154C7.56908 7.11328 6.79045 7.91922 6.11868 8.81027L24.4705 3.70292ZM24.4705 3.70292C24.1124 4.58935 24.4605 5.56906 25.1896 6.11866M24.4705 3.70292L25.1896 6.11866M25.1896 6.11866C26.0806 6.7904 26.8867 7.56911 27.5884 8.43565L27.8908 8.19078L27.5884 8.43566C28.1631 9.14521 29.1544 9.45899 30.0278 9.07009L31.1375 8.57597C31.1375 8.57596 31.1375 8.57596 31.1375 8.57595C31.7265 8.3138 32.4165 8.57867 32.6787 9.16754L33.3117 10.5893C33.3117 10.5893 33.3117 10.5893 33.3117 10.5893C33.5739 11.1783 33.309 11.8682 32.7201 12.1305L31.6124 12.6237C31.6123 12.6237 31.6123 12.6237 31.6123 12.6237C30.7387 13.0126 30.3089 13.9595 30.451 14.8612L30.8354 14.8006L30.451 14.8612C30.5609 15.5578 30.618 16.2721 30.618 17C30.618 17.5649 30.5836 18.1216 30.5169 18.6681C30.4062 19.5742 30.8691 20.5052 31.7555 20.8633L32.8805 21.3179C33.4782 21.5594 33.767 22.2397 33.5255 22.8374L32.9425 24.2804C32.7009 24.8782 32.0207 25.1669 31.4229 24.9254L30.2971 24.4705L30.297 24.4705C29.4106 24.1124 28.4309 24.4605 27.8813 25.1896C27.2095 26.0807 26.4308 26.8867 25.5643 27.5884L25.5643 27.5884C24.8547 28.1631 24.541 29.1544 24.9299 30.0278L25.4239 31.1376L25.4239 31.1376C25.6861 31.7265 25.4213 32.4165 24.8323 32.6787L23.4106 33.3117L23.4105 33.3117C22.8217 33.5739 22.1316 33.309 21.8695 32.7201L21.8695 32.7201L21.3763 31.6124L21.3763 31.6124C20.9873 30.7388 20.0405 30.3089 19.1388 30.4511C18.4422 30.5609 17.7278 30.618 16.9999 30.618C16.435 30.618 15.8783 30.5836 15.3317 30.5169C14.4256 30.4063 13.4947 30.869 13.1365 31.7555C13.1365 31.7555 13.1365 31.7555 13.1365 31.7556L12.682 32.8805L13.0427 33.0262L12.682 32.8805C12.4405 33.4782 11.7602 33.767 11.1624 33.5255L9.71948 32.9425C9.1217 32.701 8.83294 32.0206 9.07444 31.423L8.71369 31.2772L9.07444 31.4229L9.52936 30.297L9.1686 30.1513L9.52936 30.297C9.88748 29.4106 9.53933 28.4309 8.81034 27.8813L8.81032 27.8813C7.9192 27.2095 7.11325 26.4309 6.41151 25.5643L6.4115 25.5643C5.83684 24.8548 4.84553 24.541 3.97212 24.9299L2.86242 25.4239L2.86241 25.4239C2.27349 25.6862 1.58351 25.4213 1.32131 24.8324L0.965856 24.9906L1.3213 24.8324L0.688275 23.4106L0.333006 23.5687L0.688271 23.4106C0.42607 22.8217 0.690937 22.1317 1.27984 21.8695L1.27986 21.8695L2.38753 21.3763C2.38754 21.3763 2.38755 21.3763 2.38756 21.3763C3.26116 20.9874 3.69105 20.0405 3.54883 19.1388C3.43897 18.4422 3.3819 17.7279 3.3819 17C3.3819 16.4351 3.41628 15.8783 3.48302 15.3318C3.59366 14.4256 3.13088 13.4947 2.2444 13.1365L1.1195 12.682L0.97571 13.0379L1.1195 12.682C0.521782 12.4405 0.233001 11.7602 0.474493 11.1625C0.474495 11.1625 0.474496 11.1625 0.474498 11.1625L1.05751 9.71951L1.05751 9.7195C1.29901 9.12174 1.97932 8.83297 2.57703 9.07447L3.70292 9.52939L3.70294 9.5294C4.58936 9.8875 5.56906 9.53937 6.11866 8.81029L25.1896 6.11866ZM20.8908 17C20.8908 19.1488 19.1488 20.8909 16.9999 20.8909C14.8511 20.8909 13.109 19.1488 13.109 17C13.109 14.8511 14.8511 13.1092 16.9999 13.1092C19.1488 13.1092 20.8908 14.8511 20.8908 17ZM16.9999 24.0036C20.8679 24.0036 24.0035 20.868 24.0035 17C24.0035 13.132 20.8679 9.99646 16.9999 9.99646C13.132 9.99646 9.99635 13.132 9.99635 17C9.99635 20.868 13.132 24.0036 16.9999 24.0036Z" stroke="white" stroke-width="0.778174" />
                    </svg>
                    <span>Settings</span>
                </div>
            </div>
            <div className="meetmo__wrapper__settings-modal__body" style={{ color: "wheat" }}>
                <ul className="meetmo__wrapper__settings-modal__body__accordion-list">
                    {accordions.map((item, index) => (
                        <li
                            key={index}
                            className={`meetmo__wrapper__settings-modal__body__accordion-item ${activeAccordion === index ? 'active' : ''}`}
                            onClick={() => handleAccordionClick(index)}
                        >
                            <div className="meetmo__wrapper__settings-modal__body__accordion-item__title">
                                {item.title}
                                <div className=" meetmo__wrapper__settings-modal__body__accordion-item__title__wrapper" >

                                    <span style={{ color: settings.color }} className="meetmo__wrapper__settings-modal__body__selected-value">{settings[item.settingKey]}</span>

                                    <i className={`arrow-icon ${activeAccordion === index ? 'up' : 'down'}`} />
                                </div>

                            </div>

                        </li>
                    ))}
                </ul>

                {activeAccordion !== null && (
                    <div className='meetmo__wrapper__settings-modal__accordion'>
                        {accordions[activeAccordion].content}
                    </div>
                )}
            </div>
        </>

    )
}