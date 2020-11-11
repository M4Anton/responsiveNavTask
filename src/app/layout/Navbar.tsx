import React, { useState, useEffect } from 'react';
import { debounce } from 'helpers';
import  IButton  from "interfaces";

import styles from "./Navbar.module.css";

import ButtonContainer from 'components/ButtonContainer';



const compChildren: Array<string> = ["Action", "Another action", "Something else here"];


const buttonsToRender: Array<IButton> = [
    {
        text: "component",
        kidsTable: compChildren,
    },
    {
        text: "component1",
    },
    {
        text: "component2",
    },
    {
        text: "component3",
    },
    {
        text: "component4",
        kidsTable: compChildren,
    },
    {
        text: "component5",
    }];


export default function Navbar () {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [renderedButtons, setRenderedButtons] = useState([] as Array<IButton>);
    const [hiddenButtons, setHiddenButtons] = useState([] as Array<IButton>);

    useEffect(() => {
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
        //eslint-disable-next-line
    }, []);
    
    useEffect(() => {
        handleButtonPlacement();
        //eslint-disable-next-line
    }, [windowWidth]);
    
    const handleResize = debounce((): void => setWindowWidth(window.innerWidth), 500);
    const handleButtonPlacement = (): void => {
        const buttonsSpace = windowWidth - 235; // substracting logo width
        const howManyButtons = buttonsSpace / 230;
        setRenderedButtons(buttonsToRender.slice(0, howManyButtons-1));
        setHiddenButtons(buttonsToRender.slice(howManyButtons-1, buttonsToRender.length));
    }

    return (
        <nav className={styles.navbar__container} id="nav">
            <div className={styles.navbar__companyName}>Visual Language</div>
            <ButtonContainer renderedButtons={renderedButtons} hiddenButtons={hiddenButtons} />
        </nav>
    );
}