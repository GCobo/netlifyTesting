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
  Dropdown,
  ChevronDownIcon,
  ButtonSocialMedia,
  socialMedia,
  Loading,
  Link,
  Modal,
  ColorPicker,
  HamburguerIcon,
  NotificationIcon,
  Badgets,
  ApplicationIcon,
  WidgetIcon,
  MessageIcon,
  Checkbox,
  PlusIcon,
  TrashIcon,
  AppleIcon,
  CloseIcon,
  AndroidIcon,
  CheckPlatform,
  ICheckPlatform,
  Tooltip,
  JoinbleTheme,
  ExitIcon,
  LockIcon
} from 'joinble-ui'

type IGridProps = {
  size?: number
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

  const optionsPlatform: ICheckPlatform[] = [
    {
      id: 1,
      icon: <AndroidIcon />
    },
    {
      id: 2,
      icon: <AppleIcon />
    }
  ]

  return (
    <>
      <GlobalStyles />
      <Layout>
        <Section>
          <Title>Button</Title>
          <Grid size={300}>
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
            <Button onClick={() => alert('click')} icon={<PlusIcon />}>
              with Icon
            </Button>
            <Button
              onClick={() => alert('click')}
              secondary
              icon={<PlusIcon />}
            >
              secondary with Icon
            </Button>
            <Button onClick={() => alert('click')} disabled icon={<PlusIcon />}>
              with Icon disabled
            </Button>
            <Button
              onClick={() => alert('click')}
              disabled
              secondary
              icon={<PlusIcon />}
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
              secondary
              onClick={() => alert('click')}
              icon={<AlertIcon />}
            />
            <ButtonIcon
              negative
              onClick={() => alert('click')}
              icon={<AlertIcon />}
            />
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
          <Grid size={300}>
            <Input label='With label' placeHolder='With label' />
            <Input label='Number' type='number' />
            <Input label='Password' type='password' />
            <Input label='Email' type='email' />
            <Input label='with icon' icon={<SearchIcon />} />
            <Input
              label='with icon and error'
              icon={<SearchIcon />}
              errorLabel='Error'
            />
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
          <Grid size={250}>
            <Dropdown label='label' />
            <Dropdown label='label' errorLabel='Error' />
            <Dropdown label='label' helpLabel='help label' />
          </Grid>
        </Section>
        <Section>
          <Title>Icons</Title>
          <Grid>
            <AlertIcon />
            <AndroidIcon />
            <ApplicationIcon />
            <ChevronDownIcon />
            <HamburguerIcon />
            <HelpIcon />
            <MessageIcon />
            <NotificationIcon />
            <PlusIcon />
            <TrashIcon />
            <AppleIcon />
            <CloseIcon />
            <SearchIcon />
            <WidgetIcon />
            <ExitIcon />
            <LockIcon />
          </Grid>
        </Section>
        <Section>
          <Title>Check platform</Title>
          <Grid>
            <CheckPlatform options={optionsPlatform} />
          </Grid>
        </Section>
        <Section>
          <Title>Color Picker</Title>
          <Grid>
            <ColorPicker
              label='Select Primary color'
              value={JoinbleTheme.colors.primaryColor}
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
          <Title>Tooltip</Title>
          <Grid>
            <Tooltip label='tooltip top' id='tooltip-test' place='top'>
              <p>Tooltip top</p>
            </Tooltip>
            <Tooltip label='tooltip bottom' id='tooltip-test' place='bottom'>
              <p>Tooltip bottom</p>
            </Tooltip>
            <Tooltip label='tooltip left' id='tooltip-test' place='left'>
              <p>Tooltip left</p>
            </Tooltip>
            <Tooltip label='tooltip right' id='tooltip-test' place='right'>
              <p>Tooltip right</p>
            </Tooltip>
          </Grid>
        </Section>
        <Section>
          <Title>Error label</Title>
          <Grid>
            <ErrorLabel label='Error label' />
          </Grid>
        </Section>
        <Section>
          <Title>Help label</Title>
          <Grid>
            <HelpLabel
              label='A block of help text that breaks onto a new line and may extend
              beyond one line.'
            />
          </Grid>
        </Section>
        <Section>
          <Title>Checkbox</Title>
          <Grid size={250}>
            <Checkbox labelLeft='label left' />
            <Checkbox labelRight='label right' />
            <Checkbox labelLeft='Input checked' checked />
            <Checkbox labelLeft='Input disabled' disabled />
            <Checkbox labelLeft='Input checked and disabled' disabled checked />
            <Checkbox
              labelLeft='Input with error'
              errorLabel='Field required'
            />
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
