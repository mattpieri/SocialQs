import React, {useContext, useState} from 'react';
import {CreateContext} from '../contexts/CreateContext'
import styled from 'styled-components'
import backwardarrow from "../assets/images/backwardarrow.png";

const Image = styled.img`
position: absolute;
margin: 20px;

`
const Banner = styled.div`
    color: white;
    text-align: center;
    padding: 5px;
    font-size: 20px;
    margin: 10px;

`;

const Background = styled.div`
    background-color: #25262B; 
    height:100vh;
    font-family: sans-serif;
    display: flex;
    flex-direction: column;
    justify-content: start;
`;

const Editor = styled.input`
    font-size: 20px;
    width: 90%;
    margin-left: auto;
    margin-right: auto;
    outline: none;
    color: palevioletred;
    background-color: #25262B
`;

const Selector = styled.select`
    font-size: 20px;
    width: 90%;
    margin-left: auto;
    margin-right: auto;
    outline: none;
    color: palevioletred;
    background-color: #25262B
`;

const ComplexTextInput = props => {
    const [details, setDetails] = useContext(CreateContext);
    const [question, setQuestion] = useState("");
    const [choiceA, setChoiceA] = useState("");
    const [choiceB, setChoiceB] = useState("");
    const [choiceC, setChoiceC] = useState("");
    const [choiceD, setChoiceD] = useState("");
    const [answer, setAnswer] = useState("");

    const vadidateInput = e => {
        var result = true;
        if( question == "" || choiceA == "" || choiceB == "" || choiceC == ""|| choiceD == "" || answer == "")
            result = false;
        return( result )
    }

    const goBack = e => {
        if( vadidateInput() == false )
        {
            alert("One or more inputs is blank!")
        }else{
        setDetails(prev => ({
            ...prev,
            Questions: [ ...prev.Questions, { "question": question, 
                                            "choiceA": choiceA, 
                                            "choiceB": choiceB, 
                                            "choiceC": choiceC,
                                            "choiceD": choiceD, 
                                            "answer": answer, 
                                            "questionId": 'Q'+Math.floor(Math.random()*90000)
                                        } ]
        }));
        //setDetails({...details["Questions"],"Questions":[...details["Questions"],"asdf"]});
        props.history.goBack();
        }
    }

    const handleChangeQ = e => { setQuestion(e.target.value);}  
    const handleChangeA = e => { setChoiceA(e.target.value);}  
    const handleChangeB = e => { setChoiceB(e.target.value);}  
    const handleChangeC = e => { setChoiceC(e.target.value);}  
    const handleChangeD = e => { setChoiceD(e.target.value);}  
    const handleChangeAnswer = e => { setAnswer(e.target.value);}  

    return (
        <Background>
            <Image onClick={goBack} src={backwardarrow} ></Image>
            <Banner>Question</Banner>
            <Editor type="text" value={question} onChange={handleChangeQ}/>
            <Banner>Answer A</Banner>
            <Editor type="text" value={choiceA} onChange={handleChangeA}/>
            <Banner>Answer B</Banner>
            <Editor type="text" value={choiceB} onChange={handleChangeB}/>
            <Banner>Answer C</Banner>
            <Editor type="text" value={choiceC} onChange={handleChangeC}/>
            <Banner>Answer D</Banner>
            <Editor type="text" value={choiceD} onChange={handleChangeD}/>
            <Banner>Answer</Banner>
            <Selector onChange={handleChangeAnswer}>
                <option value={choiceA}>{choiceA}</option>
                <option value={choiceB}>{choiceB}</option>
                <option value={choiceC}>{choiceC}</option>
                <option value={choiceD}>{choiceD}</option>
            </Selector>
        </Background>
    )

}

export { ComplexTextInput }