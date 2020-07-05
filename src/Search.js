import React from 'react';

import styled from "styled-components";
import { Layout } from './components/Layout';

const Top = styled.div`
  background: #353A3E;
  height: 60px;
  width: 100%;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  padding: 20px;
`;

const Background = styled.div`
background-color: #25262B;
height: 100vh;
`;

const Text = styled.p`
    color: white;
`;

const TriviaCard = styled.div`
    width: 250px;
    height: 250px;
    background-color: white;
    border-radius: 25px;
`;

const Menu = styled.div`
    background-color: white;
    width: 30%;
    height: 250px;
background-color: #25262B;


`;

const NotMenu = styled.div`
    background-color: blue;
`;

//<Top>Hello world2</Top>
/*
  padding: 4em;
<TriviaCard>
            Test
        </TriviaCard>
height: 100vh;
*/
export const Search = () => (
    <div>
    <Background>
    <Top> 
        <Text>Alexa's Social Qs</Text>
        </Top>
    <Menu></Menu>
    </Background>
    
    </div>
)