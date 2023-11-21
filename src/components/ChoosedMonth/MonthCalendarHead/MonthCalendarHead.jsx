import { useMediaQuery } from "@mui/material";
import { Item, List } from "./MonthCalendarHead.styled";

const MonthCalendarHead = () => {
    const isMobile = useMediaQuery('(max-width: 767px)');
    const weekDays = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
    const strNumber = isMobile ? 1 : 3;

    return <List>
    {weekDays.map((day) => <Item key={day}>{day.toUpperCase().substring(0, strNumber)}</Item>)}
    </List>
};

export default MonthCalendarHead;