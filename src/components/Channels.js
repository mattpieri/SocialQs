

import React from 'react'
import styled from 'styled-components'

const ChannelWrapper = styled.div`
grid-area: channels;
background-color: #25262B;
color: white;
font-size: 2em;
padding: 1em;
display: flex;
flex-wrap: nowrap;
justify-content: flex-start;
flex-direction: column;
`;

const Text = styled.div`
    font-size: 20px;
    color: white;
    font-family: Arial;
    padding: 7px;
`;


export const Channels = () => (
    
    <ChannelWrapper>
        <Text>Your Trivia</Text>
        <Text>Expolore</Text>
        <Text>Create Trivia</Text>
        <Text></Text>
        <Text></Text>
        
        
        <Text>General</Text>
        <Text>Entertainment</Text>
        <Text>Nature</Text>
        <Text>Sports</Text>
        <Text>Tech</Text>
        <Text>Business</Text>
        <Text>Science</Text>
        <Text>History</Text>
        <Text>World</Text>
    </ChannelWrapper>

)