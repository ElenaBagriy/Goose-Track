import { CalendarToolbar } from "components/CalendarComponents/CalendarToolbar/CalendarToolbar";
import { Suspense, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Navigate, Outlet, useLocation, useParams } from "react-router-dom";
import { getTasksList } from "redux/tasks/tasksOperations";
import { formatURLDate } from "shared/services/formatURLDate";

const CalendarPage = () => {
    const dispatch = useDispatch();
    const { currentDay, currentMonth } = useParams();
    const location = useLocation();
    const currentMonthPath = formatURLDate('month', new Date());

    const isValidDate = dateString => {
        const date = new Date(dateString);
        return !isNaN(date);
    };
    
    const path = location.pathname;
    const paramsFormat = Object.keys(useParams()).join('');
    const urlString = paramsFormat === 'currentDay' ? currentDay : currentMonth;


    useEffect(() => {
        dispatch(getTasksList())
    }, [dispatch]);

    if (!isValidDate(urlString)) {
        return <Navigate replace to={`/calendar/month/${currentMonthPath}`} />;
      }
      if (path.match(/calendar(\/)?$/)) {
        return <Navigate replace to={`/calendar/month/${currentMonthPath}`} />;
      }


    return <>

        <CalendarToolbar/>
        <Suspense fallback={<div>Loading...</div>}>
            <Outlet/>
        </Suspense>
    </>;
};

export default CalendarPage;