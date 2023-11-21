import { eachDayOfInterval } from 'date-fns';
import { endOfMonth, getDay, startOfMonth } from 'date-fns';

const CalendarTable = ({currentDate}) => {
    
    const useDaysOfMonth = (currentDate) => {
        const startMonth = startOfMonth(new Date(currentDate));
        const endMonth = endOfMonth(new Date(currentDate));
        const firstDayOfMonth = getDay(startMonth);
      
        const daysOfMonth = eachDayOfInterval({ start: startMonth, end: endMonth });
        
        return {
          startMonth,
          endMonth,
          firstDayOfMonth,
          daysOfMonth,
        };
      };


      const emptyCells = (firstDayOfMonth) => {
        return Array.from({ length: firstDayOfMonth }, (_, index) => (
          <td key={`empty-${index}`}></td>
        ));
      }

      const { startMonth, endMonth, firstDayOfMonth } = useDaysOfMonth(currentDate);
      console.log(startMonth);
      console.log(endMonth);

      let cells = emptyCells(firstDayOfMonth);

      console.log(cells);


    return <div>
        <table>
            <tbody></tbody>
        </table>
    CalendarTable
    </div>
};

export default CalendarTable;