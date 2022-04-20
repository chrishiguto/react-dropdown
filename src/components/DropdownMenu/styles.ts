import styled, { css } from 'styled-components'

type WrapperProps = {
  show: boolean
}

const wrapperModifiers = {
  open: () => css`
    opacity: 1;
    pointer-events: auto;
    transform: translateY(0);
  `,
  close: () => css`
    opacity: 0;
    pointer-events: none;
    transform: translateY(-1rem);
  `
}

export const Wrapper = styled.div<WrapperProps>`
  ${({ theme, show }) => css`
    background-color: ${theme.colors.black700};
    width: max-content;
    opacity: 0;
    transition: transform ${theme.transition.default}, opacity ${
    theme.transition.default;
  };

    ${show && wrapperModifiers.open()}
    ${!show && wrapperModifiers.close()}
  `}
`
