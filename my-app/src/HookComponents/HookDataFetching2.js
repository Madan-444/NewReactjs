import React,{useEffect,useReducer} from 'react'
import axios from 'axios'

const initialState = {
    loading:true,
    post: {},
    error: ''
}
const reducer= (state,action)=> {
    switch(action.type) {
        case 'FEtch-Success' :
            return {
                loading:false,
                post:action.payload,
                error: ''

            }
        case 'Fetch-Error' :
            return {
                loading: false,
                post : {},
                error:' SomeThing Gone Wrong!'
            }
        default :
            return state
    }
} 


function HookDataFetching2() {

    const [state,dispatch] = useReducer(reducer,initialState)

    useEffect(()=> {
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
        .then(res=> {
            dispatch({type:'FEtch-Success', payload:res.data})
        })
        .catch(err=> {
            dispatch({type: 'Fetch-Error'})
        })
    })
    return (
        <div>
            { state.loading ? 'Loading' : state.post.title }
            { state.error ? state.error : null}
        </div>
    )
}

export default HookDataFetching2
