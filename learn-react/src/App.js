import './App.css';
import Header from "./Header"
import Tasks from './Components/Tasks';
import React, {useState} from 'react'
function App() {

  const initialState = [
    {
        id: 1,
        text: "He is son of Dr. Panta",
        name:"Madan",
        day: "Feb 5th at 2:30pm",
        reminder: true,
    },
    {
        id:2,
        text: "He is studing in the college",
        name: "Becool",
        day: "Feb 6th at 2:30pm",
        reminder: true,
    },
    {
        id:3,
        text: "Taxi Driver",
        name: "Milan",
        day: "Feb 7th at 2:30pm",
        reminder: false,
    }
]

const [tasks,setTasks] = useState(initialState)
  return (
    <div className="App">
      <Header  />
      <Tasks tasks = {tasks} />
    </div>
  );
}

export default App;
