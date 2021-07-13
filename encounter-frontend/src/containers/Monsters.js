import React from 'react'
// import MonsterForm from './MonsterForm'
// import MonsterButton from './MonsterButton'
import { MyConsumer } from '../MyContext'



function Monsters() {
    return (
        <MyConsumer>
            {context => {

            
                handleOnClick = (event) => {
                    context.deleteMonster(event.target.id)
                }

                const monsters = context.monsters.map((monster, i) => <p key={i}> 
                    <button id={monster.id} onClick={handleClick}> x
                </button>
                    {monster.name}
                    {monster.size}
                    {monster.type}
                    {monster.alignment}
                    {monster.armor_class}
                    {monster.hit_points}
                    {monster.speed}
                    {monster.strength}
                    {monster.dexterity}
                    {monster.constitution}
                    {monster.intelligence}
                    {monster.wisdom}
                    {monster.charisma}
                    {/* map name/value */}
                    {monster.damage_vulnerabilities}
                    {monster.damage_resistances} 
                    {monster.damage_immunities} 
                    {monster.condition_immunities}
                    {/* map */}
                    {monster.senses}
                    {monster.languages}
                    {monster.challenge_rating}
                    {monster.xp}
                    {monster.special_abilities}
                    {monster.actions}
                    {monster.legendary_actions}
                </p>
                
                )

                return (
                    <div className='Monsters'>
                        <h1>Monsters</h1>
                        {/* {monsters} */}
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