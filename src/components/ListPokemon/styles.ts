import styled from "styled-components";

export const ContentContainer = styled.main`
  max-width: 1120px;
  height: calc(100vh - 8rem);

  margin: 0 auto;
  padding: 0 2rem;
`;

export const GroupSearch = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: space-between;
`;

export const ImgSearch = styled.img`
  height: 2.5rem;
  z-index: 10;
  margin-left: -4rem;
`;

export const SearchPokemon = styled.input`
  height: 5rem;
  width: 55rem;
  border-radius: 20px;
  padding: 10px 25px;
  box-sizing: border-box;
  border: 3px solid var(--gray-200);
  color: var(--gray-300);
  -webkit-transition: 0.5s;
  transition: 0.5s;
  outline: none;

  :focus {
    border: 3px solid rgb(206, 206, 206);
  }

  ::placeholder {
    color: var(--gray-300);
  }

  @media (max-width: 620px) {
    width: 22rem;
  }
`;

export const GroupList = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  row-gap: 5rem;
  margin-top: 5rem;

  justify-content: space-around;

  @media (max-width: 720px) {
    row-gap: 3rem;
  }
`;

export const GroupButton = styled.div`
  display: flex;

  align-items: center;
  justify-content: center;

  height: 100px;
`;

export const ButtonMore = styled.button`
  align-items: center;
  justify-content: center;
  text-align: center;

  background-color: var(--white);
  box-sizing: border-box;
  border-radius: 1rem;

  border: 3px solid var(--gray-200);
  color: var(--gray-300);

  padding: 15px;
`;
