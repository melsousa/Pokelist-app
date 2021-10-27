import React from 'react'


const Details = props => {
    const estilo = {
        backgroundColor: props.color || '#f23'
    }
    return (
        <div>
            {/* <h1 style={estilo}>olá</h1> */}
            <h2 style={estilo}>{props.text}</h2>
        </div>
    )
}

export default Details