import React from 'react'
// import EncounterForm from './EncounterForm'
import { MyConsumer } from '../MyContext'



function Encounters() {
    return (
        <MyConsumer>
            {context => {

            
                handleOnClick = (event) => {
                    
                }

                const encounters = context.encounters.map((encounter, i) => <p key={i}> {encounter.name} </p>
                
                )

                return (
                    <div className='Encounters'>
                        <h1>Encounter</h1>
                        {/* maybe need this */}
                        {/* <EncounterButtons /> */}
                        {/* {this.props.loading ? <h3>loading.....</h3> : encounters} */}
                    </div>
                )
            }
        }
        </MyConsumer>
    
    )
}


export default Encounters