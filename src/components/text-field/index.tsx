import { ErrorMessage, Field, useField } from "formik";
import styled from "styled-components";

interface Props {
  title: string;
  name: string;
  type: string;
  placeholder: string;
  imgSrc?: string | undefined;
}

export function TextField({ title, name, type, placeholder, imgSrc }: Props) {
  const [field] = useField(name);

  return (
    <>
      {imgSrc ? (
        <LabelContainer>
          <span className="label-medium">{title}</span>
          <InputContainer>
            <ImageStyled src={imgSrc} alt={title} />
            <InputStyled name={name} type={type} placeholder={placeholder} />
          </InputContainer>
          <ErrorMessage name={name}>
            {(msg) => (
              <ErrorContainer>
                <ErrorText>{msg}</ErrorText>
              </ErrorContainer>
            )}
          </ErrorMessage>
        </LabelContainer>
      ) : (
        <LabelContainer>
          <span className="label-medium">{title}</span>
          <InputContainerNoImage>
            <TextArea {...field} as={type} placeholder={placeholder} />
          </InputContainerNoImage>
          <ErrorMessage name={name}>
            {(msg) => (
              <ErrorContainer>
                <ErrorText>{msg}</ErrorText>
              </ErrorContainer>
            )}
          </ErrorMessage>
        </LabelContainer>
      )}
    </>
  );
}

const LabelContainer = styled.label`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const InputContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 397px;
`;

const InputContainerNoImage = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 397px;
`;

const ImageStyled = styled.img`
  position: absolute;
  left: 12px;
`;

const InputStyled = styled(Field)`
  width: 100%;
  height: 48px;
  background: none;
  border: solid 1px #3e3c41;
  border-radius: 8px;
  padding-left: 40px;

  &:hover {
    border: solid 1px #fff;
    transition: 0.3s;
  }

  &:not(:hover) {
    transition: 0.3s;
  }

  &:focus {
    outline: solid 1px #9282fa;

    &::placeholder {
      color: #fff;
      transition: 0.3s;
    }
  }
`;

const TextArea = styled(Field)`
  width: 100%;
  background: none;
  border: solid 1px #3e3c41;
  border-radius: 8px;
  padding-left: 12px;
  padding-top: 12px;
  height: 83px;

  &:hover {
    border: solid 1px #fff;
    transition: 0.3s;
  }

  &:not(:hover) {
    transition: 0.3s;
  }

  &:focus {
    outline: solid 1px #9282fa;

    &::placeholder {
      color: #fff;
      transition: 0.3s;
    }
  }
`;

const ErrorContainer = styled.div`
  margin-top: 4px;
  width: 260px;
`;

const ErrorText = styled.span`
  font-size: 0.875rem;
  color: #ff4d4f;
`;
