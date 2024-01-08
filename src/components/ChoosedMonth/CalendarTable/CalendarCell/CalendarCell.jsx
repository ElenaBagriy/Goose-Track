
import { getDate } from 'date-fns';
import { AditionalTasks, DayNumber, TableCell, Task } from './CalendarCell.styled';

export const CalendarCell = ({day, index}) => {

    return <TableCell key={day ? `${index}` : `empty-${index}`}>
        <DayNumber>
            {day ? getDate(new Date(day.date)) : ''}
        </DayNumber>
        {day?.tasks.length > 0 && 
        <ul>
            {day.tasks.map((task, idx) => {
            if (idx >= 1) {
                return null;
              }
            return <li key={idx}>
                    <Task>
                        {task.title}
                    </Task>
                </li>})}
            {day.tasks.length > 2 && <li><AditionalTasks>+{day.tasks.length - 1} tasks</AditionalTasks></li>}
        </ul>}
    </TableCell>
};
