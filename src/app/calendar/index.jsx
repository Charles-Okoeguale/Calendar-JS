import React, {useState, useEffect} from 'react'
import './styles.css'
import buildCalendar from './build'
import { dayStyles } from './styles'
import Header from './header'

function Calendar({ value, onChange }) {

    const [calendar, setCalendar] = useState([]) 
  
    
    useEffect(() => {
            setCalendar(buildCalendar(value))
    }, [value])

    return ( 
     <div className='calendar'>
         <Header value={value} setValue={onChange} />
       <div className='body'>
           <div className='day-names'>
               {
                   ["s", "m", "t", "w", "t", "f", "s"].map(d => <div className='week'>
                       {d}
                   </div> )
               }
           </div>
       {calendar.map((week) => <div>
         {week.map((day) => <div className='day' onClick={() => onChange(day)}>
            <div className={dayStyles(day, value)}>
                 {day.format("D").toString()}
            </div>
         </div> )}
       </div> )}
       </div>
     </div>
    );
  }

export default Calendar;




// Notes

//calendar[] ...this is going to be array containing days and weeks of our calendar

// moment() ...this returns the present day and time ( date )
// the clone method is to make sure the date does not change due to changes 
// this is going to subtract one day from the actual or current day 
// the format method returns a string representation of our date
// the while loop runs as long as our condition is true and stops running once it turns false... the second parameter stands for the interval of days.

// CharCode stands for the character code for the arrows