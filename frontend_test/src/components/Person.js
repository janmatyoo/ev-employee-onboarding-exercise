import React from 'react'

function Person({person}) {
    return (
        <div>
            <h2>
                I am {person.last_name}, {person.first_name} with an id of {person.id}
            </h2>
        </div>
    )
}

export default Person
