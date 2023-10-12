import { CalendarToolbar } from "components/CalendarComponents/CalendarToolbar/CalendarToolbar";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getTasksList } from "redux/tasks/tasksOperations";

const CalendarPage = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getTasksList())
    }, [dispatch]);

    return <>
        <CalendarToolbar/>
    </>;
};

export default CalendarPage;