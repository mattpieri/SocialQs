

import React from 'react'
import styled from 'styled-components'
import triviaChannels from '../configs/triviaChannels.json'
const ChannelWrapper = styled.div`
    grid-area: channels;
    color: white;
    font-size: 2em;
    display: flex;
    flex-wrap: nowrap;
    justify-content: flex-start;
    flex-direction: column;
    padding-top: 32px;
`;

const Text = styled.div`
    font-size: 20px;
    color: white;
    font-family: Arial;
    padding: 5px 30px;
    &:hover {
        background: #95989A; // <Thing> when hovered
        border-radius: 0 20px 20px 0;
    }
    cursor: pointer;
`;
//border-radius: 0px 25px 25px 0px;

//const ChannelMapper = (channel) => (
//     onClick={this.handleChange.bind(this)} value={this.props.value}>{channel}</Text>
//);



export default class Channels extends React.Component {
    handleChange(e){
        
        const value = e.target.id;
        console.log(value);
        this.props.update(value);
        this.props.handleClose();
    }

    render() {
        return(

            <ChannelWrapper>
                {triviaChannels.Channels.map((channel)=> 
                    <Text 
                        onClick={this.handleChange.bind(this)}
                        id={channel}
                    >{channel}</Text>
                )}
            </ChannelWrapper>
            );
        };
};