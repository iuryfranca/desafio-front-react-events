import styled, { css } from "styled-components";

interface ISelectProps {
  showDropdown: boolean;
}

export const Wrapper = styled.div``;

export const SelectContainer = styled.span<ISelectProps>`
  ${({ showDropdown }) => css`
    display: inline-block;
    position: relative;
    width: 12rem;
    height: 4.7rem;
    font-size: 16px;

    border: none;
    background-color: var(--white);
    border-radius: 20px;
    border: 3px solid rgb(230, 230, 230);
    font-weight: regular;

    color: var(--gray-300);

    transition: 3s all ease-in-out;

    animation: ${showDropdown ? "pulseAnimation 1.5s infinite" : ""};
  `}
`;

export const Option = styled.li`
  width: min-content;
  padding-left: 1rem;
  list-style-type: none;
  display: flex;
  align-items: center;
  height: 2rem;
  width: 100%;
  cursor: pointer;
`;

export const TextSelect = styled.div`
  width: 100%;
`;

export const Icon = styled.img<ISelectProps>`
  ${({ showDropdown }) => css`
    width: 1rem;
    display: flex;
    justify-self: end;
    margin-right: 2rem;
    margin-left: 1rem;

    transform: ${showDropdown ? "rotate(180deg)" : "rotate(0deg)"};

    transition: transform 0.2s ease-out;
  `};
`;

export const ContainerOptions = styled.ul<ISelectProps>`
  ${({ showDropdown }) => css`
    position: absolute;

    width: 12rem;
    height: 10rem;
    margin-top: 0.8rem;
    padding: 0;
    border-radius: 0.8rem;
    font-size: 14px;
    background-color: var(--white);
    border: 3px solid rgb(230, 230, 230);

    ::-webkit-scrollbar {
      width: 0.5rem;
    }

    opacity: 0;
    height: 0;
    overflow-y: hidden;
    overflow-x: hidden;
    pointer-events: none;

    animation: ${showDropdown && "show 300ms ease-in-out forwards;"};

    @keyframes show {
      0% {
        overflow-y: hidden;
      }
      90% {
        overflow-y: hidden;
      }
      100% {
        overflow-y: auto;
        opacity: 1;
        pointer-events: initial;

        height: max-content;
      }
    }

    li:last-child {
      border-bottom: none;
    }

    li:hover {
      background-color: #ededed;

      &:first-child {
        border-top-right-radius: 0.6rem;
        border-top-left-radius: 0.6rem;
      }

      &:last-child {
        border-bottom-right-radius: 0.6rem;
        border-bottom-left-radius: 0.6rem;
      }
    }
  `}
`;

export const LabelWrapper = styled.div`
  cursor: pointer;

  display: flex;
  align-items: center;

  height: 100%;
  width: 100%;

  padding-left: 1rem;
`;
