
import { Controller } from "react-hook-form";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { CalendarButton, CalendarWrapper, DateInput, DecreaseButton, IncreaseButton, Month, StyledCalendarContainer, Year } from "./DatePicker.styled";
import sprite from '../../../images/svg/sprite.svg'
import { useEffect, useRef, useState } from "react";


const CustomHeader = (props) =>  {

    const {
        decreaseMonth,
        increaseMonth,
        monthDate,
        nextMonthButtonDisabled,
        prevMonthButtonDisabled,
    } = props;

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
    const datePickerRef = useRef(null)

    const onClick = (e) => {
        if (!open) {
            setOpen(true)
        } else {
            setOpen(false)
        }
    };

    const handleClose = () => {
        setOpen(false);
      };

    const handleOpen = () => {
        setOpen(true)
    }

    useEffect(() => {

        const onKeyDown = (e) => {
            if(open === true && e.key === 'Escape') {
                setOpen(false)
            }
        };

        const onClick = (e) => {
            if(open === true && !e.target.closest('.datePicker')) {
                setOpen(false)
            }
        };

        document.addEventListener("keydown", onKeyDown);
        document.addEventListener("click", onClick);

      return () => {
        document.removeEventListener("keydown", onKeyDown);
        document.removeEventListener("click", onClick);

      }
    }, [open])
    

        return <CalendarWrapper className="datePicker" ref={datePickerRef}>
        <label htmlFor='birthday'>{children}</label>
        <Controller
        control={control}
        name={'birthday'}
        render={({ field: { onChange, onBlur, value } }) => {

        return <><ReactDatePicker 
        selected={value} 
        onChange={(e) => {
            onChange(e);
            handleClose();
        }}
        onBlur={onBlur}
        maxDate={new Date()}
        dateFormat="dd/MM/yyyy"
        locale="en-GB"
        customInput={<DateInput/>}
        calendarContainer={MyContainer}
        popperPlacement="bottom-end"
        open={open}
        onCalendarOpen={handleOpen}
        onCalendarClose={handleClose}
        renderCustomHeader={props => <CustomHeader {...props}/>}
        closeOnScroll={e => e.target === document}
        />
        <CalendarButton type='button' onClick={onClick}>
            <svg width={18} height={18}>
                <use href={sprite + '#chevron-down'}></use>
            </svg>
        </CalendarButton>
        </>
        }}
        />
        </CalendarWrapper>
}
