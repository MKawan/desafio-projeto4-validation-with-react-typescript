import { ButtonContainer } from "./styles";
import { IButtonProps } from "./types";

const Button = ({ title, onClick, id, disabled, type }: IButtonProps) => {
  return <ButtonContainer type={type} id={id} disabled={disabled} onClick={onClick}>{title}</ButtonContainer>;
};

export default Button;
