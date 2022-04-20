import { DropdownButton } from 'components/DropdownButton'
import { DropdownItem } from 'components/DropdownItem'
import { DropdownMenu } from 'components/DropdownMenu'
import { DropdownProvider } from 'hooks/dropdown'
import { ReactNode } from 'react'

export type DropdownProps = {
  children: ReactNode
}

export const Dropdown = ({ children }: DropdownProps) => {
  return <DropdownProvider>{children}</DropdownProvider>
}

Dropdown.Button = DropdownButton
Dropdown.Item = DropdownItem
Dropdown.Menu = DropdownMenu
