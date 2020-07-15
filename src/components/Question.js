
import React from 'react'
import styled from 'styled-components'
import triviaChannels from '../configs/triviaChannels.json'
const QuestionWrapper = styled.div`
    display: grid;
    grid-template-rows:  1fr 5fr 1 fr ;
`;

//display: flex;
   // flex-wrap: nowrap;
    //justify-content: flex-start;
    //flex-direction: column;
const Text = styled.div`
    font-size: 15px;
    color: white;
    font-family: Arial;
    text-align: center;
    width:60%;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 5px;
    
`;

const QuestionHeader = styled.div`
    
    align-items: center;
    padding: 15px;
`;
const Close = styled.div`
    font-size: 15px;
    color: white;
    font-family: Arial;
    position: absolute;
`;
/*
display:flex;
    wrap:nowrap;
    justify-content: start;
    */
const QuestionProgressText = styled.div`
    font-size: 20px;
    color: white;
    font-family: Playfair Display;
    text-align: center;
`;


const QuestionLayout = styled.div`
    justify-content: center;
    display:flex;
    flex-direction:column;
`;



const QuestionText = styled.div`
    font-size: 10px;
    color: white;
    font-family: Arial;
    width:80%;
`;

const Box = styled.div`
    display:flex;
    wrap:nowrap;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    border: 1px solid white;
    width:60%;
    margin-left: auto;
    margin-right: auto;
    padding: 10px;
    margin-top: 5px;
    margin-bottom: 5px;
`;
//display:grid;
//grid-template-columns: 5fr 1fr;

const AnswerLight = styled.div`
    border: 1px solid white;
    border-radius: 50%;
    width: 15px;
    height: 15px;
    margin-left:5px;

`
const NavLayout = styled.div`
    display:flex;
    wrap:nowrap;
    justify-content: center;
    align-items: center;
    padding:20px;
`
const NavButton = styled.div`
    border: 1px solid white;
    border-radius: 25%;
    margin-left:20px;
    margin-right:20px;
    color: white;
    text-align: center;
    width:30px;

`


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
                <QuestionHeader>
                <Close onClick={this.handleClose.bind(this)}>Close</Close>
                <QuestionProgressText>Question 1/{this.props.Game["questions"].length}</QuestionProgressText>
                </QuestionHeader>
                <div>
                {
                this.props.Game["questions"].map((question) =>
                <QuestionLayout>
                <Text>{question['prompt']+"?"}</Text>
                <Box>
                    <QuestionText key={question.answers['answer1']}>{question.answers['answer1']}</QuestionText>
                    <AnswerLight></AnswerLight>
                </Box>
                <Box>
                    <QuestionText key={question.answers['answer2']}>{question.answers['answer2']}</QuestionText>
                    <AnswerLight></AnswerLight>
                </Box>
                <Box>
                    <QuestionText key={question.answers['answer3']}>{question.answers['answer3']}</QuestionText>
                    <AnswerLight></AnswerLight>
                </Box>
                <Box>
                    <QuestionText key={question.answers['answer4']}>{question.answers['answer4']}</QuestionText>
                    <AnswerLight></AnswerLight>
                </Box>
                </QuestionLayout>
                )
                }
                </div>
                <NavLayout><NavButton>&#8592;</NavButton><NavButton>&#8594;</NavButton></NavLayout>
                
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
