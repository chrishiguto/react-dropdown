import styled, { css } from 'styled-components'

export const Wrapper = styled.button`
  ${({ theme }) => css`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border: none;
    outline: none;
    background-color: ${theme.colors.black700};
    padding: calc(${theme.spacings} / 2);
    transition: box-shadow ${theme.transition.default};

    &:focus {
      box-shadow: 0 0 0 0.3rem ${theme.colors.blue400};
    }
  `}
`
