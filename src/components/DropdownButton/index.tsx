import { useDropdown } from 'hooks/dropdown'
import { ReactNode } from 'react'

import * as S from './styles'

export type DropdownButtonProps = {
  children: ReactNode
}

export const DropdownButton = ({ children }: DropdownButtonProps) => {
  const { toggleMenu, buttonRef } = useDropdown()

  return (
    <S.Wrapper onClick={toggleMenu} ref={buttonRef}>
      {children}
    </S.Wrapper>
  )
}
