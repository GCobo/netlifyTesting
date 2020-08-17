import React from 'react'
import styled from '@emotion/styled'
import {
  Button,
  SearchIcon,
  Input,
  GlobalStyles,
  AlertIcon,
  ErrorLabel,
  HelpLabel,
  HelpIcon,
  Checkbox
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
      columnGap: '1rem',
      rowGap: '1rem'
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
          <Grid size='350'>
            <Button>Button</Button>
            <Button secondary>Button secondary</Button>
            <Button disabled>Button primary disabled</Button>
            <Button secondary disabled>
              Button secondary disabled
            </Button>
            <Button icon={<SearchIcon />}>Button with Icon</Button>
            <Button secondary icon={<SearchIcon />}>
              Button secondary with Icon
            </Button>
            <Button disabled icon={<SearchIcon />}>
              Button with Icon disabled
            </Button>
            <Button disabled secondary icon={<SearchIcon />}>
              Button secondary with Icon disabled
            </Button>
          </Grid>
        </Section>
        <Section>
          <Title>Input</Title>
          <Grid size='250'>
            <Input label='With label' placeHolder='With label' />
            <Input label='Number' inputType='number' />
            <Input label='Password' inputType='password' />
            <Input label='Email' inputType='email' />
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
          <Title>Icons</Title>
          <Grid>
            <SearchIcon />
            <AlertIcon />
            <HelpIcon />
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
          <Grid size='250'>
            <Checkbox labelLeft='label left' />
            <Checkbox labelRight='label right' />
            <Checkbox labelLeft='Input checked' checked />
            <Checkbox labelLeft='Input disabled' disabled />
            <Checkbox labelLeft='Input checked and disabled' disabled checked />
          </Grid>
        </Section>
      </Layout>
    </>
  )
}

export default App
