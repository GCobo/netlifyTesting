import React from 'react'
import styled from '@emotion/styled'
import {
  Button,
  ButtonIcon,
  SearchIcon,
  Input,
  GlobalStyles,
  AlertIcon,
  ErrorLabel,
  HelpLabel,
  HelpIcon,
  Checkbox,
  Dropdown,
  ChevronDownIcon,
  ButtonSocialMedia,
  socialMedia,
  Loading,
  Link,
  Modal,
  ColorPicker,
  JoinbleTheme,
  HamburguerIcon,
  NotificationIcon,
  Badgets,
  ApplicationIcon,
  WidgetIcon,
  MessageIcon
} from 'joinble-ui'

type IGridProps = {
  size?: 'grid' | 'flex'
}

const App = () => {
  const Layout = styled.section`
    margin: 1rem;
  `
  const Section = styled.div`
    margin-bottom: 0.5rem;
    border-bottom: 1px solid black;
    padding-bottom: 2rem;
  `
  const Title = styled.h2`
    font-size: 1.5rem;
    margin-bottom: 1rem;
    margin-top: 0;
  `
  const Grid = styled.div<IGridProps>(
    {
      gridColumnGap: '1rem',
      gridRowGap: '1rem'
    },
    (props: IGridProps) => ({
      display: `${props.size ? 'grid' : 'flex'}`,
      gridTemplateColumns: `repeat(auto-fit, minmax(${props.size}px, 1fr))`
    })
  )

  return (
    <>
      <GlobalStyles />
      <Layout>
        <Section>
          <Title>Button</Title>
          <Grid size='grid'>
            <Button onClick={() => alert('click')}>Primary</Button>
            <Button onClick={() => alert('click')} secondary>
              secondary
            </Button>
            <Button onClick={() => alert('click')} disabled>
              primary disabled
            </Button>
            <Button onClick={() => alert('click')} secondary disabled>
              secondary disabled
            </Button>
            <Button onClick={() => alert('click')} icon={<SearchIcon />}>
              with Icon
            </Button>
            <Button
              onClick={() => alert('click')}
              secondary
              icon={<SearchIcon />}
            >
              secondary with Icon
            </Button>
            <Button
              onClick={() => alert('click')}
              disabled
              icon={<SearchIcon />}
            >
              with Icon disabled
            </Button>
            <Button
              onClick={() => alert('click')}
              disabled
              secondary
              icon={<SearchIcon />}
            >
              secondary with Icon disabled
            </Button>
            <Button onClick={() => alert('click')} loading></Button>
            <Button onClick={() => alert('click')} error>
              error
            </Button>
            <Button onClick={() => alert('click')} success>
              success
            </Button>
            <Button onClick={() => alert('click')} warning>
              warning
            </Button>
          </Grid>
        </Section>
        <Section>
          <Title>Button Icon</Title>
          <Grid>
            <ButtonIcon onClick={() => alert('click')} icon={<AlertIcon />} />
            <ButtonIcon onClick={() => alert('click')} icon={<SearchIcon />} />
            <ButtonIcon
              badgetsNumber={9}
              onClick={() => alert('click')}
              icon={<NotificationIcon />}
            />
            <ButtonIcon
              badgetsNumber={99}
              onClick={() => alert('click')}
              icon={<NotificationIcon />}
            />
            <ButtonIcon
              badgetsNumber={999}
              onClick={() => alert('click')}
              icon={<NotificationIcon />}
            />
          </Grid>
        </Section>
        <Section>
          <Title>Button Social Media</Title>
          <Grid>
            <ButtonSocialMedia
              social={socialMedia.google}
              onClick={() => alert('click')}
            />
            <ButtonSocialMedia
              social={socialMedia.facebook}
              onClick={() => alert('click')}
            />
            <ButtonSocialMedia
              social={socialMedia.twitter}
              onClick={() => alert('click')}
            />
            <ButtonSocialMedia
              social={socialMedia.linkedin}
              onClick={() => alert('click')}
            />
            <ButtonSocialMedia
              social={socialMedia.github}
              onClick={() => alert('click')}
            />
          </Grid>
        </Section>
        <Section>
          <Title>Input</Title>
          <Grid size='grid'>
            <Input label='With label' placeHolder='With label' />
            <Input label='Number' type='number' />
            <Input label='Password' type='password' />
            <Input label='Email' type='email' />
            <Input label='with icon' icon={<SearchIcon />} />
            <Input label='with label and error' errorLabel='Error label' />
            <Input label='Disabled' disabled />
            <Input
              label='Help label'
              helpLabel='A block of help text that breaks onto a new line and may extend beyond one line.'
            />
          </Grid>
        </Section>
        <Section>
          <Title>Dropdown</Title>
          <Grid size='grid'>
            <Dropdown label='label' />
            <Dropdown label='label' errorLabel='Error' />
            <Dropdown label='label' helpLabel='help label' />
          </Grid>
        </Section>
        <Section>
          <Title>Icons</Title>
          <Grid>
            <AlertIcon />
            <ApplicationIcon />
            <ChevronDownIcon />
            <HamburguerIcon />
            <HelpIcon />
            <MessageIcon />
            <NotificationIcon />
            <SearchIcon />
            <WidgetIcon />
          </Grid>
        </Section>
        <Section>
          <Title>Color Picker</Title>
          <Grid>
            <ColorPicker
              label='Select Primary color'
              value={JoinbleTheme.primaryColor}
            />
          </Grid>
        </Section>
        <Section>
          <Title>Link</Title>
          <Grid>
            <Link href=''>Links</Link>
          </Grid>
        </Section>
        <Section>
          <Title>Error label</Title>
          <Grid>
            <ErrorLabel>error label</ErrorLabel>
          </Grid>
        </Section>
        <Section>
          <Title>Help label</Title>
          <Grid>
            <HelpLabel>
              A block of help text that breaks onto a new line and may extend
              beyond one line.
            </HelpLabel>
          </Grid>
        </Section>
        <Section>
          <Title>Checkbox</Title>
          <Grid size='grid'>
            <Checkbox labelLeft='label left' />
            <Checkbox labelRight='label right' />
            <Checkbox labelLeft='Input checked' checked />
            <Checkbox labelLeft='Input disabled' disabled />
            <Checkbox labelLeft='Input checked and disabled' disabled checked />
          </Grid>
        </Section>
        <Section>
          <Title>Loading</Title>
          <Grid>
            <Loading />
          </Grid>
        </Section>
        <Section>
          <Title>Badgets</Title>
          <Grid>
            <Badgets number={9} />
            <Badgets number={99} />
            <Badgets number={999} />
          </Grid>
        </Section>
        <Section>
          <Title>Modal</Title>
          <Grid>
            <Modal>Modal</Modal>
          </Grid>
        </Section>
      </Layout>
    </>
  )
}

export default App
