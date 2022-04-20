import React from 'react'
import { screen } from '@testing-library/react'

import { renderWithTheme } from 'utils/tests/helpers'
import { MoreIcon } from '.'

describe('<Card />', () => {
  it('should render MoreIcon', () => {
    const { container } = renderWithTheme(<MoreIcon />)

    expect(screen.getByLabelText(/more icon/i)).toBeInTheDocument()
    expect(container.firstChild).toMatchInlineSnapshot(`
      <svg
        aria-label="More icon"
        fill="none"
        height="24"
        viewBox="0 0 24 24"
        width="24"
      >
        <path
          clip-rule="evenodd"
          d="M10.5 16.5a1.5 1.5 0 103 0 1.5 1.5 0 00-3 0zm0-4.5a1.5 1.5 0 103 0 1.5 1.5 0 00-3 0zm0-4.5a1.5 1.5 0 103 0 1.5 1.5 0 00-3 0z"
          fill="currentColor"
          fill-rule="evenodd"
        />
      </svg>
    `)
  })
})
