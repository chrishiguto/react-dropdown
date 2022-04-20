import styled, { css } from 'styled-components'

export const Wrapper = styled.button`
  ${({ theme }) => css`
    display: flex;
    width: 100%;
    cursor: pointer;
    text-decoration: none;
    font-size: 1.4rem;
    background-color: ${theme.colors.black700};
    padding: ${theme.spacings.xsmall} ${theme.spacings.xxsmall};
    color: ${theme.colors.white100};
    outline: none;
    border: none;
    transition: box-shadow ${theme.transition.default};
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;

    &:focus-visible,
    &:hover {
      background-color: ${theme.colors.blue100};
      box-shadow: 0 0 0 0.3rem ${theme.colors.blue400};
    }
  `}
`
