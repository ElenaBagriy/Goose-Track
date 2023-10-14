import { DayButton, MonthButton, TypeNav } from "./PeriodTypeSelect.styled";

export const PeriodTypeSelect = ({onChangeType}) => {
    const date = new Date();

    return <TypeNav>
    <MonthButton to={`month/${date}`} onClick={() => onChangeType('month')}>Month</MonthButton>
    <DayButton to={`day/${date}`} onClick={() => onChangeType('day')}>Day</DayButton>
    </TypeNav>
}