import React, { useState } from 'react';
import IButton from 'interfaces';

import styles from "./Button.module.css";



export default function Button (properties: IButton) {
    const [isOpen, setIsOpen] = useState(false);
    const { text, children, nested, sider } = properties;

    const toggleOpen = (e: any): void => {
        e.stopPropagation();
        setIsOpen(!isOpen);
    }

    return (
        <>
            {isOpen && sider && <div className={styles.sliderOverlay} onClick={() => setIsOpen(false)}/>}
            <div className={`${styles.button__container}`} onClick={(e) => toggleOpen(e)}>
                <div className={`${styles.button__text} ${isOpen && styles.button__active}`} >
                    <span>{text}</span> <i className={`${children && (!isOpen ? styles.dArrow : styles.uArrow)}`} />
                </div>  
                <ul className={
                    sider ? (`
                                ${styles.slider__container} ${isOpen ? styles.slideOpenAnimation : styles.slideCloseAnimation}
                            `) :
                            (`
                                ${styles.button__children_container} ${isOpen ? styles.openAnimation : styles.closeAnimation} ${nested && styles.button__nested}            
                            `)}
                >
                        {children}
                </ul>
            </div>
            
        </>
    )
}