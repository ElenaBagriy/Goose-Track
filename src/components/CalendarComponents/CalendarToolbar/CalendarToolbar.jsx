import { useState } from "react";
import { PeriodTypeSelect } from "../PeriodTypeSelect/PeriodTypeSelect"
import { Box } from "./CalendarToolbar.styled"
import { PeriodPaginator } from "./PeriodPaginator/PeriodPaginator"


export const CalendarToolbar = () => {
    const [type, setType] = useState('month');

    console.log(type);

    return <Box>
    <PeriodPaginator></PeriodPaginator>
    <PeriodTypeSelect onChangeType={setType}></PeriodTypeSelect>
    </Box>
}