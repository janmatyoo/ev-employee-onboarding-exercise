import React from 'react'

function ChildComponent(props) {
    return (
        <div>
            {/* <button onClick={props.greethandler}>Greet Parent</button> */}
            <button onClick={() => props.greethandler('Child', 'Pet')}>Greet Parent</button>
        </div>
    )
}

export default ChildComponent
