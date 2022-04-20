import React from 'react'
import { screen } from '@testing-library/react'

import { renderWithTheme } from 'utils/tests/helpers'
import { DropdownMenu } from '.'

jest.mock('../../hooks/dropdown', () => {
  return {
    useDropdown: () => ({
      hideMenu: jest.fn(),
      isMenuOpen: false,
      setArrowRef: jest.fn(),
      popperStyles: {
        popper: {}
      },
      popperAttrs: {
        popper: {}
      },
      buttonRef: {
        current: {
          contains: jest.fn()
        }
      },
      popperRef: {
        current: {
          contains: jest.fn()
        }
      }
    })
  }
})

describe('<Card />', () => {
  it('should render the dropdown menu', () => {
    const { container } = renderWithTheme(
      <DropdownMenu>
        <div data-testid="DropdownMenu Children" />
      </DropdownMenu>
    )

    expect(screen.getByTestId(/dropdownmenu children/i)).toBeInTheDocument()
    expect(container.firstChild?.firstChild).toHaveAttribute(
      'aria-hidden',
      'true'
    )
  })
})
