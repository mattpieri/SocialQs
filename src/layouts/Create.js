import React, {useContext, useState} from 'react';
import styled from 'styled-components'
import MyNavTest  from '../components/MyNav';
import ImageUploader from 'react-images-upload';
import {Link} from 'react-router-dom';
import styles from '../styles/Modal.css'; 
//import DataProvider from '../contexts/DataProvider'
import SimpleTextInput from './Test';
import {CreateContext} from '../contexts/CreateContext'

const Logo = styled.div`
`;

const Banner = styled.div`
    color: white;
    text-align: center;
    padding: 5px;
    font-size: 20px;
    font-weight: bold;
`;

const Text = styled.div`
font-size: 1em;
color: white;
`;
const SubText = styled.div`
    font-size: 13px;
    color: #9f9fa1;

`;

const Background = styled.div`
    background-color: #25262B; 
    height:100vh;
`;


const TextLayout = styled(Link)`
    padding-top: 5px;
    padding-bottom: 5px;
    border-bottom:    1px solid  #353A3E;
    margin-left: 10px;
    margin-right: 10px;
`;

const AppLayout = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
    background-color: #25262B; 
    height: 100vh;
    font-family: sans-serif;
`;

const Questionlayout = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
    margin-left:10px;
    margin-right:10px;
`;

const Question = styled(Link)`
    border-radius:25px;
    border: 1px solid #353A3E;
    margin-top:5px;
    margin-bottom:5px;
    padding: 10px;
    padding-left:15px;
    font-size: 13px;
    color: #9f9fa1;
`;

const QuestionLink = styled(Link)`
    border-radius:25px;
    border: 1px solid #353A3E;
    margin-top:5px;
    margin-bottom:5px;
    padding: 10px;
    padding-left:15px;
    font-size: 13px;
    color: #9f9fa1;
`;

const Cancel = styled.div`
    font-size: 1em;
    margin: 5px;
    padding: 5px;
    position: absolute;
    color: palevioletred;
    font-weight: bold;

`;

const Done = styled(Link)`
    font-size: 1em;
    margin: 5px;
    padding: 5px;
    right: 0px;
    position: absolute;
    color: palevioletred;
    font-weight: bold;
    text-decoration: none;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`;


const Create = props => {
    const [picture, setPicture ] = useState([]);
    const [details, setDetails] = useContext(CreateContext);
    const apiTransactions = 'https://rcbnv6ut12.execute-api.us-east-1.amazonaws.com/test/transactions';
    const onDrop = picture => {
        console.log(picture);
        //setPicture({...prevPic
        //    pictures: this.state.pictures.concat(picture),
        //});
    }

    const vadidateQuestions = () => {
        if( details.Questions.length == 0 ){
            return( false )
        }
        return( true )
    }

    const goBack = () => {
        props.history.goBack();
    }

    const save = () => {
        console.log(vadidateQuestions() )
        if( vadidateQuestions() == false )
        {
            alert( "Please add atleast 1 question" )
        }else {
        post();
        props.history.goBack();
        }
    }


    const post = async () => {
        fetch( apiTransactions, {
          method: 'post',
          headers: {
          'Accept': 'application/json, text/plain, */*',
          //'Content-Type': 'application/json'
        },
        body: JSON.stringify(
        {
          gameID:  details.Title.toLowerCase(),
          questionId: details.Questions[0].questionId.toLowerCase(),
          answer1: details.Questions[0].choiceA.toLowerCase(),
          answer2: details.Questions[0].choiceB.toLowerCase(),
          answer3: details.Questions[0].choiceC.toLowerCase(),
          answer4: details.Questions[0].choiceD.toLowerCase(),
          answer:  details.Questions[0].answer.toLowerCase(),
          prompt:  details.Questions[0].question.toLowerCase(),
          requestType: 'update',
          type: 'multipleChoice'    
       })
        }).then(res=>res.json())
        .then(res => console.log(res));
      }
    
    const resetContext = () => {
        setDetails( 
            {
                AlexaCode: '#'+Math.floor(Math.random()*90000),
                Title: '...',
                Category: 'Entertainment',
                SubCategory: '...',
                Visibility: 'Public',
                Questions: [],
            }
        )
    }

    return(
    <Background>
        <MyNavTest>Alexa's Social Qs</MyNavTest>
        <AppLayout>
        <Cancel onClick={goBack}>Cancel</Cancel>
        <Done onClick={save}>Done</Done>
        <Banner>Add Game</Banner>
        <TextLayout>
        <ImageUploader
            withIcon={true}
            withLabel={false}
            fileContainerStyle = {{"font-color":"white","margin-left": "auto","margin-right": "auto","width": "50%","background-color": "#353A3E"}}
            buttonStyles = {{"color":"#4B4B4C","background-color":"#353A3E","border":"1px solid #4B4B4C"}}
            buttonText='Choose photo'
            onChange={onDrop}
            imgExtension={['.jpg', '.gif', '.png', '.gif']}
            maxFileSize={5242880}
        />
        </TextLayout>

        <TextLayout to={{pathname:'/text', state: {field:"AlexaCode", display: "Alexa Code"}}}><Text>Alexa Code</Text><SubText>{details.AlexaCode}</SubText></TextLayout>
        <TextLayout to={{pathname:'/edit', state: {field:"Title", display: "Title"}}}><Text>Title</Text><SubText>{details.Title}</SubText></TextLayout>
        <TextLayout to={{pathname:'/drop', state: {field:"Category", display: "Category"}}}><Text>Category</Text><SubText>{details.Category}</SubText></TextLayout>
        <TextLayout to={{pathname:'/drop', state: {field:"SubCategory", display: "Sub Category"}}}><Text>Sub-Category</Text><SubText>{details.SubCategory}</SubText></TextLayout>
        <TextLayout to={{pathname:'/simpdrop', state: {field:"Visibility", display: "Visibility"}}}><Text>Visiblity</Text><SubText>{details.Visibility}</SubText></TextLayout>
        
        <TextLayout><Text>Questions</Text>
            <Questionlayout>
                <QuestionLink to={{pathname:'/question', state: {field:"Visibility", display: "Visibility"}}}>+ Add Question</QuestionLink>
                {
                details.Questions.map((question)=> 
                    <Question id={question.questionId}>{question.question}</Question>
                )
                }
            </Questionlayout>
        </TextLayout>
        </AppLayout>
    </Background>
    );
};

export default Create