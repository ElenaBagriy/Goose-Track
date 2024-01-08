import { useMemo, useState } from "react";
import { PeriodTypeSelect } from "./PeriodTypeSelect/PeriodTypeSelect";
import { Box } from "./CalendarToolbar.styled";
import { PeriodPaginator } from "./PeriodPaginator/PeriodPaginator";
import { add } from 'date-fns';
import { useNavigate, useParams } from "react-router-dom";
import { formatURLDate } from "shared/services/formatURLDate";
import usePeriodTypeFromPath from "shared/services/usePeriodTypeFromPath";

export const CalendarToolbar = () => {
    const navigate = useNavigate();
    const periodType = usePeriodTypeFromPath();
    const { currentMonth, currentDay } = useParams();

    const dateFromUrl = periodType === 'month' ? currentMonth : currentDay;

    const convertMonthDateStringToDateObject = str => {
        const [year, month] = str.split('-');
        const day = new Date().getDate();
        const date = new Date(`${year}-${month}-${day}`);
        return date;
    };

    const convertDayDateStringToDateObject = str => {
        return new Date(str);
    };

    const dateObject = useMemo(
        () => {
            if (!currentMonth && !currentDay) {
                return new Date();
            }

            if (periodType === 'month') {
                return convertMonthDateStringToDateObject(dateFromUrl)
            }
            return convertDayDateStringToDateObject(dateFromUrl)

        }, [currentMonth, currentDay, dateFromUrl, periodType])
       
        
    const [type, setType] = useState(periodType);
    const [date, setDate] = useState(dateObject);

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
    <PeriodTypeSelect onChangeType={setType} date={date}></PeriodTypeSelect>
    </Box>
}