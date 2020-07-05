import React from 'react'
import styled from 'styled-components'

const Logo = styled.div`
    font-size: 1em;
    color: white;
`;

const ControlButton = styled.div`
    color: white;
`;

const AppLayout = styled.div`
    padding: 40px;
    display: grid;
    grid-template-columns: 180px auto 100px 100px;
    background-color: #25262B; 
`;

export const Create = () => (
    <AppLayout>
        <Logo>
            Test
        </Logo>
        <ControlButton>
            Dashboard
        </ControlButton>        
        <ControlButton>
            Settings
        </ControlButton>
    </AppLayout>
)