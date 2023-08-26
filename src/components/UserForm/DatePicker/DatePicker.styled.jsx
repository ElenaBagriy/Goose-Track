import { CalendarContainer } from 'react-datepicker';
import styled from 'styled-components';

export const DateInput = styled.input`
    padding: 12px 14px;
    width: 100%;
    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 1.29;
    color: ${props => props.theme.text.input};
    background-color: transparent;
    border-radius: 8px;
    border: 1px solid ${props => props.theme.colors.inputBorder};

    &::placeholder {
        opacity: 1;
    }

    @media screen and (min-width: 768px) {
        padding: 14px 18px;
    }
`;

export const DecreaseButton = styled.button`
    position: absolute;
    left: 18px;
    top: 24px;
    width: 18px;
    height: 18px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    border: none;
    transition: stroke ${props => props.theme.hover.transition}, stroke-opacity ${props => props.theme.hover.transition};

    & svg {
        stroke: #DCE3E5;
    }

    &:hover,
    &:focus {
        & svg {
            stroke: ${props => props.theme.colors.white};
            stroke-opacity: 1;
        }
    }
`;

export const IncreaseButton = styled.button`
    position: absolute;
    right: 18px;
    top: 24px;
    width: 18px;
    height: 18px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    border: none;
    
    & svg {
        stroke: #DCE3E5;
        stroke-opacity: 0.8;
        transition: stroke ${props => props.theme.hover.transition}, stroke-opacity ${props => props.theme.hover.transition};
    }

    &:hover,
    &:focus {
        & svg {
            stroke: ${props => props.theme.colors.white};
            stroke-opacity: 1;
        }
    }
`;

export const Month = styled.span`
    display: inline-block;
    color: ${props => props.theme.colors.white};
    text-align: center;
    font-family: Inter;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: 1.2;
    padding: 4px 8px;

    @media screen and (min-width: 768px) {
        font-size: 24px;
        line-height: 1.17;
    }
`;

export const Year = styled.span`
    display: inline-block;
    color: ${props => props.theme.colors.white};
    text-align: center;
    font-family: Inter;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: 1.2;
    padding: 4px 0px;

    @media screen and (min-width: 768px) {
        font-size: 24px;
        line-height: 1.17;
    }
`;

export const CalendarWrapper = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    font-family: Inter;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 1.17;
    width: 299px;
    color: ${props => props.theme.text.label};
    
    @media screen and (min-width: 768px) {
        width: 354px;
    }

    & .react-datepicker__view-calendar-icon input {
        padding: 12px 14px;
        
        @media screen and (min-width: 768px) {
            padding: 14px 18px;
        }
    }

    & .react-datepicker-wrapper {
        margin-top: 8px;
    }

    & .react-datepicker__month-container {
        float: none;
    }

    & .react-datepicker__header {
        position: static;
        padding: 0;
        background-color: transparent;
        border-top-left-radius: 0;
        border-bottom: 1px solid rgba(255, 255, 255, 0.20);
    }

    & .react-datepicker__day-names {
        margin-bottom: 0;
    }

    & .react-datepicker__day-name {
        display: inline-flex;
        width: 46px;
        padding-top: 12px;
        padding-bottom: 12px;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 8px;
        color: ${props => props.theme.colors.white};
        text-align: center;
        font-family: Inter;
        font-size: 14px;
        font-style: normal;
        font-weight: 600;
        line-height: 1.29;
        margin: 0;

        @media screen and (min-width: 768px) {
            width: 48px;
            font-size: 18px;
            line-height: 1.33;
        }
    }

    & .react-datepicker__day {
        display: inline-flex;
        border-radius: 50%;
        width: 46px;
        height: 46px;
        padding-top: 12px;
        padding-bottom: 12px;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 8px;
        color: ${props => props.theme.colors.white};
        text-align: center;
        font-family: Inter;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 1.29;
        margin: 0;
        transition: background-color ${props => props.theme.hover.transition};

        @media screen and (min-width: 768px) {
            width: 48px;
            font-size: 18px;
            line-height: 1.33;
        }

        &:hover,
        &:focus {
            border-radius: 50%;
            background-color: rgba(255, 255, 255, 0.35);
        }
    }

    & .react-datepicker__month {
        margin: 0;
        display: flex;
        flex-direction: column;
        gap: 5px;

        @media screen and (min-width: 768px) {
            gap: 0;
        }
    }

    & .react-datepicker__day--weekend {
        color: rgba(255, 255, 255, 0.35);
    }

    & .react-datepicker__day--outside-month {
        opacity: 0;
    }

    & .react-datepicker__day--keyboard-selected, 
    & .react-datepicker__day--selected{
        border-radius: 24px;
        background-color: ${props => props.theme.colors.white};
        color: ${props => props.theme.colors.mainBlue};;
    }

`;

export const StyledCalendarContainer = styled(CalendarContainer)`
    position: relative;
    border-radius: 16px;
    background-color: ${props => props.theme.colors.mainBlue};
    width: 327px;
    padding: 9px 0px;
    border: none;

    @media screen and (min-width: 768px) {
        width: 373px;
        padding: 9px 18px;

    }
`;

export const CalendarButton = styled.button`
  position: absolute;
  right: 14px;
  bottom: 12px;
  width: 18px;
  height: 18px;
  border: none;
  background-color: transparent;

  & svg {
    stroke: ${props => props.theme.text.input};
    transition: stroke ${props => props.theme.hover.transition};
  }

  &:hover,
  &:focus {
    & svg {
        stroke: ${props => props.theme.colors.mainBlue};
    }
  }

  @media screen and (min-width: 768px) {
    bottom: 14px;
  }
`;
