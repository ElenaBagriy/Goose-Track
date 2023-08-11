
import { Controller } from "react-hook-form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { CalendarLabel, DateInput, DecreaseButton, IncreaseButton, Month, StyledCalendarContainer, X, Year } from "./DatePicker.styled";
import sprite from '../../../images/svg/sprite.svg'
import { useRef, useState } from "react";


const CustomHeader = (props) =>  {

    const {
        changeMonth,
        changeYear,
        customHeaderCount,
        date,
        decreaseMonth,
        decreaseYear,
        increaseMonth,
        increaseYear,
        isRenderAriaLiveMessage,
        monthContainer,
        monthDate,
        nextMonthButtonDisabled,
        nextYearButtonDisabled,
        prevMonthButtonDisabled,
        prevYearButtonDisabled,
        selectingDate,
    } = props;


    const days = [
        "M",
        "T",
        "W",
        "T",
        "May",
        "F",
        "S",
        "S"
      ];

    return <div>
        <DecreaseButton 
        type="button"
        aria-label="Previous Month"
        onClick={decreaseMonth} 
        disabled={prevMonthButtonDisabled}
        >
            <svg width={18} height={18}>
                <use href={sprite + '#chevron-left'}></use>
            </svg>
        </DecreaseButton>
        <Month>
            {monthDate.toLocaleString("en-GB", {
              month: "long",
            })}
        </Month>
        <Year >
            {monthDate.toLocaleString("en-GB", {
              year: "numeric",
            })}
        </Year>
          <IncreaseButton 
          type="button"
          onClick={increaseMonth} 
          disabled={nextMonthButtonDisabled}
          >
            <svg width={18} height={18}>
                <use href={sprite + '#chevron-right'}></use>
            </svg>
        </IncreaseButton>
  </div>
}

const MyContainer = ({ children }) => {

    return (
        <StyledCalendarContainer>
          {children}
        </StyledCalendarContainer>
    );
  };

  

export const StyledDatePicker = ({control, children}) => {

    const [open, setOpen] = useState(false);
    const datePickerRef = useRef(null);

    const handleClose = () => {
        setOpen(false);
      };

    return <CalendarLabel>
        {children}
        <Controller
        control={control}
        // ref={datePickerRef}
        name={'birthday'}
        render={({ field: { onChange, onBlur, value } }) => (

        <DatePicker 
        selected={value} 
        onChange={onChange}
        onBlur={onBlur}
        // showIcon
        shouldCloseOnSelect='true'
        maxDate={new Date()}
        dateFormat="dd/MM/yyyy"
        locale="en-GB"
        customInput={<DateInput/>}
        calendarContainer={MyContainer}
        popperPlacement="bottom-end"
        // open={open}
        
        // increaseMonth={1}
        renderCustomHeader={(props) => <CustomHeader {...props}/>
        }
        />
         )}
         />
    </CalendarLabel>
}