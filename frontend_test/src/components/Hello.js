import React from 'react'

const Hello = () => {
    // return (
    //     <div className='dummyClass'>
    //         <h1>Hello Chu!</h1>
    //     </div>
    // )

    //Not JSX
    return React.createElement(
        'div',
        {
            id: 'Hello',
            className: 'dummyClass'
        }, 
        React.createElement('h1', null, 'Hello Chu'))
}

export default Hello