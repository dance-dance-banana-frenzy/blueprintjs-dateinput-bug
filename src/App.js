import React , { useState } from 'react';
import { DateInput } from '@blueprintjs/datetime';
import isValid from 'date-fns/isValid';
import isDate from 'date-fns/isDate';
import format from 'date-fns/format';
import parse from 'date-fns/parse';
import '@blueprintjs/datetime/lib/css/blueprint-datetime.css';

const FORMAT = 'yyyy-MM-dd';

const now = new Date();

const App =  () => {
  
  const [value, setValue] = useState(now);
  
  const onChange = value => {
    setValue(value);
  }
  
  return (
    <DateInput
      value={value}
      onChange={onChange}
      maxDate={now}
      placeholder={FORMAT}
      parseDate={parseDate}
      formatDate={formatDate}
    />
  );
}

const parseDate = date  => parse(date, FORMAT, now);

const formatDate = date => {
  if (!isDate(date) || !isValid(date)) return 'Invalid Date';
  return format(date, FORMAT);
}

export default App;
