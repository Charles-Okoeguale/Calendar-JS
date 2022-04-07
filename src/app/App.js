import React, {useState} from 'react';
import moment from 'moment'
import Calendar from './calendar';


const App = () => {

  const [value, setValue] = useState(moment())
  return (
    <div>
        <Calendar value={value} onChange={setValue} />
    </div>
  )
}

export default App;