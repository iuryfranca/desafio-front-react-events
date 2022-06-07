import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-rows: min-content 25px 1fr 1fr;

  cursor: pointer;

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

  @media (max-width: 620px) {
    grid-template-rows: 20px min-content 1fr 1fr;

    width: 150px;
    height: 120px;

    border-radius: 1rem;
  }
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
