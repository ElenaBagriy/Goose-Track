import { useState } from "react";
import { PeriodTypeSelect } from "./PeriodTypeSelect/PeriodTypeSelect";
import { Box } from "./CalendarToolbar.styled";
import { PeriodPaginator } from "./PeriodPaginator/PeriodPaginator";

export const CalendarToolbar = () => {
    const [type, setType] = useState('month');

    return <Box>
    <PeriodPaginator type={type}></PeriodPaginator>
    <PeriodTypeSelect onChangeType={setType}></PeriodTypeSelect>
    </Box>
}