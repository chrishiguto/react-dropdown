import { useDropdown } from 'hooks/dropdown'
import React, {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode
} from 'react'

import * as S from './styles'

type ItemTypes =
  | AnchorHTMLAttributes<HTMLAnchorElement>
  | ButtonHTMLAttributes<HTMLButtonElement>

export type DropdownItemProps = {
  children: ReactNode
  as?: React.ElementType
} & ItemTypes

export const DropdownItem = ({
  children,
  onClick,
  ...props
}: DropdownItemProps) => {
  const { hideMenu, buttonRef } = useDropdown()

  const handleClick = (
    e: React.MouseEvent<HTMLButtonElement> & React.MouseEvent<HTMLAnchorElement>
  ) => {
    onClick && onClick(e)
    hideMenu()
    !!buttonRef.current && buttonRef.current.focus()
  }

  return (
    <S.Wrapper tabIndex={0} onClick={handleClick} {...props}>
      {children}
    </S.Wrapper>
  )
}
