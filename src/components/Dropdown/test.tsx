import React from 'react'
import { screen } from '@testing-library/react'

import { renderWithTheme } from 'utils/tests/helpers'
import { Dropdown } from '.'

describe('<Card />', () => {
  it('should render the dropdown', () => {
    renderWithTheme(
      <Dropdown>
        <div data-testid="Dropdown children" />
      </Dropdown>
    )

    expect(screen.getByTestId(/dropdown children/i)).toBeInTheDocument()
  })
})
