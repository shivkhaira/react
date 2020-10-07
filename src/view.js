import React from 'react'

function View(props)
{
    return(
        <div>
        <p key={props.data.id}>{props.data.name}</p>
        <input type="checkbox" name={props.data.id} />
        </div>
    )
}

export default View