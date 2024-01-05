import { eachDayOfInterval, getDaysInMonth } from 'date-fns';
import { endOfMonth, getDay, startOfMonth } from 'date-fns';
import { format } from 'date-fns';

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

      const { startMonth, endMonth, firstDayOfMonth, daysOfMonth, daysAmmount } = useDaysOfMonth(currentDate);

        console.log("startMonth", startMonth);   //дата с днем недели
        console.log("endMonth", endMonth);   //дата с днем недели
        console.log("firstDayOfMonth", firstDayOfMonth);   //номер дня недели (0 - воскресенье)
        console.log("daysOfMonth", daysOfMonth);    //список всех дней в массиве
        console.log("daysAmmount", daysAmmount);    //количество дней в месяце

        // нам нужно сделать строки и ячейки в строках
        // 

      const daysWithTasks = daysOfMonth.map(day => ({
          date: format(day, 'yyyy-MM-dd'),
          tasks: tasks.filter(task => task.date === format(day, 'yyyy-MM-dd')),
        }));

      const emptyCells = (firstDayOfMonth) => {
        return Array.from({ length: firstDayOfMonth }, (_, index) => (
           <td key={`empty-${index}`}></td>
        ));
      }


      const rows = [];
      let cells = emptyCells(firstDayOfMonth);

      daysWithTasks.forEach((day, index) => {
        
        cells.push(
          <td
            key={index}
          >{day.date} </td>
        );
    
        if (cells.length === 7 || index === daysWithTasks.length - 1) {
          rows.push(cells);
          cells = [];
        }
      });



    return <div>
        <table>
            <tbody>{rows.map((row, index) => {
                return <tr key={index}>{row}</tr>
            })}
            </tbody>
        </table>
    </div>
};

export default CalendarTable;