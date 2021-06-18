import { enGB as en, es } from 'date-fns/locale';
import React, { Fragment, useCallback, useEffect, useMemo, useState } from 'react';
import { DatePickerCalendar } from 'react-nice-dates';

import { DatePickerGlobalStyles, DatePickerWrapper } from './DateStyles';

export enum LanguageDate {
  es = 'es',
  en = 'en'
}

type IProps = {
  locale?: LanguageDate;
  selectedDates?: Date[];
  date?: Date;
  onChange?(date: Date): void;
};

export const DatePicker = ({
  locale = LanguageDate.en,
  selectedDates = [],
  date: dateProp = new Date(),
  onChange
}: IProps) => {
  const [date, setDate] = useState<Date>(dateProp);

  useEffect(() => {
    if (date) {
      onChange && onChange(date);
    }
  }, [date]);

  const compareDates = useCallback(
    (date) => {
      const findDate = selectedDates.find((d) => {
        date.setHours(0, 0, 0, 0);
        d.setHours(0, 0, 0, 0);

        return d.getTime() === date.getTime() ? true : false;
      });

      return findDate ? true : false;
    },
    [selectedDates]
  );

  const modifiersClassNames = {
    highlight: 'day-with-event'
  };

  const modifiers = useMemo(
    () => ({
      highlight: (date: any) => {
        return compareDates(date);
      }
    }),
    [selectedDates]
  );
  const language = locale === LanguageDate.es ? es : en;

  return (
    <Fragment>
      <DatePickerGlobalStyles />
      <DatePickerWrapper>
        <DatePickerCalendar
          modifiers={modifiers}
          locale={language}
          modifiersClassNames={modifiersClassNames}
          date={date}
          onDateChange={(date: Date | null) => date && setDate(date)}
        />
      </DatePickerWrapper>
    </Fragment>
  );
};
