
import React from 'react'
import styled from 'styled-components'
import triviaChannels from '../configs/triviaChannels.json'
const QuestionWrapper = styled.div`
    color: white;
    font-size: 2em;
    display: grid;
    grid-template-rows: 1fr 2fr 2fr 10fr auto;
    height: 600px;
`;

//display: flex;
   // flex-wrap: nowrap;
    //justify-content: flex-start;
    //flex-direction: column;
const Text = styled.div`
    font-size: 20px;
    border-radius: 0px 25px 25px 0px;
    color: white;
    font-family: Arial;
    padding: 15px;
    text-align: center;

    &:hover {
        background: #95989A; // <Thing> when hovered
    }
`;
//const ChannelMapper = (channel) => (
//     onClick={this.handleChange.bind(this)} value={this.props.value}>{channel}</Text>
//);



export default class Questions extends React.Component {
    handleChange(e){
        
        const value = e.target.id;
        console.log(value);
        this.props.update(value);
    }

    handleClose(e){
        this.props.handleClose();
    }

    render() {
        return(
            <QuestionWrapper>
                <Text>Progress</Text>
                <Text>Question 1/10</Text>
                <Text>{this.props.Game}</Text>
                {console.log(this.props.Games)}
                
                <Text>Create Trivia</Text>
                <Text onClick={this.handleClose.bind(this)}>Close</Text>
                {/*this.props.Games.map((games,questions)=> 
                    
                    <Text 
                        onClick={this.handleChange.bind(this)}
                        id={channel}
                    >{channel}</Text>
                )*/}
            </QuestionWrapper>
            );
        };
};