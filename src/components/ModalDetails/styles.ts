import styled from "styled-components";

export const ModalBackground = styled.div`
  position: absolute;
  width: 100%;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
`;

export const ModalContainer = styled.div`
  display: grid;
  grid-template-rows: min-content repeat(6, min-content) 1fr;
  width: 350px;
  height: 450px;
  border-radius: 12px;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  row-gap: 5px;

  padding: 30px;

  text-align: center;
  margin-top: 10px;
`;

export const TitleCloseBtn = styled.div`
  display: flex;
  justify-content: flex-end;

  background-color: transparent;
  border: none;
  font-size: 25px;
  cursor: pointer;
`;
export const ImagePokemon = styled.div`
  height: auto;
`;
export const NumberPokemon = styled.div`
  font-size: 12px;
  font-weight: bold;
  color: var(--gray-300);
`;

export const NamePokemon = styled.div`
  font-weight: 900;
  font-size: 26px;
  color: #000362;

  @media (max-width: 620px) {
    font-size: 18px;
  }
`;

export const TypePokemon = styled.span<{ colorBackground: string }>`
  background-color: var(--${(props) => props.colorBackground});
  border-radius: 5px;
  font-size: 12px;
  text-align: center;
  font-weight: bold;
  width: min-content;
  padding: 5px;
  justify-self: center;

  @media (max-width: 620px) {
    font-size: 10px;
  }
`;

export const GroupTypes = styled.div`
  display: flex;
  flex-direction: row;

  justify-content: center;
  column-gap: 0.3rem;
`;

export const TypePokedex = styled.div`
  font-weight: 900;
  font-size: 15px;
  color: #000362;
  padding: 8px 0px;
`;
export const DescriptionPokemon = styled.div`
  padding: 0px 50px;
`;
