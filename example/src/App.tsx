import React from 'react';
import styled from '@emotion/styled';
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
  LockIcon,
  InputUpload,
  EnglandIcon,
  SpainIcon,
  CreditCardIcon,
  LogOutIcon,
  UserIcon,
  OptionMenu,
  OptionMenuItem,
  OptionMenuSeparator,
  OptionMenuHeader,
  Switch,
  Card,
  EditIcon,
  ThemeIcon,
  Tabs,
  TabPanel,
  PlayIcon,
  AddIcon,
  UploadIcon,
  PublishIcon,
  Alert,
  StateAlert,
  ApplyIcon,
  SeeMoreIcon,
  FileIcon,
  ShopingIcon,
  TextArea,
  AlertFillIcon,
  WarningIcon,
  Tag,
  TablePortal
} from 'joinble-ui';
import { DropdownOption } from '../../dist/components/dropdown/model';

type IGridProps = {
  size?: number;
};

const App = () => {
  const Layout = styled.section`
    margin: 1rem;
  `;

  const Section = styled.div`
    margin-bottom: 0.5rem;
    border-bottom: 1px solid black;
    padding-bottom: 2rem;
  `;

  const Title = styled.h2`
    font-size: 1.5rem;
    margin-bottom: 1rem;
    margin-top: 0;
  `;

  const Grid = styled.div<IGridProps>`
    grid-column-gap: 1rem;
    grid-row-gap: 1rem;
    display: ${(props) => (props.size ? 'grid' : 'flex')};
    ${(props) =>
      props.size &&
      `
    grid-template-columns: repeat(auto-fit, minmax(${props.size}px, 1fr))
    `}
  `;

  const optionsPlatform: ICheckPlatform[] = [
    {
      id: '1',
      icon: <AndroidIcon />,
      name: 'android'
    },
    {
      id: '2',
      icon: <AppleIcon />,
      name: 'apple'
    }
  ];

  const optionsDropdown: DropdownOption[] = [
    { name: 'name-1', value: 'name-1' },
    { name: 'name-2', value: 'name-2' },
    { name: 'name-3', value: 'name-3' }
  ];

  return (
    <>
      <GlobalStyles />
      <Layout>
        <Section>
          <Title>Button</Title>
          <Grid size={300}>
            <Button onClick={() => alert('click')}>Primary</Button>
            <Button onClick={() => alert('click')} outline>
              outline
            </Button>
            <Button onClick={() => alert('click')} disabled>
              primary disabled
            </Button>
            <Button onClick={() => alert('click')} outline disabled>
              outline disabled
            </Button>
            <Button onClick={() => alert('click')} icon={<PlusIcon />}>
              with Icon
            </Button>
            <Button onClick={() => alert('click')} outline icon={<PlusIcon />}>
              outline with Icon
            </Button>
            <Button onClick={() => alert('click')} disabled icon={<PlusIcon />}>
              with Icon disabled
            </Button>
            <Button
              onClick={() => alert('click')}
              disabled
              outline
              icon={<PlusIcon />}
            >
              outline with Icon disabled
            </Button>
            <Button onClick={() => alert('click')} loading>
              loading...
            </Button>
            <Button onClick={() => alert('click')} loading outline>
              saving...
            </Button>
            <Button onClick={() => alert('click')} loading error>
              saving...
            </Button>
            <Button onClick={() => alert('click')} loading warning>
              saving...
            </Button>
            <Button onClick={() => alert('click')} loading success>
              saving...
            </Button>
            <Button onClick={() => alert('click')} error>
              error
            </Button>
            <Button onClick={() => alert('click')} success>
              success
            </Button>
            <Button onClick={() => alert('click')} warning>
              warning
            </Button>
            <Button onClick={() => alert('click')} disabled error>
              error
            </Button>
            <Button onClick={() => alert('click')} disabled success>
              success
            </Button>
            <Button onClick={() => alert('click')} disabled warning>
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
            <Input placeHolder='With icon' icon={<SearchIcon />} />

            <Input
              label='with icon and error'
              icon={<SearchIcon />}
              errorLabel='Error'
            />
            <Input label='with label and error' errorLabel='Error label' />
            <Input errorLabel='Error label' />
            <Input label='Disabled' disabled />
            <Input
              label='Help label'
              helpLabel='A block of help text that breaks onto a new line and may extend beyond one line.'
            />
          </Grid>
        </Section>
        <Section>
          <Title>Textarea</Title>
          <Grid size={300}>
            <TextArea placeHolder='With label' />
            <TextArea placeHolder='With label' label='TextArea' />
            <TextArea
              placeHolder='help label'
              label='help label'
              helpLabel='help label'
            />
            <TextArea
              placeHolder='error label'
              label='error label'
              errorLabel='error label'
            />
          </Grid>
        </Section>
        <Section>
          <Title>Dropdown</Title>
          <Grid size={250}>
            <Dropdown label='label' options={optionsDropdown} />
            <Dropdown
              label='label'
              errorLabel='Error'
              options={optionsDropdown}
            />
            <Dropdown
              label='label'
              helpLabel='help label'
              options={optionsDropdown}
            />
            <Dropdown label='disabled' options={optionsDropdown} disabled />
          </Grid>
        </Section>
        <Section>
          <Title>Tabs</Title>
          <Grid size={250}>
            <Tabs active='1'>
              <TabPanel name='Tab1' id='1'>
                Hello Tab 1
              </TabPanel>
              <TabPanel name='Tab2 disabled' id='2' disabled>
                Hello Tab 2
              </TabPanel>
              <TabPanel name='Tab3' id='3' icon={<WidgetIcon />}>
                Hello Tab 3
              </TabPanel>
            </Tabs>
          </Grid>
        </Section>
        <Section>
          <Title>Table</Title>
          <Grid>
            <TablePortal />
          </Grid>
        </Section>
        <Section>
          <Title>Icons</Title>
          <Grid>
            <WarningIcon />
            <AlertFillIcon />
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
            <EnglandIcon />
            <SpainIcon />
            <CreditCardIcon />
            <LogOutIcon />
            <UserIcon />
            <ThemeIcon />
            <PlayIcon />
            <AddIcon />
            <PublishIcon />
            <UploadIcon />
            <ApplyIcon />
            <SeeMoreIcon />
            <FileIcon />
          </Grid>
        </Section>
        <Section>
          <Title>Check platform</Title>
          <Grid>
            <CheckPlatform options={optionsPlatform} />
            <CheckPlatform options={optionsPlatform} bigIcon />
          </Grid>
        </Section>
        <Section>
          <Title>ButtonMenu</Title>
          <Grid>
            <OptionMenu renderItem={<ButtonIcon icon={<SearchIcon />} />}>
              <OptionMenuHeader>Prueba</OptionMenuHeader>
              <OptionMenuItem>item prueba</OptionMenuItem>
              <OptionMenuSeparator />
              <OptionMenuItem>
                <LockIcon />
                item prueba icono
              </OptionMenuItem>
              <OptionMenuItem href='www.marca.com'>anchor</OptionMenuItem>
            </OptionMenu>
          </Grid>
        </Section>
        <Section>
          <Title>Color Picker</Title>
          <Grid>
            <ColorPicker
              label='Select Primary color'
              value={JoinbleTheme.colors.primary.greenLight}
            />
          </Grid>
        </Section>
        <Section>
          <Title>Tags</Title>
          <Grid>
            <Tag label='android' />
            <Tag label='android' disabled />
            <Tag label='android' withTooltip />
            <Tag
              label='android'
              withTooltip
              onClick={() => alert('click tag')}
            />
            <Tag
              label='android'
              withTooltip
              onClick={() => alert('click tag')}
              disabled
            />
            <Tag label='android' type='warning' />
            <Tag label='android' withTooltip type='warning' />
            <Tag
              label='android'
              withTooltip
              onClick={() => alert('click tag')}
              type='warning'
            />
            <Tag
              label='tag with a label very very very very very very very very very large'
              type='success'
              withTooltip
            />
            <Tag
              label='tag with a label very very very very very very very very very large'
              type='success'
              onClick={() => alert('click tag')}
              withTooltip
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
          <Title>Switch</Title>
          <Grid size={250}>
            <Switch labelLeft='label left' />
            <Switch labelRight='label right' />
            <Switch labelLeft='Input checked' checked />
            <Switch labelLeft='Input disabled' disabled />
            <Switch labelLeft='Input checked and disabled' disabled checked />
            <Switch labelLeft='Input with error' errorLabel='Field required' />
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
          <Title>Alert</Title>
          <Grid>
            <Alert
              id='1'
              title='title'
              message='lorem'
              type={StateAlert.warning}
            />
            <Alert
              id='2'
              title='title'
              message='lorem'
              type={StateAlert.error}
            />
            <Alert
              id='3'
              title='title'
              message='lorem'
              type={StateAlert.info}
            />
            <Alert
              id='4'
              title='title'
              message='lorem'
              type={StateAlert.success}
            />
          </Grid>
        </Section>
        <Section>
          <Title>Cards</Title>
          <Grid>
            <Card
              id='card-app'
              title='title'
              lastUpdate='06/01/21'
              image={<ShopingIcon />}
              actions={
                <ButtonIcon
                  secondary
                  icon={<EditIcon />}
                  onClick={() => alert('click card action')}
                />
              }
            />
            <Card
              id='card-app'
              title='title'
              lastUpdate='06/01/21'
              image='https://miro.medium.com/max/3600/1*HSisLuifMO6KbLfPOKtLow.jpeg'
              actions={
                <ButtonIcon
                  secondary
                  icon={<EditIcon />}
                  onClick={() => alert('click card action')}
                />
              }
            />
            <Card
              id='card-app'
              title='title'
              lastUpdate='06/01/21'
              imageBig
              image={<ShopingIcon />}
              actions={
                <ButtonIcon
                  secondary
                  icon={<EditIcon />}
                  onClick={() => alert('click card action')}
                />
              }
            />
            <Card
              id='card-app'
              title='title'
              lastUpdate='06/01/21'
              imageBig
              image='https://miro.medium.com/max/3600/1*HSisLuifMO6KbLfPOKtLow.jpeg'
              actions={
                <ButtonIcon
                  secondary
                  icon={<EditIcon />}
                  onClick={() => alert('click card action')}
                />
              }
            />
            <Card
              id='card-app'
              title='title'
              lastUpdate='06/01/21'
              imageBig
              image='https://miro.medium.com/max/3600/1*HSisLuifMO6KbLfPOKtLow.jpeg'
              header={
                <>
                  <PlayIcon /> <p>Card Header </p>
                </>
              }
              actions={
                <ButtonIcon
                  secondary
                  icon={<EditIcon />}
                  onClick={() => alert('click card action')}
                />
              }
            />
          </Grid>
        </Section>
        <Section>
          <Title>Modal</Title>
          <Grid></Grid>
        </Section>
        <Section>
          <Title>Input Upload</Title>
          <Grid>
            <InputUpload label='Upload file' />
            <InputUpload
              label='Upload file with error'
              errorLabel='This format is not supported'
            />
            <InputUpload
              label='Upload file with help '
              helpLabel='Recommended size: 92x92'
            />
            <InputUpload label='Upload file circle ' circle />
          </Grid>
        </Section>
      </Layout>
    </>
  );
};

export default App;
