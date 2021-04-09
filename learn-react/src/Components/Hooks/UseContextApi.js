import React, {useContext,useState} from 'react'


const AppContext = React.createContext()

export const AppProvider = ({children}) => {
    const [myname,setmyname]= useState('Madan')
    return (
        <AppContext.Provider value = {{myname}}>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = ()=> {
    return useContext(AppContext)
}