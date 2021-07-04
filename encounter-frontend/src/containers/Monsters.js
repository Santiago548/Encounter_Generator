import React from 'react'
// import MonsterForm from './MonsterForm'
// import MonsterButton from './MonsterButton'
import { MyConsumer } from '../MyContext'



function Monsters() {
    return (
        <MyConsumer>
            {context => {

            
                handleOnClick = (event) => {
                    
                }

                const monsters = context.monsters.map((monster, i) => <p key={i}> {monster.name} </p>
                
                )

                return (
                    <div className='Monsters'>
                        <h1>Monsters</h1>
                        {/* maybe need this */}
                        {/* <MonsterButton /> */}
                        {/* {this.props.loading ? <h3>loading.....</h3> : monsters} */}
                    </div>
                )
            }
        }
        </MyConsumer>
    
    )
}


export default Monsters