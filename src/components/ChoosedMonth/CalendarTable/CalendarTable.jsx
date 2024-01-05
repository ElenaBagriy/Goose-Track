import { eachDayOfInterval, getDate, getDaysInMonth } from 'date-fns';
import { endOfMonth, getDay, startOfMonth } from 'date-fns';
import { format } from 'date-fns';
import { Row, Table } from './CalendarTable.styled';

const CalendarTable = ({currentDate}) => {
    
    const useDaysOfMonth = (currentDate) => {
        const startMonth = startOfMonth(new Date(currentDate));
        const endMonth = endOfMonth(new Date(currentDate));
        const firstDayOfMonth = getDay(startMonth);
        const daysAmmount = getDaysInMonth(new Date(currentDate))
      
        const daysOfMonth = eachDayOfInterval({ start: startMonth, end: endMonth });
        
        return {
          startMonth,
          endMonth,
          firstDayOfMonth,
          daysOfMonth,
          daysAmmount
        };
      };

      const tasks = [];

      const { firstDayOfMonth, daysOfMonth } = useDaysOfMonth(currentDate);

      const daysWithTasks = daysOfMonth.map(day => ({
          date: format(day, 'yyyy-MM-dd'),
          tasks: tasks.filter(task => task.date === format(day, 'yyyy-MM-dd')),
        }));

      const emptyCells = (firstDayOfMonth) => {
        let length = firstDayOfMonth;
        if (firstDayOfMonth === 0) {
            length = 7;
        }
        return Array.from({ length: length-1 }, (_, index) => (
           <td key={`empty-${index}`}></td>
        ));
      }

      const rows = [];
      let cells = emptyCells(firstDayOfMonth);

      
      daysWithTasks.forEach((day, index) => {
        
        cells.push(
          <td
            key={index}
          >{getDate(new Date(day.date))} </td>
        );
        
        if (cells.length === 7 || index === daysWithTasks.length - 1) {
            rows.push(cells);
            cells = [];
        }
    });
    
    if (rows[rows.length-1].length !==7) {
        const length = 7 - rows[rows.length-1].length;
        const lastCells = [...Array(length)].map((_, index) => {
            return <td key={`empty-${index}`}></td>;
          });
        rows[rows.length-1].push(...lastCells)
    }

    return <Table>
            <tbody>{rows.map((row, index) => {
                return <Row key={index}>{row}</Row>
            })}
            </tbody>
        </Table>
};

export default CalendarTable;