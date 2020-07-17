
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

function doSomething(props){
    if(props.show == false){
        return 'None';
    }else if (props.choice == props.answer){
        return 'green';
    }else {
        return 'palevioletred'
    }
}

const AnswerLight = styled.div`
    border: 1px solid white;
    border-radius: 50%;
    width: 15px;
    height: 15px;
    margin-left:5px;
    background-color: ${props => doSomething(props)};
    

`
/*props =>console.log(props.answer)*/
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
            Questions:   this.props.Game["questions"], //this.props.question['prompt'],
            questionId:  this.props.Game["questions"][0]['questionID'],
            Prompt:      this.props.Game["questions"][0]['prompt'],
            Choice_A:    this.props.Game["questions"][0]['answers']['answer1'],
            Choice_B:    this.props.Game["questions"][0]['answers']['answer2'],
            Choice_C:    this.props.Game["questions"][0]['answers']['answer3'],
            Choice_D:    this.props.Game["questions"][0]['answers']['answer4'],
            Answer:      this.props.Game["questions"][0]['answer'],
            Index: 0, 
            Selected_A: false,
            Selected_B: false,
            Selected_C: false,
            Selected_D: false,
        };
        this.handleRight = this.handleRight.bind(this);
        this.handleLeft = this.handleLeft.bind(this);
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

    increaseIndex = () => {
        this.setState(prevState => {
           return {Index: ( prevState.Index + 1 )}
        })
    }

    decreaseIndex = () => {
        this.setState(prevState => {
           return {Index: ( prevState.Index - 1 )}
        })
    }
    
    handleChange(e){
        
        const value = e.target.id;
        console.log(value);
        this.props.update(value);
        
    }

    handleClose(e){
        this.props.handleClose();
    }

    handleRight(e){
        if( this.state.Index<this.state.Questions.length-1){
            this.increaseIndex();
            let prompt =    this.state.Questions[this.state.Index+1]['prompt'];
            let choice_A =  this.state.Questions[this.state.Index+1]['answers']['answer1'];
            let choice_B =  this.state.Questions[this.state.Index+1]['answers']['answer2'];
            let choice_C =  this.state.Questions[this.state.Index+1]['answers']['answer3'];
            let choice_D =  this.state.Questions[this.state.Index+1]['answers']['answer4'];
            let answer =    this.state.Questions[this.state.Index+1]['answer'];
            this.changePrompt(prompt);
            this.changeChoice_A(choice_A);
            this.changeChoice_B(choice_B);
            this.changeChoice_C(choice_C);
            this.changeChoice_D(choice_D);
            this.changeAnswer(answer);
            this.setState({Selected_A:false})
            this.setState({Selected_B:false})
            this.setState({Selected_C:false})
            this.setState({Selected_D:false})
            }
    }

    handleLeft(e){
        if( this.state.Index>0){
            this.decreaseIndex();
            let prompt =    this.state.Questions[this.state.Index-1]['prompt'];
            let choice_A =  this.state.Questions[this.state.Index-1]['answers']['answer1'];
            let choice_B =  this.state.Questions[this.state.Index-1]['answers']['answer2'];
            let choice_C =  this.state.Questions[this.state.Index-1]['answers']['answer3'];
            let choice_D =  this.state.Questions[this.state.Index-1]['answers']['answer4'];
            let answer =    this.state.Questions[this.state.Index-1]['answer'];
            this.changePrompt(prompt);
            this.changeChoice_A(choice_A);
            this.changeChoice_B(choice_B);
            this.changeChoice_C(choice_C);
            this.changeChoice_D(choice_D);
            this.changeAnswer(answer);
            this.setState({Selected_A:false})
            this.setState({Selected_B:false})
            this.setState({Selected_C:false})
            this.setState({Selected_D:false})
            }
    }

    handleBoxClickA(e){
        this.setState({Selected_A:true})
    }
    handleBoxClickB(e){
        this.setState({Selected_B:true})
    }
    handleBoxClickC(e){
        this.setState({Selected_C:true})
    }
    handleBoxClickD(e){
        this.setState({Selected_D:true})
    }
    /*    const value = e.target;
        //if( value == this.state.answer)
        console.log(value)
        switch(value) {
            case "A":
            
              break;
            case "B":
                this.setState({Selected_B:true})
                break;
            case "C":
                this.setState({Selected_C:true})
                break;
            case "D":
                this.setState({Selected_D:true})
                break;
          }

    }*/


    render() {
        return(
            <QuestionWrapper>
                <QuestionHeader>
                <Close onClick={this.handleClose.bind(this)}>Close</Close>
                <QuestionProgressText>Question {this.state.Index+1}/{this.state.Questions.length}</QuestionProgressText>
                </QuestionHeader>
                <div>
                    <QuestionLayout>
                    <Text>{this.state.Prompt+"?"}</Text>
                    <Box id="A" onClick={this.handleBoxClickA.bind(this)}>
                        <QuestionText>{this.state.Choice_A}</QuestionText>
                        <AnswerLight choice={this.state.Choice_A}
                                     answer={this.state.Answer}
                                     show={this.state.Selected_A}>
                        </AnswerLight>
                    </Box>
                    <Box id="B" onClick={this.handleBoxClickB.bind(this)}>
                        <QuestionText>{this.state.Choice_B}</QuestionText>
                        <AnswerLight choice={this.state.Choice_B}
                                     answer={this.state.Answer}
                                     show={this.state.Selected_B}>
                        </AnswerLight>
                    </Box>
                    <Box id="C" onClick={this.handleBoxClickC.bind(this)}>
                        <QuestionText>{this.state.Choice_C}</QuestionText>
                        <AnswerLight choice={this.state.Choice_C}
                                     answer={this.state.Answer}
                                     show={this.state.Selected_C}>
                        </AnswerLight>
                    </Box>
                    <Box id="D" onClick={this.handleBoxClickD.bind(this)}>
                        <QuestionText>{this.state.Choice_D}</QuestionText>
                        <AnswerLight choice={this.state.Choice_D}
                                     answer={this.state.Answer}
                                     show={this.state.Selected_D}
                                     >
                        </AnswerLight>
                    </Box>
                    </QuestionLayout>
                </div>
                <NavLayout>
                    <NavButton onClick={this.handleLeft}>&#8592;</NavButton>
                    <NavButton onClick={this.handleRight}>&#8594;</NavButton>
                </NavLayout>
                
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
