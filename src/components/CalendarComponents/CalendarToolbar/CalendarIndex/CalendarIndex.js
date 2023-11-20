import { Navigate } from 'react-router-dom';
import { formatURLDate } from 'shared/services/formatURLDate';

const CalendarIndex = () => {

    const setDateURL = (type) => {
        const date = new Date();
        const newDate = formatURLDate(type, date);
        return `${type}/${newDate}`;
    };

  return <Navigate to={`${setDateURL('month')}`} />;
};

export default CalendarIndex;