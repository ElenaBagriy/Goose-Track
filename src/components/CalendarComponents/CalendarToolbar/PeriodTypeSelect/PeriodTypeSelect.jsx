import { useParams } from "react-router-dom";
import { DayButton, MonthButton, TypeNav } from "./PeriodTypeSelect.styled";
import { formatURLDate } from "shared/services/formatURLDate";

export const PeriodTypeSelect = ({onChangeType, date}) => {
    const { currentDay, currentMonth } = useParams();

    const setDateURL = (type) => {
        const newDate = formatURLDate(type, date);
        return `${type}/${newDate}`;
    };

    return <TypeNav>
    <MonthButton to={setDateURL('month')} onClick={() => onChangeType('month')} isactive={currentMonth}>Month</MonthButton>
    <DayButton to={setDateURL('day')} onClick={() => onChangeType('day')} isactive={currentDay}>Day</DayButton>
    </TypeNav>
}