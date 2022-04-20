import { Dropdown } from 'components/Dropdown'
import { MoreIcon } from 'components/MoreIcon'
import theme from 'styles/theme'

export default function Home() {
  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center'
      }}
    >
      <h3
        style={{
          fontSize: 24,
          paddingBottom: 24
        }}
      >
        Click me!
      </h3>
      <Dropdown>
        <Dropdown.Button>
          <MoreIcon color={theme.colors.white100} size={32} />
        </Dropdown.Button>
        <Dropdown.Menu>
          <Dropdown.Item onClick={() => alert('Hey!')}>Hey!</Dropdown.Item>
          <Dropdown.Item as="a" href="https://google.com" target="_blank">
            Access google
          </Dropdown.Item>
          <Dropdown.Item onClick={() => alert('This is the last button')}>
            Last button
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  )
}
