import { act } from '@testing-library/react'
import { renderHook } from '@testing-library/react-hooks'
import { DropdownProvider, useDropdown } from '.'

describe('Travels hook', () => {
  it('should hide menu', async () => {
    const { result } = renderHook(() => useDropdown(), {
      wrapper: DropdownProvider
    })

    await act(async () => {
      result.current.hideMenu()
    })

    expect(result.current.isMenuOpen).toEqual(false)
  })

  it('should show menu', async () => {
    const { result } = renderHook(() => useDropdown(), {
      wrapper: DropdownProvider
    })

    await act(async () => {
      result.current.showMenu()
    })

    expect(result.current.isMenuOpen).toEqual(true)
  })

  it('should toggle menu', async () => {
    const { result } = renderHook(() => useDropdown(), {
      wrapper: DropdownProvider
    })

    const currentState = result.current.isMenuOpen

    await act(async () => {
      result.current.toggleMenu()
    })

    expect(result.current.isMenuOpen).toEqual(!currentState)
  })
})
