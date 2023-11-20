import { ButtonList, Date, DecreaseButton, IncreaseButton, Wrapper } from "./PeriodPaginator.styled";
import sprite from '../../../../images/svg/sprite.svg';

export const PeriodPaginator = ({type}) => {

    return <Wrapper>
    <Date>{type}</Date>
    <ButtonList>
        <li>
            <DecreaseButton>
            <svg width={18} height={18}>
                <use href={sprite + '#chevron-left'}></use>
            </svg>
            </DecreaseButton>
        </li>
        <li>
            <IncreaseButton>
            <svg width={18} height={18}>
                <use href={sprite + '#chevron-right'}></use>
            </svg>
            </IncreaseButton>
        </li>
    </ButtonList>
    </Wrapper>
}