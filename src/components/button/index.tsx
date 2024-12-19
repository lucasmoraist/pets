import styled from "styled-components";

interface Props {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
}

export function Button({ children, onClick, className, type }: Props) {
  return (
    <ButtonStyled onClick={onClick} className={className} type={type}>
      {children}
    </ButtonStyled>
  );
}

const ButtonStyled = styled.button`
  width: 218px;
  height: 48px;
  border-radius: 8px;
  background-color: #9282fa;
  box-shadow: 0 0 40px rgba(146, 130, 250, 0.3);

  border: none;
  cursor: pointer;

  &:hover {
    background-color: #bdb4fa;
    transition: 0.5s;
  }

  &:not(:hover) {
    transition: 0.5s;
  }
`;
