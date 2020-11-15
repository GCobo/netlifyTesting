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
  Modal
} from 'joinble-ui'
import 'joinble-ui/dist/index.css'

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
  const Grid = styled.div(
    {
      gridColumnGap: '1rem',
      gridRowGap: '1rem'
    },
    (props: any) => ({
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
          <Grid size='300'>
            <Button>Primary</Button>
            <Button secondary> secondary</Button>
            <Button disabled> primary disabled</Button>
            <Button secondary disabled>
              secondary disabled
            </Button>
            <Button icon={<SearchIcon />}> with Icon</Button>
            <Button secondary icon={<SearchIcon />}>
              secondary with Icon
            </Button>
            <Button disabled icon={<SearchIcon />}>
              with Icon disabled
            </Button>
            <Button disabled secondary icon={<SearchIcon />}>
              secondary with Icon disabled
            </Button>
            <Button loading></Button>
            <Button error>error</Button>
            <Button success>success</Button>
            <Button warning>warning</Button>
          </Grid>
        </Section>
        <Section>
          <Title>Button Icon</Title>
          <Grid>
            <ButtonIcon icon={<AlertIcon />} />
            <ButtonIcon icon={<SearchIcon />} />
          </Grid>
        </Section>
        <Section>
          <Title>Button Social Media</Title>
          <Grid>
            <ButtonSocialMedia social={socialMedia.google} />
            <ButtonSocialMedia social={socialMedia.facebook} />
            <ButtonSocialMedia social={socialMedia.twitter} />
            <ButtonSocialMedia social={socialMedia.linkedin} />
          </Grid>
        </Section>
        <Section>
          <Title>Input</Title>
          <Grid size='300'>
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
          <Grid size='250'>
            <Dropdown label='label' />
            <Dropdown label='label' errorLabel='Error' />
            <Dropdown label='label' helpLabel='help label' />
          </Grid>
        </Section>
        <Section>
          <Title>Icons</Title>
          <Grid>
            <SearchIcon />
            <AlertIcon />
            <HelpIcon />
            <ChevronDownIcon />
          </Grid>
        </Section>
        <Section>
          <Title>Link</Title>
          <Grid>
            <Link hRef=''>Links</Link>
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
          <Grid size='150'>
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
