import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-rows: min-content 25px 1fr 1fr;

  width: 250px;
  height: 170px;
  align-items: center;
  justify-content: center;
  text-align: center;

  background-color: var(--white);
  box-sizing: border-box;
  border-radius: 2rem;

  box-shadow: 5px 5px 10px #ececec;

  padding: 15px;
`;

export const ImagePokemon = styled.div`
  margin-top: -55%;
`;
export const NumberPokemon = styled.div`
  font-size: 12px;
  font-weight: bold;
  color: var(--gray-300);
`;

export const NamePokemon = styled.div`
  font-weight: 900;
  font-size: 20px;
  color: #000362;
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
`;

export const GroupTypes = styled.div`
  display: flex;
  flex-direction: row;

  justify-content: center;
  column-gap: 0.3rem;
`;
