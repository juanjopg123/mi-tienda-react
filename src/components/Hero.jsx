import React from 'react'

function Hero({nombre, descripcion}) {
    return (
        <>
            <h1>{nombre}</h1>
            <p>{descripcion}</p>
        </>
    )
}

export default Hero;