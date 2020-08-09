
import React from 'react'
import styled from 'styled-components'
import media from "styled-media-query";

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
    ${media.lessThan("medium")`
        grid-column: 1/2;
  `}
`;
//    grid-row:2;
//grid-column:2;

export default class ChannelHeader extends React.Component {
    render() {
        return(

            <AppLayout>
                <ControlButton>
                    {this.props.Title}
                </ControlButton>        
            </AppLayout>
            );
        };
};