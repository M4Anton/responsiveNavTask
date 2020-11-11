export default interface IButton {
    text: string,
    children?: React.ReactNode,
    nested?: boolean | null | undefined,
    sider?: boolean;
    kidsTable?: Array<string>
}

export interface IButtonContainer {
    renderedButtons: Array<IButton>,
    hiddenButtons: Array<IButton>
}