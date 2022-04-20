import { useDropdown } from 'hooks/dropdown'
import React, { ReactNode, useCallback, useEffect } from 'react'

import * as S from './styles'

export type DropdownMenuProps = {
  children: ReactNode
}

export const DropdownMenu = ({ children }: DropdownMenuProps) => {
  const {
    popperRef,
    popperStyles,
    popperAttrs,
    setArrowRef,
    buttonRef,
    isMenuOpen,
    hideMenu
  } = useDropdown()

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      hideMenu()
      buttonRef?.current?.focus()
    }
  }

  const handleClickOutside = useCallback(
    (e: any) => {
      const clickedOutsideDropdown =
        !popperRef?.current?.contains(e.target) &&
        !buttonRef?.current?.contains(e.target)

      if (clickedOutsideDropdown) {
        hideMenu()
      }
    },
    [popperRef, buttonRef, hideMenu]
  )

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)

    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [handleClickOutside])

  return (
    <div
      onKeyDown={handleKeyPress}
      ref={popperRef}
      style={popperStyles.popper}
      {...popperAttrs.popper}
    >
      <S.Wrapper aria-hidden={!isMenuOpen} show={isMenuOpen}>
        <div
          ref={(ref) => setArrowRef(ref)}
          style={popperStyles.arrow}
          id="arrow"
        />
        {children}
      </S.Wrapper>
    </div>
  )
}
