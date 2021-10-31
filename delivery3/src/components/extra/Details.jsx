import React from "react";
import { Link, useLocation } from "react-router-dom";

import { Card, Image, Icon, Container, Label } from 'semantic-ui-react'

import './Details.css'

function Details(props) {
    
    //retornando url atual
    const location = useLocation()
    
    //se a url não estiver preenchida retorna 
    const { text } = location.state ? location.state : <Link to='/pokemon' />
    const { img } = location.state ? location.state : <Link to='/pokemon' />

    const poder =  Math.floor(Math.random() * 10000)
    const fraqueza = Math.floor(Math.random()*100)

    const estilo = {
        backgroundColor: props.color || '#6B3385'
    }

    return (
        <div className='mainDe'>
            <Container>
                
                <Card >
                    <Image src={img}
                        wrapped ui={false} className='img-details'/>
                    <Card.Content style={estilo} >
                        <Label color='black' pointing='below' className='file_label'>Pokémon</Label>
                        <Card.Header>{text ? text : 'Não há pokémon'}</Card.Header>

                        <Card.Meta>
                            <span className='date'>O pokémon foi capturado</span>
                        </Card.Meta>
                        <Card.Description >
                        <Icon name='sort content descending' />
                            Poder {poder}
                        </Card.Description>
                    </Card.Content>
                    <Card.Content extra style={estilo}>
                        
                            <Icon name='sort content ascending' />
                            Fraqueza x{fraqueza}
                        
                    </Card.Content>
                </Card>
            </Container>
        </div>
    )
}

export default Details