import React from "react";

import './Card.css'

const Card = props => {
    const estilo = {
        //se não estiver preenchido 
        //vai colocar a cor branca para os cards
        backgroundColor: props.color || '#FFF'

    }


    return (
        <div className="Card">

            <div className="Content" style={estilo}>

                {props.children}
            </div>
            <div className="Title">
                {props.titulo}
            </div>
        </div>
    )
}

export default Card