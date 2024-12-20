import styled from "styled-components";

interface Props {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
  button: "primary" | "secondary";
}

export function Button({ children, onClick, className, type, button }: Props) {
  return (
    <>
      {button === "primary" ? (
        <ButtonStyledPrimary
          onClick={onClick}
          className={className}
          type={type}
        >
          <ButtonPrimaryText>{children}</ButtonPrimaryText>
        </ButtonStyledPrimary>
      ) : (
        <ButtonStyledSecondary
          onClick={onClick}
          className={className}
          type={type}
        >
          <ButtonSecondaryText>{children}</ButtonSecondaryText>
        </ButtonStyledSecondary>
      )}
    </>
  );
}

const ButtonStyledPrimary = styled.button`
  width: 218px;
  height: 48px;
  border-radius: 8px;
  background-color: #9282fa;
  box-shadow: 0 0 40px rgba(146, 130, 250, 0.3);

  border: none;
  cursor: pointer;

  &:hover {
    background-color: #bdb4fa;
    transition: 0.3s;
  }

  &:not(:hover) {
    transition: 0.3s;
  }
`;

const ButtonStyledSecondary = styled.button`
  width: 218px;
  height: 48px;
  border-radius: 8px;
  border: solid 2px #9282fa;
  background: none;
  box-shadow: 0 0 40px rgba(146, 130, 250, 0.3);

  cursor: pointer;

  &:hover {
    background-color: rgb(121, 100, 252);
    transition: 0.3s;
  }

  &:not(:hover) {
    transition: 0.3s;
  }

  &::placeholder {
    font-size: 1rem;
    line-height: 24px;
    font-weight: bold;
    color: #050505;
  }
`;

const ButtonPrimaryText = styled.span`
  font-size: 1rem;
  line-height: 24px;
  font-weight: bold;
  color: #fff;
`;

const ButtonSecondaryText = styled.span`
  font-size: 1rem;
  line-height: 24px;
  font-weight: bold;
  color: #fff;
`;

