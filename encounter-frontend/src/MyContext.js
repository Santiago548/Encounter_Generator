import React, { useState, useEffect } from 'react'

const MyContext = React.createContext()
export default MyContext

function MyProvider(props){
 const [encounters, fetchEncounters] = useState([])
 const [monsters, fetchMonsters] = useState([])
 const [monster, setMonster] = useState([])

// Fetching all encounters from db
 useEffect(() => {
    console.log('fetching encounters')
    fetch('/encounters')
    .then(res => res.json())
    .then(data => {
        fetchEncounters(data)
    })
}, [])// [] = do it one time upon mount

// Fetching all monsters from DB
useEffect(() => {
    console.log('fetching all monsters')
    fetch('/monsters')
    .then(res => res.json())
    .then(data => {
        fetchMonsters(data)
    })
}, [])// [] = do it one time upon mount

// fetching monsters from the api
useEffect(() => {
    console.log('fetching your monster')
    fetch('https://www.dnd5eapi.co/api/monsters')
    .then(res => res.json())
    .then(data => {
        setMonsters(data)
    })
}, [])// [] = do it one time upon mount blank for re render 

const addMonster = monster => {
    // const monster = {
    //     need to add all monster data
    //     monster: monster 
    // }
    fetch('/monsters', {
        method: "POST",
        body: JSON.stringify(monster),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(res => res.json())
    .then(data => {
        setMonster[[...monsters, monster]]
    })
}

const deleteMonster = id => {
    // const monster = {
    //     need to add all monster data
    //     monster: monster 
    // }
    fetch(`/monsters/${id}`, {
        method: "DELETE",
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(() => {
        // need to write filter function
        const newMonsters = monsters.filter()
        setMonster[newMonsters]
    })
}

return <MyContext.Provider value={{
    encounters: encounters,
    monsters: monsters,
    monster: monster,
    addMonster: addMonster,
    deleteMonster: deleteMonster
}}>
    {props.children}
</MyContext.Provider>
}

const MyConsumer = MyContext.Consumer

export { MyProvider, MyConsumer }


