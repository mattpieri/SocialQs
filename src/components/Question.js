
import React from 'react'
import styled from 'styled-components'
import triviaChannels from '../configs/triviaChannels.json'
const QuestionWrapper = styled.div`
    display: grid;
    grid-template-rows:  1fr 5fr 1fr;
`;

//display: flex;
   // flex-wrap: nowrap;
    //justify-content: flex-start;
    //flex-direction: column;
const Text = styled.div`
    font-size: 15px;
    border-radius: 0px 25px 25px 0px;
    color: white;
    font-family: Arial;
    text-align: center;

    &:hover {
        background: #95989A; // <Thing> when hovered
    }
`;

const QuestionText = styled.div`
    font-size: 1em;
    color: white;
    font-family: Playfair Display;
    text-align: center;
`;

const Answers = styled.div`
    font-size: 15px;
    color: white;
    font-family: Arial;
    border: 1px solid white;
    margin:5px;
    border-radius: 25px;
    padding: 5px;
    padding-left:20px;
`;
//const ChannelMapper = (channel) => (
//     onClick={this.handleChange.bind(this)} value={this.props.value}>{channel}</Text>
//);



export default class Questions extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showResults: true,
            /*Game:     this.props.question['gameID'], //this.props.question['prompt'],
            questionId: this.props.question['questionID'],
            Prompt:   this.props.question['prompt'],
            Choice_A: this.props.question['answers']['answer1'],
            Choice_B: this.props.question['answers']['answer2'],
            Choice_C: this.props.question['answers']['answer3'],
            Choice_D: this.props.question['answers']['answer4'],
            Answer:   this.props.question['answer'],*/
        };
        }
        
    onClick(showResults){
        this.setState({showResults:showResults})
    }
    
    alertClicked() {
        alert('You clicked the third ListGroupItem');
    }

    changePrompt(Prompt){
        this.setState({Prompt:Prompt})
    }
    changeGame(Game){
        this.setState({Game:Game})
    }
    changeChoice_A(Choice_A){
        this.setState({Choice_A:Choice_A})
    }
    changeChoice_B(Choice_B){
        this.setState({Choice_B:Choice_B})
    }
    changeChoice_C(Choice_C){
        this.setState({Choice_C:Choice_C})
    }
    changeChoice_D(Choice_D){
        this.setState({Choice_D:Choice_D})
    }
    changeAnswer(Answer){
        this.setState({Answer:Answer})
    }  
    
    
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
                <QuestionText>Question 1/{this.props.Game["questions"].length}</QuestionText>
                <div>
                {
                this.props.Game["questions"].map((question) =>
                <div>
                <Text>{question['prompt']+"?"}</Text>
                <Answers key={question.answers['answer1']}>{question.answers['answer1']}</Answers>
                <Answers key={question.answers['answer2']}>{question.answers['answer2']}</Answers>
                <Answers key={question.answers['answer3']}>{question.answers['answer3']}</Answers>
                <Answers key={question.answers['answer4']}>{question.answers['answer4']}</Answers>
                </div>
                )
                }
                </div>
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
