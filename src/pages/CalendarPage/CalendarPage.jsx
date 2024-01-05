import { CalendarToolbar } from "components/CalendarComponents/CalendarToolbar/CalendarToolbar";
import { Suspense, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Outlet, useParams } from "react-router-dom";
import { getTasksList } from "redux/tasks/tasksOperations";

const CalendarPage = () => {
    const dispatch = useDispatch();
    // const { currentDay, currentMonth } = useParams();

    // console.log('currentDay', currentDay);
    // console.log('currentMonth', currentMonth);

    useEffect(() => {
        dispatch(getTasksList())
    }, [dispatch]);

    return <>

        <CalendarToolbar/>
        <Suspense fallback={<div>Loading...</div>}>
            <Outlet/>
        </Suspense>
    </>;
};

export default CalendarPage;