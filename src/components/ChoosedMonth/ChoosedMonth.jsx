import { useParams } from "react-router-dom";
import CalendarTable from "./CalendarTable/CalendarTable";
import MonthCalendarHead from "./MonthCalendarHead/MonthCalendarHead";

const ChoosedMonth = () => {

    const { currentMonth } = useParams();

    return <div>
    <MonthCalendarHead></MonthCalendarHead>
    <CalendarTable currentDate={currentMonth} />
    </div>
};

export default ChoosedMonth;