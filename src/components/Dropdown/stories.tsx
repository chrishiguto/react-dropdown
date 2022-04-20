import { Story, Meta } from '@storybook/react/types-6-0'
import { action } from '@storybook/addon-actions'
import { MoreIcon } from 'components/MoreIcon'
import { Dropdown, DropdownProps } from '.'
import theme from 'styles/theme'
import { redirect } from 'next/dist/server/api-utils'

export default {
  title: 'Dropdown',
  argTypes: {
    children: {
      type: 'string'
    }
  },
  component: Dropdown
} as Meta

export const Default: Story<DropdownProps> = () => (
  <Dropdown>
    <Dropdown.Button>
      <MoreIcon color={theme.colors.white100} size={32} />
    </Dropdown.Button>
    <Dropdown.Menu>
      <Dropdown.Item onClick={action('First button')}>
        First button
      </Dropdown.Item>
      <Dropdown.Item as="a" href="https://google.com" target="_blank">
        Access google
      </Dropdown.Item>
      <Dropdown.Item onClick={action('Last button')}>Last button</Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown>
)

export const ScreenAdaptive: Story<DropdownProps> = () => (
  <div
    style={{
      height: '200vh'
    }}
  >
    <h3
      style={{
        padding: 24,
        fontSize: 24,
        background: '#eee',
        display: 'flex'
      }}
    >
      Scroll down, open the menu and scroll up and down to see the menu
      repositioning with PopperJS
    </h3>
    <div
      style={{
        height: '100%',
        display: 'flex',
        alignItems: 'center'
      }}
    >
      <Dropdown>
        <Dropdown.Button>
          <MoreIcon color={theme.colors.white100} size={32} />
        </Dropdown.Button>
        <Dropdown.Menu>
          <Dropdown.Item onClick={action('First button')}>
            First button
          </Dropdown.Item>
          <Dropdown.Item as="a" href="https://google.com" target="_blank">
            Access google
          </Dropdown.Item>
          <Dropdown.Item onClick={action('Last button')}>
            Last button
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  </div>
)

export const RightAligned: Story<DropdownProps> = () => (
  <div
    style={{
      width: '100%',
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'flex-end'
    }}
  >
    <Dropdown>
      <Dropdown.Button>
        <MoreIcon color={theme.colors.white100} size={32} />
      </Dropdown.Button>
      <Dropdown.Menu>
        <Dropdown.Item onClick={action('First button')}>
          First button
        </Dropdown.Item>
        <Dropdown.Item as="a" href="https://google.com" target="_blank">
          Access google
        </Dropdown.Item>
        <Dropdown.Item onClick={action('Last button')}>
          Last button
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  </div>
)
