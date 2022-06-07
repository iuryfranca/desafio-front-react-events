import styled from "styled-components";

export const ModalBackground = styled.div`
  position: "fixed";

  width: "100%";
  height: "100%";

  top: 0;
  left: 0;

  background-color: "rgba(0, 0, 0, 0.8)";
`;

export const ModalContainer = styled.div`
  position: absolute;
  margin: 50px auto 0;

  width: 350px;
  height: 450px;

  display: grid;
  grid-template-rows: min-content repeat(6, min-content) 1fr;

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
