import {
  createContext,
  useState,
  useContext,
  useRef,
  SetStateAction,
  Dispatch
} from 'react'
import { usePopper } from 'react-popper'

type PopperStylesProps = {
  [key: string]: React.CSSProperties
}

type PopperAttributesProps = {
  [key: string]: { [key: string]: string } | undefined
}

type DropdownContextData = {
  showMenu: () => void
  hideMenu: () => void
  toggleMenu: () => void
  dropdownRef: React.RefObject<HTMLDivElement>
  buttonRef: React.RefObject<HTMLButtonElement>
  popperRef: React.RefObject<HTMLDivElement>
  popperStyles: PopperStylesProps
  popperAttrs: PopperAttributesProps
  setArrowRef: Dispatch<SetStateAction<HTMLDivElement | null>>
  isMenuOpen: boolean
}

const DropdownContext = createContext<DropdownContextData>(
  {} as DropdownContextData
)

const DropdownProvider: React.FC = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [arrowRef, setArrowRef] = useState<HTMLDivElement | null>(null)
  const dropdownRef = useRef<HTMLDivElement | null>(null)
  const buttonRef = useRef<HTMLButtonElement | null>(null)
  const popperRef = useRef<HTMLDivElement | null>(null)
  const { styles: popperStyles, attributes: popperAttrs } = usePopper(
    buttonRef.current,
    popperRef.current,
    {
      placement: 'bottom-start',
      modifiers: [
        {
          name: 'flip',
          options: {
            allowedAutoPlacements: ['left', 'right']
          }
        },
        {
          name: 'arrow',
          options: {
            element: arrowRef
          }
        },
        {
          name: 'offset',
          options: {
            offset: [0, 0]
          }
        }
      ]
    }
  )

  const hideMenu = () => {
    setIsMenuOpen(false)
  }

  const showMenu = () => {
    setIsMenuOpen(true)
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <DropdownContext.Provider
      value={{
        showMenu,
        hideMenu,
        toggleMenu,
        buttonRef,
        dropdownRef,
        popperRef,
        popperStyles,
        popperAttrs,
        isMenuOpen,
        setArrowRef
      }}
    >
      {children}
    </DropdownContext.Provider>
  )
}

function useDropdown(): DropdownContextData {
  const context = useContext(DropdownContext)

  return context
}

export { DropdownProvider, useDropdown }
