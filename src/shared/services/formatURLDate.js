import { format } from 'date-fns';

export const formatURLDate = (type, date) => {
    const newDate =
      type === 'month' ? format(date, 'yyyy-MM') : format(date, 'yyyy-MM-dd');
      return newDate
  };