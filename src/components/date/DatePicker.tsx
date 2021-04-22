import React, {
  Fragment,
  useCallback,
  useEffect,
  useMemo,
  useState
} from 'react';
import { Calendar } from 'react-nice-dates';
import * as es from 'date-fns/locale/es/index.js';
import * as en from 'date-fns/locale/en-GB/index.js';

import { DatePickerGlobalStyles, DatePickerWrapper } from './Styles';

export enum LanguageDate {
  es = 'es',
  en = 'en'
}

type IProps = {
  locale?: LanguageDate;
  selectedDates?: Date[];
  onChange?(date: Date): void;
};

export const DatePicker = ({
  locale = LanguageDate.en,
  selectedDates = [],
  onChange
}: IProps) => {
  const [date, setDate] = useState<Date>();

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
        <Calendar
          modifiers={modifiers}
          locale={language}
          modifiersClassNames={modifiersClassNames}
          onDateChange={setDate}
        />
      </DatePickerWrapper>
    </Fragment>
  );
};
