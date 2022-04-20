import React from 'react'
import { fireEvent, screen } from '@testing-library/react'

import { renderWithTheme } from 'utils/tests/helpers'
import { DropdownItem } from '.'

jest.mock('../../hooks/dropdown', () => {
  return {
    useDropdown: () => ({
      hideMenu: jest.fn(),
      buttonRef: {
        current: {
          focus: jest.fn()
        }
      }
    })
  }
})

describe('<Card />', () => {
  it('should render the dropdown item as button by default', () => {
    renderWithTheme(<DropdownItem>Button label</DropdownItem>)

    expect(
      screen.getByRole('button', { name: /button label/i })
    ).toBeInTheDocument()
  })

  it('should render the dropdown item as a link', () => {
    renderWithTheme(
      <DropdownItem as="a" href="https://google.com">
        Button label
      </DropdownItem>
    )

    expect(screen.getByRole('link', { name: /button label/i })).toHaveAttribute(
      'href',
      'https://google.com'
    )
  })

  it('should render handleClick', () => {
    const onClickMock = jest.fn()

    renderWithTheme(
      <DropdownItem onClick={onClickMock}>Button label</DropdownItem>
    )

    fireEvent.click(screen.getByRole('button', { name: /button label/i }))

    expect(onClickMock).toHaveBeenCalledTimes(1)
  })
})
