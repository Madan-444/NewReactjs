import React from 'react'
import ClassClick from './Components/ClassClick'
import ClickCounter from './Components/ClickCounter'
import Counter from './Components/Counter'
import EventBind from './Components/EventBind'
import Form from './Components/Form'
import HoverCounter from './Components/HoverCounter'
// import FunctionClick from './Components/FunctionClick'
import Message from './Components/Message'
import NameList from './Components/NameList'
import ParentComponent from './Components/ParentComponent'
import PostForm from './Components/PostForm'
import PostList from './Components/PostList'
import Stylesheet from './Components/Stylesheet'
import UserGreeting from './Components/UserGreeting'
import Welcome from './Components/Welcome'
import Greet from './Greet'
import ClassCounter from './HookComponents/ClassCounter'
import CompoC from './HookComponents/CompoC'
import DataFething from './HookComponents/DataFething'
import HookCounter from './HookComponents/HookCounter'
import HookCounter1 from './HookComponents/HookCounter1'
import HookCounterFour from './HookComponents/HookCounterFour'
import HookCounters from './HookComponents/HookCounters'
import HookCounterTree from './HookComponents/HookCounterTree'
import HookCounterTwo from './HookComponents/HookCounterTwo'
import HookMouse from './HookComponents/HookMouse'
import HooksCounterTo from './HookComponents/HooksCounterTo'
import IntervalHooks from './HookComponents/IntervalHooks'
import MouseContainer from './HookComponents/MouseContainer'
// import { UserProvider } from './HookComponents/userContext'
import CounterHooksThree from './HookComponents/CounterHooksThree'
import HookCompoA from './HookComponents/HookCompoA'
import HookCompoB from './HookComponents/HookCompoB'
import HOokCompoC from './HookComponents/HOokCompoC'
import HookDataFetching1 from './HookComponents/HookDataFetching1'

// const initialState = 0
// const reducer = (state,action)=> {
//     switch(action) {
//         case 'increment' : 
//             return state +1
//         case 'decrement' : 
//             return state -1
//         case 'reset' :
//             return initialState
//         default :
//             return state
//     }

// }

// export const countContext = React.createContext()

function App() {

  // const [count,dispatch] = useReducer(reducer,initialState)
  return (
    <div>
      {/* <h2>Hello Madan rijal Magar, Welcome</h2>*/}
      {/* <Greet name= 'Wishes Magar' age = '23' />  */}
      {/* <Welcome name= 'Madan Rijal' age = '34' />  */}
      {/* <Message /> */}
      {/* <Counter /> */}
      {/* <FunctionClick /> */}
      {/* <ClassClick /> */}
      {/* <EventBind /> */}
      {/* <ParentComponent /> */}
      {/* <UserGreeting /> */}
      {/* <NameList /> */}
      {/* <Stylesheet property= {true} /> */}
      {/* <Form /> */}
      {/* <ClickCounter /> */}
      {/* <HoverCounter /> */}
      {/* <PostList /> */}
      {/* <PostForm /> */}
      {/* <ClassCounter /> */}
      {/* <HookCounter /> */}
      {/* <HookCounterTwo /> */}
      {/* <HookCounterTree /> */}
      {/* <HookCounterFour /> */}
      {/* <HookCounter1 /> */}
      {/* <HookMouse /> */}
      {/* <MouseContainer /> */}
      {/* <IntervalHooks /> */}
      {/* <DataFething /> */}
      {/* <UserProvider value = 'Madan Rijal' >
        <CompoC />
      </UserProvider> */}
      {/* <HookCounters /> */}
      {/* <HooksCounterTo /> */}
      {/* <CounterHooksThree /> */}

      {/* <h2>  Count - {count} </h2>
      <countContext.Provider value= {{countState :count,countDispatch: dispatch}}>
      <HookCompoA />
      <HookCompoB />
      <HOokCompoC />
      </countContext.Provider> */}
      {/* <h2>Weocome from app Components</h2> */}
      <HookDataFetching1 />


    </div>
  )
}

export default App
