import React from 'react'
import styled from '@emotion/styled'
import { Button, SearchIcon } from 'joinble-ui'
import 'joinble-ui/dist/index.css'

const App = () => {
  const Layout = styled.section`
    margin: 1rem;
  `
  const Section = styled.div`
    margin-bottom: 0.5rem;
    border-bottom: 1px solid black;
    padding-bottom: 1rem;
  `
  const Title = styled.h2`
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
    margin-top: 0;
  `
  const Grid = styled.div(
    {
      display: 'grid',
      columnGap: '1rem',
      rowGap: '1rem'
    },
    (props: any) => ({
      gridTemplateColumns: `repeat(auto-fit, minmax(${props.size}px, 1fr))`
    })
  )

  return (
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
    </Layout>
  )
}

export default App
