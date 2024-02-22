export interface IButtonProps {
    title: string;
    id?: string,
    disabled?: boolean,
    type?: HTMLButtonElement | any,
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
}