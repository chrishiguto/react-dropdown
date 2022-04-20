import React from 'react'
import { screen } from '@testing-library/react'

import { renderWithTheme } from 'utils/tests/helpers'
import { DropdownButton } from '.'

describe('<Card />', () => {
  it('should render the dropdown button', () => {
    const { container } = renderWithTheme(
      <DropdownButton>
        <div data-testid="DropdownButton children" />
      </DropdownButton>
    )

    expect(screen.getByTestId(/dropdownbutton children/i)).toBeInTheDocument()
    expect(container.firstChild).toMatchInlineSnapshot(`
      .c0 {
        display: -webkit-inline-box;
        display: -webkit-inline-flex;
        display: -ms-inline-flexbox;
        display: inline-flex;
        -webkit-align-items: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-box-pack: center;
        -webkit-justify-content: center;
        -ms-flex-pack: center;
        justify-content: center;
        cursor: pointer;
        border: none;
        outline: none;
        background-color: hsla(225,14%,24%,1);
        padding: calc(xxsmall:0.8rem;xsmall:1.6rem;small:2.4rem;medium:3.2rem;large:4.0rem;xlarge:4.8rem;xxlarge:5.6rem; / 2);
        -webkit-transition: box-shadow 0.3s ease-in-out;
        transition: box-shadow 0.3s ease-in-out;
      }

      .c0:focus {
        box-shadow: 0 0 0 0.3rem hsla(210,100%,33%,0.5);
      }

      <button
        class="c0"
      >
        <div
          data-testid="DropdownButton children"
        />
      </button>
    `)
  })
})
