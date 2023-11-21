import { useState } from "react";
import { PeriodTypeSelect } from "./PeriodTypeSelect/PeriodTypeSelect";
import { Box } from "./CalendarToolbar.styled";
import { PeriodPaginator } from "./PeriodPaginator/PeriodPaginator";
import { add } from 'date-fns';
import { useNavigate } from "react-router-dom";
import { formatURLDate } from "shared/services/formatURLDate";

export const CalendarToolbar = () => {
    const [type, setType] = useState('month');
    const [date, setDate] = useState(new Date());
    const navigate = useNavigate();

    const onDateChange = (number) => {
        let result;
        if (type === 'month') {
            result = add(date, {
                months: +number,
            })
            setDate(result);      
        };

        if (type === 'day') {
            result = add(date, {
                days: +number,
            })
            setDate(result);      
        }
            
        const formatDate = formatURLDate(type, result);
        navigate(`/calendar/${type}/${formatDate}`)
        
    }

    return <Box>
    <PeriodPaginator type={type} date={date} changeDate={onDateChange}></PeriodPaginator>
    <PeriodTypeSelect onChangeType={setType}></PeriodTypeSelect>
    </Box>
}