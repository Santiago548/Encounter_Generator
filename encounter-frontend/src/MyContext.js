import React, { useState, useEffect } from 'react'

const MyContext = React.createContext()
export default MyContext

function MyProvider(props){
 const [encounters, setEncounters] = useState([])
 const [monsters, setMonsters] = useState([])

// Fetching all encounters from db
 useEffect(() => {
    console.log('fetching encounters and monsters')
    fetch('/encounters')
    .then(res => res.json())
    .then(data => {
        setEncounters(data)
    })
}, [])// [] = do it one time upon mount

// Fetching all monsters from DB
useEffect(() => {
    console.log('fetching monsters')
    fetch('/monsters')
    .then(res => res.json())
    .then(data => {
        setMonsters(data)
    })
}, [])// [] = do it one time upon mount






return <MyContext.Provider value={{
    encounters: encounters,
    monsters: monsters
}}>
    {props.children}
</MyContext.Provider>
}

const MyConsumer = MyContext.Consumer

export { MyProvider, MyConsumer }