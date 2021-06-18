import React from 'react';

import styled from '@emotion/styled';

import {
    AppIcon, ApplicationIcon, ArrowDownIcon, ArrowUpIcon, BagIcon, BellIcon, BookingIcon,
    CalendarIcon, CheckCircleIcon, ChevronDownIcon, CloseCircleIcon, CloseIcon, CloudCheckIcon,
    CopyIcon, CreditCardIcon, DocumentIcon, EditIcon, ExitIcon, HelpIcon, HiddenIcon, LinkIcon,
    LockIcon, LogOutIcon, MenuIcon, MessageIcon, MinusIcon, NotificationIcon, OffCircleIcon,
    PlayIcon, PlusCircleIcon, PlusIcon, PlusSquareIcon, PublishIcon, SearchIcon, SeeMoreIcon,
    SendIcon, SettingIcon, ShopingIcon, ShopingPurchasedIcon, ShowIcon, ThemeIcon, TrashIcon,
    UploadIcon, UserIcon
} from './index';

export default {
  title: 'Icons'
};

const Grid = styled.div`
  display: Grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 150px));
  row-gap: 24px;
`;

const IconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 0.5rem;
`;

export const Icons = () => {
  return (
    <Grid>
      <IconWrapper>
        <p>CalendarIcon</p>
        <CalendarIcon />
      </IconWrapper>
      <IconWrapper>
        <p>Trashicon</p>
        <TrashIcon />
      </IconWrapper>
      <IconWrapper>
        <p>NotificationIcon</p>
        <NotificationIcon />
      </IconWrapper>
      <IconWrapper>
        <p>CloudCheckIcon</p>
        <CloudCheckIcon />
      </IconWrapper>
      <IconWrapper>
        <p>UploadIcon</p>
        <UploadIcon />
      </IconWrapper>
      <IconWrapper>
        <p>EditIcon</p>
        <EditIcon />
      </IconWrapper>
      <IconWrapper>
        <p>ThemeIcon</p>
        <ThemeIcon />
      </IconWrapper>
      <IconWrapper>
        <p>CopyIcon</p>
        <CopyIcon />
      </IconWrapper>
      <IconWrapper>
        <p>ExitIcon</p>
        <ExitIcon />
      </IconWrapper>
      <IconWrapper>
        <p>LogOutIcon</p>
        <LogOutIcon />
      </IconWrapper>
      <IconWrapper>
        <p>BellIcon</p>
        <BellIcon />
      </IconWrapper>
      <IconWrapper>
        <p>UserIcon</p>
        <UserIcon />
      </IconWrapper>
      <IconWrapper>
        <p>PublishIcon</p>
        <PublishIcon />
      </IconWrapper>
      <IconWrapper>
        <p>SearchIcon</p>
        <SearchIcon />
      </IconWrapper>
      <IconWrapper>
        <p>SeeMoreIcon</p>
        <SeeMoreIcon />
      </IconWrapper>
      <IconWrapper>
        <p>PlusIcon</p>
        <PlusIcon />
      </IconWrapper>
      <IconWrapper>
        <p>SendIcon</p>
        <SendIcon />
      </IconWrapper>
      <IconWrapper>
        <p>ShopingIcon</p>
        <ShopingIcon />
      </IconWrapper>
      <IconWrapper>
        <p>PlusCircleIcon</p>
        <PlusCircleIcon />
      </IconWrapper>
      <IconWrapper>
        <p>PlusSquareIcon</p>
        <PlusSquareIcon />
      </IconWrapper>
      <IconWrapper>
        <p>ApplicationIcon</p>
        <ApplicationIcon />
      </IconWrapper>
      <IconWrapper>
        <p>LockIcon</p>
        <LockIcon />
      </IconWrapper>
      <IconWrapper>
        <p>BagIcon</p>
        <BagIcon />
      </IconWrapper>
      <IconWrapper>
        <p>MenuIcon</p>
        <MenuIcon />
      </IconWrapper>
      <IconWrapper>
        <p>PlayIcon</p>
        <PlayIcon />
      </IconWrapper>
      <IconWrapper>
        <p>CreditCardIcon</p>
        <CreditCardIcon />
      </IconWrapper>
      <IconWrapper>
        <p>MessageIcon</p>
        <MessageIcon />
      </IconWrapper>
      <IconWrapper>
        <p>ShopingPurchasedIcon</p>
        <ShopingPurchasedIcon />
      </IconWrapper>
      <IconWrapper>
        <p>ChevronDownIcon</p>
        <ChevronDownIcon />
      </IconWrapper>
      <IconWrapper>
        <p>ShowIcon</p>
        <ShowIcon />
      </IconWrapper>
      <IconWrapper>
        <p>HiddenIcon</p>
        <HiddenIcon />
      </IconWrapper>
      <IconWrapper>
        <p>HelpIcon</p>
        <HelpIcon />
      </IconWrapper>
      <IconWrapper>
        <p>CloseIcon</p>
        <CloseIcon />
      </IconWrapper>
      <IconWrapper>
        <p>SettingIcon</p>
        <SettingIcon />
      </IconWrapper>
      <IconWrapper>
        <p>ArrowUpIcon</p>
        <ArrowUpIcon />
      </IconWrapper>
      <IconWrapper>
        <p>ArrowDownIcon</p>
        <ArrowDownIcon />
      </IconWrapper>
      <IconWrapper>
        <p>LinkIcon</p>
        <LinkIcon />
      </IconWrapper>
      <IconWrapper>
        <p>BookingIcon</p>
        <BookingIcon />
      </IconWrapper>
      <IconWrapper>
        <p>MinusIcon</p>
        <MinusIcon />
      </IconWrapper>
      <IconWrapper>
        <p>OffCircleIcon</p>
        <OffCircleIcon />
      </IconWrapper>
      <IconWrapper>
        <p>CheckCircleIcon</p>
        <CheckCircleIcon />
      </IconWrapper>
      <IconWrapper>
        <p>CloseCircleIcon</p>
        <CloseCircleIcon />
      </IconWrapper>
      <IconWrapper>
        <p>AppIcon</p>
        <AppIcon />
      </IconWrapper>
      <IconWrapper>
        <p>DocumentIcon</p>
        <DocumentIcon />
      </IconWrapper>
    </Grid>
  );
};
