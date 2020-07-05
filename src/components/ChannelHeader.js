
import React from 'react'
import styled from 'styled-components'

const Logo = styled.div`
    font-size: 2em;
    color: white;
`;

const ControlButton = styled.div`
    font-size: 2em;
    color: white;
    font-family: Arial;
    font-weight: bold;

`;

const AppLayout = styled.div`
    grid-area: channelheader;
    display: grid;
    grid-row:2;
    grid-column:2;
    padding: 2em;
    background-color: #25262B; 
`;
//    grid-row:2;
//grid-column:2;
export const ChannelHeader = () => (
    <AppLayout>
        <ControlButton>
            Entertainment
        </ControlButton>        
    </AppLayout>
)