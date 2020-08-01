import React, { Component, useState, createContext } from 'react'

export const CreateContext = createContext();

export const CreateProvider = props => {
    const [movies, setMovies ] = useState(
    {
        AlexaCode: '#'+Math.floor(Math.random()*90000),
        Title: '...',
		Category: 'General',
		SubCategory: 'Random',
        Visibility: 'Public',
        Questions: [],
    }
    )

    return (
        <CreateContext.Provider value={[movies, setMovies]}>
            {props.children}
        </CreateContext.Provider>
    )
}

