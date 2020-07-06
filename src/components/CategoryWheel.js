
import React from 'react'
import styled from 'styled-components'
import media from "styled-media-query";
import triviaChannels from '../configs/triviaChannels.json'

const AppLayout = styled.div`
    grid-area: categorywheel;
    background-color: #25262B; 
    display: flex;
    flex-wrap: nowrap;
    overflow-x:scroll;
    ${media.lessThan("medium")`
        justify-content: flex-start;
    `}
    ${media.greaterThan("medium")`
        justify-content: center;
    `}
    &::-webkit-scrollbar {
        width: 0px;
     }
`;


const Text = styled.div`

    font-size: 2em;
    color: white;
    font-family: Arial; 
    text-align: center;
    padding: 20px;

`;
 
export default class CategoryWheel extends React.Component {
    render() {
        return(
            <AppLayout>
                {triviaChannels[this.props.Channel].map((station)=> 
                    <Text 
                        id={station}
                    >{station}</Text>
                )}                
            </AppLayout>
            );
        };
};