import styled from "styled-components";

export const Button = ({ loadMore }) => {
  return <ButtonStyled onClick={() => loadMore()}>Carregar mais</ButtonStyled>;
};

const ButtonStyled = styled.button`
  width: 160px;
  height: 40px;
  border-radius: 8px;
  border: none;
  background-color: rgb(209, 37, 50);
  color: #fff;
  cursor: pointer;
  font-size: 1.8rem;
  margin-top: 24px;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
    rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;

  &:active {
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
      rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px;
    transform: translateY(2px);
  }
`;
