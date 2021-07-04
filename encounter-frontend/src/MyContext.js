import React, { useState, useEffect } from 'react'

const MyContext = React.createContext()
export default MyContext

function MyProvider(props){
 const [encounters, setEncounters] = useState([])   






return <MyContext.Provider value={{
    encounters: encounters
}}>
    {props.children}
</MyContext.Provider>
}

const MyConsumer = MyContext.Consumer

export { MyProvider, MyConsumer }