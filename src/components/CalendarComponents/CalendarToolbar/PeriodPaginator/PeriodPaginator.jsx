import { ButtonList, Date, DecreaseButton, IncreaseButton, Wrapper } from "./PeriodPaginator.styled";
import sprite from '../../../../images/svg/sprite.svg';
import { format } from 'date-fns';

export const PeriodPaginator = ({type, date, changeDate}) => {


    const formatMonth = (type, date) => {
        const newDate =
        type === 'month' ? format(date, 'MMMM') : format(date, 'dd MMMM');
        return newDate
    };
    
    const formatYear = (date) => format(date, 'yyyy');

    const month = formatMonth(type, date);
    const year = formatYear(date);

    return <Wrapper>
    <Date>{month} {year}</Date>
    <ButtonList>
        <li>
            <DecreaseButton onClick={() => changeDate(-1)}>
            <svg width={18} height={18}>
                <use href={sprite + '#chevron-left'}></use>
            </svg>
            </DecreaseButton>
        </li>
        <li>
            <IncreaseButton onClick={() => changeDate(+1)}>
            <svg width={18} height={18}>
                <use href={sprite + '#chevron-right'}></use>
            </svg>
            </IncreaseButton>
        </li>
    </ButtonList>
    </Wrapper>
}