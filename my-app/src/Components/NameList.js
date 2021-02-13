import React from 'react'
import Person from './Person'

function NameList() {
    const persons = [
        {
            id:1,
            name:'Madan',
            age: 30,
            skill: 'React Js'
        },
        {
            id:2,
            name:'Becool',
            age: 20,
            skill: 'Angular Js'
        },
        {
            id:3,
            name:'Prashant',
            age: 13,
            skill: 'Vue Js'
        },
        {
            id:4,
            name: 'Wishes Magar',
            age:45,
            skill: 'Masterbation'
        }
    ]
    return (
        <div>
            {
                persons.map((detail,index)=> <Person detail = {detail} key= {index} />)
            }
        </div>
    )
}

export default NameList
