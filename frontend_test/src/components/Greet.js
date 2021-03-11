import React from 'react'

// const Greet = ({name, nickname}) => { 
//     return (
//         <div>
//             <h1>Hello {name} a.k.a {nickname}</h1>
//         </div> 
//     )   
// }

const Greet = (props) => { 
    const {name, nickname} = props
    return (
        <div>
            <h1>Hello {name} a.k.a {nickname}</h1>
        </div> 
    )   
}

export default Greet