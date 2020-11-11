import React from 'react';
import IButton, { IButtonContainer } from 'interfaces';
import Button from './Button';

import styles from "./ButtonContainer.module.css";

export default function ButtonContainer (buttons: IButtonContainer) {
    const screenWidth: number = window.innerWidth;

    const renderChildren = (children: Array<string> | undefined): React.ReactNode => {
        return children ? children.map(child => <li className={styles.button__child}>{child}</li>) : null;
    }

    return (
        <div className={styles.container}>
                {buttons.renderedButtons.map(button => (
                <Button text={button.text} >
                    {renderChildren(button.kidsTable)}
                </Button>)
                )}
                {buttons.hiddenButtons.length !== 0 && <Button text="Show more" sider={screenWidth < 769}>
                        {buttons.hiddenButtons.map((button: IButton) => (
                        <Button text={button.text} nested={button.kidsTable ? true : false}>
                            {renderChildren(button.kidsTable)}
                        </Button>))}
                    </Button>}
            </div>
        );
}