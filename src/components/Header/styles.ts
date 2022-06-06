import styled from "styled-components";

export const HeaderContainer = styled.header`
  height: 8rem;
`;

export const HeaderContent = styled.div`
  display: flex;
  justify-content: center;
  align-self: center;

  max-width: 1120px;
  height: 8rem;

  margin: 0 auto;

  img {
    align-self: center;
  }
`;

export const Img = styled.img`
  width: 25rem;
  height: 4.5rem;

  @media (max-width: 720px) {
    width: 22rem;
    height: 4rem;
  }
`;
