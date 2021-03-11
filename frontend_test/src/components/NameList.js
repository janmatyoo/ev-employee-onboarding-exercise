import React from 'react'
import Person from './Person'

function NameList() {

    // const names = ['Tzuyu', 'Mina', 'Nayeon']
    // const nameList = names.map(name => <h2>{name}</h2>)

    // return (
    //     <div>
    //         {
    //             names.map(name => <h2>{name}</h2>)
    //         }
    //     </div>
    // )

    // return <div>{nameList}</div>

    const persons = [
        {
            id: 1,
            last_name: 'Chou',
            first_name: 'Tzuyu'
        },
        {
            id: 2,
            last_name: 'Myoi',
            first_name: 'Mina'
        },
        {
            id: 3,
            last_name: 'Im',
            first_name: 'Nayeon'
        }
    ]
    // const personList = persons.map(person => 
    //     <Person key={person.id} person={person} />
    // )
    // return <div>{personList}</div>


    const names = ['Tzuyu', 'Mina', 'Nayeon', 'Nayeon']
    const nameList = names.map((name, index) => 
        <h2 key={index}>{index} {name}</h2>
    )
    return <div>{nameList}</div>



}

export default NameList
