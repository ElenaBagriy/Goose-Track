import { eachDayOfInterval, getDaysInMonth } from 'date-fns';
import { endOfMonth, getDay, startOfMonth } from 'date-fns';
import { format } from 'date-fns';
import { Row, Table, TableWrapper } from './CalendarTable.styled';
import { CalendarCell } from './CalendarCell/CalendarCell';

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

      const tasks = [{
        "_id": "64303c8582dc6fccdee4f8df",
        "title": "toDsdvsddsvsdcvsdvdsvsdvo",
        "start": "9-00",
        "end": "14-00",
        "priority": "medium",
        "category": "to-do",
        "owner": "64303c5f82dc6fccdee4f8dc",
        "date": "2024-01-08",
        "createdAt": "2024-01-08T15:53:41.088Z",
        "updatedAt": "2024-01-08T15:53:41.088Z",
        "__v": 0
      }, {
        "_id": "64303c8582dc6fccdef",
        "title": "sdsdsdsd",
        "start": "9-00",
        "end": "14-00",
        "priority": "medium",
        "category": "to-do",
        "owner": "64303c5f82dc6fccdee4f8dc",
        "date": "2024-01-08",
        "createdAt": "2024-01-08T15:53:41.088Z",
        "updatedAt": "2024-01-08T15:53:41.088Z",
        "__v": 0
      }, {
        "_id": "64303c85fccdef",
        "title": "111q1q1q1q",
        "start": "9-00",
        "end": "14-00",
        "priority": "medium",
        "category": "to-do",
        "owner": "64303c5f82dc6fccdee4f8dc",
        "date": "2024-01-08",
        "createdAt": "2024-01-08T15:53:41.088Z",
        "updatedAt": "2024-01-08T15:53:41.088Z",
        "__v": 0
      }];

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
           <CalendarCell index={index} key={`first-empty-${index}`}/>
        ));
      }

      const rows = [];
      let cells = emptyCells(firstDayOfMonth);

      
      daysWithTasks.forEach((day, index) => {
        
        cells.push(
            <CalendarCell day={day} index={index} key={index}/>
        );
        
        if (cells.length === 7 || index === daysWithTasks.length - 1) {
            rows.push(cells);
            cells = [];
        }
    });
    
    if (rows[rows.length-1].length !==7) {
        const length = 7 - rows[rows.length-1].length;
        const lastCells = [...Array(length)].map((_, index) => {
            return <CalendarCell index={index} key={`last-empty-${index}`}/>;
          });
        rows[rows.length-1].push(...lastCells)
    }

    return <TableWrapper>
        <Table>
            <tbody>{rows.map((row, index) => {
                return <Row key={index}>{row}</Row>
            })}
            </tbody>
        </Table>
        </TableWrapper>
};

export default CalendarTable;